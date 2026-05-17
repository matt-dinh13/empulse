import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { logger } from '@/lib/logger'
import { voteSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rateLimit'
import { AppError } from '@/lib/errors'
import {
    getVotingSettings,
    validateVoteEligibility,
    processVote,
    handlePostVoteEffects,
} from '@/lib/services/voteService'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

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

        const whereClause = type === 'sent' ? { senderId: userId } : { receiverId: userId }

        const [votes, total] = await Promise.all([
            prisma.vote.findMany({
                where: whereClause,
                include: {
                    sender: { select: { id: true, fullName: true, email: true, team: { select: { name: true } } } },
                    receiver: { select: { id: true, fullName: true, email: true, team: { select: { name: true } } } },
                    valueTags: { include: { valueTag: true } },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.vote.count({ where: whereClause }),
        ])

        return NextResponse.json({
            votes,
            pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
        })
    } catch (error) {
        logger.error('Get votes error', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// POST /api/votes - Send a vote
export async function POST(request: NextRequest) {
    let userId: number | null = null
    try {
        userId = await authenticateRequest(request)
        if (userId === null) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Rate limit
        const rl = await rateLimit(`vote:${userId}`, 10, 60 * 1000)
        if (!rl.success) {
            return NextResponse.json({ error: 'Too many requests. Please slow down.' }, { status: 429 })
        }

        // Validate input
        const body = await request.json()
        const parsed = voteSchema.safeParse(body)
        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
        }

        const { receiverId, message, valueTagIds } = parsed.data
        const settings = await getVotingSettings()

        // Validate business rules
        await validateVoteEligibility(userId, receiverId, settings)

        // Process vote (transaction)
        const result = await processVote(
            { senderId: userId, receiverId, message, valueTagIds },
            settings
        )

        // Fetch updated quota
        const updatedQuota = await prisma.quotaWallet.findUnique({ where: { userId } })

        // Fire-and-forget side effects
        handlePostVoteEffects(
            result.vote.sender.fullName,
            result.vote.receiver.fullName,
            message,
            settings.pointsPerVote
        )

        return NextResponse.json(
            {
                message: 'Vote sent successfully',
                vote: {
                    ...result.vote,
                    valueTags: result.voteTags.map((vt) => ({
                        id: vt.valueTag.id,
                        name: vt.valueTag.name,
                        icon: vt.valueTag.icon,
                    })),
                },
                quotaRemaining: updatedQuota?.balance || 0,
                isReciprocal: result.isReciprocal,
                warning: result.isReciprocal ? 'Reciprocal vote detected - flagged for review' : undefined,
            },
            { status: 201 }
        )
    } catch (error) {
        if (error instanceof AppError) {
            return NextResponse.json(error.toJSON(), { status: error.statusCode })
        }
        // Surface actual error details for debugging (avoid generic "Internal server error")
        const errMsg = error instanceof Error ? error.message : 'Unknown error'
        logger.error('Send vote error', error, { userId: userId ?? undefined, errorMessage: errMsg })
        return NextResponse.json(
            { error: errMsg.includes('Record to update not found') ? 'Wallet not found — please contact admin' : errMsg },
            { status: 500 }
        )
    }
}
