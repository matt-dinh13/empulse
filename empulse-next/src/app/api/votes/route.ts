import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { logger } from '@/lib/logger'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// --- Helper Functions ---

function getMonthYear(date: Date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

function getWeekYear(date: Date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

async function getVotingSettings() {
    const settings = await prisma.systemSetting.findMany({
        where: {
            settingKey: {
                in: [
                    'quota_per_month',
                    'max_votes_per_week',
                    'max_votes_per_person_per_month',
                    'cooldown_days_after_max',
                    'same_team_vote_limit_percent',
                    'points_per_vote'
                ]
            }
        }
    })

    const map: Record<string, number> = {}
    settings.forEach(s => {
        map[s.settingKey] = parseInt(s.settingValue)
    })

    return {
        quotaPerMonth: map.quota_per_month || 8,
        maxVotesPerWeek: map.max_votes_per_week || 2,
        maxVotesPerPersonPerMonth: map.max_votes_per_person_per_month || 2,
        cooldownDays: map.cooldown_days_after_max || 14,
        sameTeamLimitPercent: map.same_team_vote_limit_percent || 50,
        pointsPerVote: map.points_per_vote || 10
    }
}

async function countSameTeamVotesThisMonth(senderId: number, teamId: number) {
    const date = new Date()
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1)

    return prisma.vote.count({
        where: {
            senderId,
            createdAt: { gte: monthStart },
            receiver: { teamId }
        }
    })
}

// --- Routes ---

// GET /api/votes - Get votes for current user
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') || 'received'
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const skip = (page - 1) * limit

        const whereClause = type === 'sent'
            ? { senderId: userId }
            : { receiverId: userId }

        const [votes, total] = await Promise.all([
            prisma.vote.findMany({
                where: whereClause,
                include: {
                    sender: { select: { id: true, fullName: true, email: true, team: { select: { name: true } } } },
                    receiver: { select: { id: true, fullName: true, email: true, team: { select: { name: true } } } },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.vote.count({ where: whereClause }),
        ])

        return NextResponse.json({
            votes,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        })
    } catch (error) {
        console.error('Get votes error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// POST /api/votes - Send a vote
export async function POST(request: NextRequest) {
    let userId: number | null = null
    try {
        userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { receiverId, message } = body

        // Basic validations
        if (!receiverId || !message) {
            return NextResponse.json({ error: 'Receiver and message are required' }, { status: 400 })
        }
        if (message.length < 20) {
            return NextResponse.json({ error: 'Message must be at least 20 characters' }, { status: 400 })
        }
        if (receiverId === userId) {
            return NextResponse.json({ error: 'Cannot vote for yourself' }, { status: 400 })
        }

        // Fetch Sender specific data (manager, team)
        const sender = await prisma.user.findUnique({ where: { id: userId } })
        if (!sender) return NextResponse.json({ error: 'User not found' }, { status: 404 })

        // 1. Check Manager
        if (sender.managerId === receiverId) {
            return NextResponse.json({ error: 'Cannot vote for your direct manager' }, { status: 400 })
        }

        // Fetch Receiver
        const receiver = await prisma.user.findUnique({
            where: { id: receiverId },
            include: { team: true }
        })
        if (!receiver || !receiver.isActive) {
            return NextResponse.json({ error: 'Receiver not found or inactive' }, { status: 404 })
        }

        // Fetch Settings
        const settings = await getVotingSettings()

        // 2. Check Weekly Limit
        const weekYear = getWeekYear(new Date())
        const weeklyTracking = await prisma.weeklyVoteTracking.findUnique({
            where: { userId_weekYear: { userId, weekYear } }
        })
        if (weeklyTracking && weeklyTracking.voteCount >= settings.maxVotesPerWeek) {
            return NextResponse.json({ error: `Maximum ${settings.maxVotesPerWeek} votes per week reached` }, { status: 400 })
        }

        // 3. Check Per-Person Month Limit & Cooldown
        const monthYear = getMonthYear(new Date())
        const voteTracking = await prisma.voteTracking.findUnique({
            where: { senderId_receiverId_monthYear: { senderId: userId, receiverId, monthYear } }
        })

        if (voteTracking) {
            if (voteTracking.cooldownUntil && new Date() < voteTracking.cooldownUntil) {
                const daysLeft = Math.ceil((voteTracking.cooldownUntil.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
                return NextResponse.json({
                    error: `Cooldown active. ${daysLeft} days remaining before you can vote for this person again.`
                }, { status: 400 })
            }
            if (voteTracking.voteCount >= settings.maxVotesPerPersonPerMonth) {
                return NextResponse.json({ error: `Maximum ${settings.maxVotesPerPersonPerMonth} votes to this person per month reached` }, { status: 400 })
            }
        }

        // 4. Check Same Team Limit
        if (sender.teamId && receiver.teamId === sender.teamId) {
            const sameTeamVotes = await countSameTeamVotesThisMonth(userId, sender.teamId)
            const maxSameTeam = Math.floor(settings.quotaPerMonth * settings.sameTeamLimitPercent / 100)

            if (sameTeamVotes >= maxSameTeam) {
                return NextResponse.json({
                    error: `Maximum ${settings.sameTeamLimitPercent}% votes to same team reached (${maxSameTeam} of ${settings.quotaPerMonth})`
                }, { status: 400 })
            }
        }

        // 5. Check Quota Wallet
        const quotaWallet = await prisma.quotaWallet.findUnique({ where: { userId } })
        if (!quotaWallet || quotaWallet.balance < 1) {
            return NextResponse.json({ error: 'Insufficient quota' }, { status: 400 })
        }

        // === Execute Transaction ===
        const result = await prisma.$transaction(async (tx) => {
            // Deduct Quota
            await tx.quotaWallet.update({
                where: { userId },
                data: { balance: { decrement: 1 } }
            })

            // Add Points to Receiver
            await tx.rewardWallet.update({
                where: { userId: receiverId },
                data: { balance: { increment: settings.pointsPerVote } }
            })

            // Create Vote
            const vote = await tx.vote.create({
                data: {
                    senderId: userId,
                    receiverId,
                    message,
                    pointsAwarded: settings.pointsPerVote
                },
                include: {
                    sender: { select: { id: true, fullName: true } },
                    receiver: { select: { id: true, fullName: true } }
                }
            })

            // Update Vote Tracking (Person)
            const newVoteCount = (voteTracking?.voteCount || 0) + 1
            const cooldownUntil = newVoteCount >= settings.maxVotesPerPersonPerMonth
                ? new Date(Date.now() + settings.cooldownDays * 24 * 60 * 60 * 1000)
                : null

            await tx.voteTracking.upsert({
                where: { senderId_receiverId_monthYear: { senderId: userId, receiverId, monthYear } },
                create: {
                    senderId: userId,
                    receiverId,
                    monthYear,
                    voteCount: 1,
                    lastVoteAt: new Date(),
                    cooldownUntil
                },
                update: {
                    voteCount: { increment: 1 },
                    lastVoteAt: new Date(),
                    cooldownUntil
                }
            })

            // Update Weekly Tracking
            await tx.weeklyVoteTracking.upsert({
                where: { userId_weekYear: { userId, weekYear } },
                create: { userId, weekYear, voteCount: 1 },
                update: { voteCount: { increment: 1 } }
            })

            // Reciprocal Check
            // Check if receiver voted for sender recently (this month)
            const reciprocalVote = await tx.vote.findFirst({
                where: {
                    senderId: receiverId,
                    receiverId: userId,
                    createdAt: { gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
                }
            })

            if (reciprocalVote) {
                // Log to Audit
                await tx.auditLog.create({
                    data: {
                        actorId: userId,
                        action: 'RECIPROCAL_VOTE_DETECTED',
                        entityType: 'vote',
                        entityId: Number(vote.id), // Ensure parsing if needed, though id is Int usually
                        newValue: {
                            voterId: userId,
                            receiverId,
                            reciprocalVoteId: reciprocalVote.id
                        }
                    }
                })
            }

            return { vote, isReciprocal: !!reciprocalVote }
        })

        // Fetch updated quota for response
        const updatedQuota = await prisma.quotaWallet.findUnique({ where: { userId } })

        return NextResponse.json({
            message: 'Vote sent successfully',
            vote: result.vote,
            quotaRemaining: updatedQuota?.balance || 0,
            isReciprocal: result.isReciprocal,
            warning: result.isReciprocal ? 'Reciprocal vote detected - flagged for review' : undefined
        }, { status: 201 })

    } catch (error) {
        logger.error('Send vote error', error, { userId: userId ?? undefined })
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
