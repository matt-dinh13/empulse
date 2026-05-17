/**
 * Vote Service — Extracted business logic from votes/route.ts
 *
 * Contains all voting validation rules, vote processing,
 * and post-vote side effects (notifications, Slack, audit).
 */

import prisma from '@/lib/prisma'
import { AppError, ErrorCode } from '@/lib/errors'
import { postToSlack } from '@/lib/slack'
import { logger } from '@/lib/logger'

// --- Types ---

export interface VoteInput {
    senderId: number
    receiverId: number
    message: string
    valueTagIds?: number[]
}

export interface VotingSettings {
    quotaPerMonth: number
    maxVotesPerWeek: number
    maxVotesPerPersonPerMonth: number
    cooldownDays: number
    sameTeamLimitPercent: number
    pointsPerVote: number
}

// --- Helpers ---

export function getMonthYear(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export function getWeekYear(date: Date): string {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    const dayNum = d.getUTCDay() || 7
    d.setUTCDate(d.getUTCDate() + 4 - dayNum)
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
}

// --- Service Functions ---

/**
 * Fetch configurable voting settings from system_settings table
 */
export async function getVotingSettings(): Promise<VotingSettings> {
    const settings = await prisma.systemSetting.findMany({
        where: {
            settingKey: {
                in: [
                    'quota_per_month',
                    'max_votes_per_week',
                    'max_votes_per_person_per_month',
                    'cooldown_days_after_max',
                    'same_team_vote_limit_percent',
                    'points_per_vote',
                ],
            },
        },
    })

    const map: Record<string, number> = {}
    settings.forEach((s) => {
        map[s.settingKey] = parseInt(s.settingValue)
    })

    return {
        quotaPerMonth: map.quota_per_month || 8,
        maxVotesPerWeek: map.max_votes_per_week || 2,
        maxVotesPerPersonPerMonth: map.max_votes_per_person_per_month || 2,
        cooldownDays: map.cooldown_days_after_max || 14,
        sameTeamLimitPercent: map.same_team_vote_limit_percent || 50,
        pointsPerVote: map.points_per_vote || 10,
    }
}

/**
 * Validate all business rules for vote eligibility.
 * Throws AppError if any rule is violated.
 */
export async function validateVoteEligibility(
    senderId: number,
    receiverId: number,
    settings: VotingSettings
): Promise<void> {
    // Self-vote check
    if (receiverId === senderId) {
        throw new AppError(ErrorCode.VOTE_SELF_NOT_ALLOWED, 'Cannot vote for yourself')
    }

    // Fetch sender
    const sender = await prisma.user.findUnique({ where: { id: senderId } })
    if (!sender) {
        throw new AppError(ErrorCode.USER_NOT_FOUND, 'User not found')
    }

    // Manager check
    if (sender.managerId === receiverId) {
        throw new AppError(ErrorCode.VOTE_MANAGER_NOT_ALLOWED, 'Cannot vote for your direct manager')
    }

    // Fetch receiver
    const receiver = await prisma.user.findUnique({
        where: { id: receiverId },
        include: { team: true },
    })
    if (!receiver || !receiver.isActive) {
        throw new AppError(ErrorCode.USER_NOT_FOUND, 'Receiver not found or inactive')
    }

    // Weekly limit
    const weekYear = getWeekYear(new Date())
    const weeklyTracking = await prisma.weeklyVoteTracking.findUnique({
        where: { userId_weekYear: { userId: senderId, weekYear } },
    })
    if (weeklyTracking && weeklyTracking.voteCount >= settings.maxVotesPerWeek) {
        throw new AppError(
            ErrorCode.WEEKLY_LIMIT_EXCEEDED,
            `Maximum ${settings.maxVotesPerWeek} votes per week reached`
        )
    }

    // Per-person monthly limit & cooldown
    const monthYear = getMonthYear(new Date())
    const voteTracking = await prisma.voteTracking.findUnique({
        where: { senderId_receiverId_monthYear: { senderId, receiverId, monthYear } },
    })

    if (voteTracking) {
        if (voteTracking.cooldownUntil && new Date() < voteTracking.cooldownUntil) {
            const daysLeft = Math.ceil(
                (voteTracking.cooldownUntil.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            )
            throw new AppError(ErrorCode.COOLDOWN_ACTIVE, `Cooldown active. ${daysLeft} days remaining before you can vote for this person again.`)
        }
        if (voteTracking.voteCount >= settings.maxVotesPerPersonPerMonth) {
            throw new AppError(
                ErrorCode.PERSON_LIMIT_EXCEEDED,
                `Maximum ${settings.maxVotesPerPersonPerMonth} votes to this person per month reached`
            )
        }
    }

    // Same team limit
    if (sender.teamId && receiver.teamId === sender.teamId) {
        const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        const sameTeamVotes = await prisma.vote.count({
            where: {
                senderId,
                createdAt: { gte: monthStart },
                receiver: { teamId: sender.teamId },
            },
        })
        const maxSameTeam = Math.floor((settings.quotaPerMonth * settings.sameTeamLimitPercent) / 100)
        if (sameTeamVotes >= maxSameTeam) {
            throw new AppError(
                ErrorCode.SAME_TEAM_LIMIT_EXCEEDED,
                `Maximum ${settings.sameTeamLimitPercent}% votes to same team reached (${maxSameTeam} of ${settings.quotaPerMonth})`
            )
        }
    }
}

/**
 * Process a vote within a Prisma transaction.
 * Handles wallet updates, vote creation, tracking, and notifications.
 */
export async function processVote(input: VoteInput, settings: VotingSettings) {
    const { senderId, receiverId, message, valueTagIds } = input
    const monthYear = getMonthYear(new Date())
    const weekYear = getWeekYear(new Date())

    // Check existing tracking for cooldown calculation
    const voteTracking = await prisma.voteTracking.findUnique({
        where: { senderId_receiverId_monthYear: { senderId, receiverId, monthYear } },
    })

    const result = await prisma.$transaction(async (tx) => {
        // Check quota inside transaction (prevent race conditions)
        // Use upsert to auto-create wallet if missing (defensive)
        const now = new Date()
        const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
        const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)
        const quarterMonth = Math.floor(now.getMonth() / 3) * 3
        const quarterStart = new Date(now.getFullYear(), quarterMonth, 1)
        const quarterEnd = new Date(now.getFullYear(), quarterMonth + 3, 0)

        const quotaWallet = await tx.quotaWallet.upsert({
            where: { userId: senderId },
            create: { userId: senderId, balance: settings.quotaPerMonth, periodStart, periodEnd },
            update: {},
        })
        if (quotaWallet.balance < 1) {
            throw new AppError(ErrorCode.QUOTA_EXCEEDED, 'Insufficient quota. You have used all your votes this month.')
        }

        // Deduct quota
        await tx.quotaWallet.update({
            where: { userId: senderId },
            data: { balance: { decrement: 1 } },
        })

        // Add points to receiver (upsert to auto-create wallet if missing)
        await tx.rewardWallet.upsert({
            where: { userId: receiverId },
            create: { userId: receiverId, balance: settings.pointsPerVote, quarterStart, quarterEnd },
            update: { balance: { increment: settings.pointsPerVote } },
        })

        // Create vote
        const vote = await tx.vote.create({
            data: {
                senderId,
                receiverId,
                message,
                pointsAwarded: settings.pointsPerVote,
            },
            include: {
                sender: { select: { id: true, fullName: true } },
                receiver: { select: { id: true, fullName: true } },
            },
        })

        // Create value tag associations
        if (valueTagIds && valueTagIds.length > 0) {
            await tx.voteValueTag.createMany({
                data: valueTagIds.map((tagId) => ({
                    voteId: vote.id,
                    valueTagId: tagId,
                })),
            })
        }

        // Fetch value tags for response
        const voteTags =
            valueTagIds && valueTagIds.length > 0
                ? await tx.voteValueTag.findMany({
                      where: { voteId: vote.id },
                      include: { valueTag: true },
                  })
                : []

        // In-app notification
        await tx.inAppNotification.create({
            data: {
                userId: receiverId,
                type: 'VOTE_RECEIVED',
                title: `${vote.sender.fullName} recognized you!`,
                message: message.substring(0, 200),
                metadata: { voteId: vote.id, senderId },
            },
        })

        // Update vote tracking (per-person)
        const newVoteCount = (voteTracking?.voteCount || 0) + 1
        const cooldownUntil =
            newVoteCount >= settings.maxVotesPerPersonPerMonth
                ? new Date(Date.now() + settings.cooldownDays * 24 * 60 * 60 * 1000)
                : null

        await tx.voteTracking.upsert({
            where: { senderId_receiverId_monthYear: { senderId, receiverId, monthYear } },
            create: {
                senderId,
                receiverId,
                monthYear,
                voteCount: 1,
                lastVoteAt: new Date(),
                cooldownUntil,
            },
            update: {
                voteCount: { increment: 1 },
                lastVoteAt: new Date(),
                cooldownUntil,
            },
        })

        // Update weekly tracking
        await tx.weeklyVoteTracking.upsert({
            where: { userId_weekYear: { userId: senderId, weekYear } },
            create: { userId: senderId, weekYear, voteCount: 1 },
            update: { voteCount: { increment: 1 } },
        })

        // Reciprocal vote check
        const reciprocalVote = await tx.vote.findFirst({
            where: {
                senderId: receiverId,
                receiverId: senderId,
                createdAt: { gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) },
            },
        })

        if (reciprocalVote) {
            await tx.auditLog.create({
                data: {
                    actorId: senderId,
                    action: 'RECIPROCAL_VOTE_DETECTED',
                    entityType: 'vote',
                    entityId: vote.id,
                    newValue: {
                        voterId: senderId,
                        receiverId,
                        reciprocalVoteId: reciprocalVote.id,
                    },
                },
            })
        }

        return { vote, voteTags, isReciprocal: !!reciprocalVote }
    })

    return result
}

/**
 * Handle post-vote side effects (fire-and-forget).
 * Slack notification, etc.
 */
export function handlePostVoteEffects(
    senderName: string,
    receiverName: string,
    message: string,
    pointsPerVote: number
): void {
    postToSlack(
        `🎉 ${senderName} recognized ${receiverName}: "${message.length > 100 ? message.slice(0, 100) + '...' : message}" +${pointsPerVote} points`
    ).catch((err) => {
        logger.error('Post-vote Slack notification failed', err)
    })
}
