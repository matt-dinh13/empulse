import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { voteSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rateLimit'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'
import {
    getVotingSettings,
    validateVoteEligibility,
    processVote,
    handlePostVoteEffects,
} from '@/lib/services/voteService'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/votes - Get votes for current user
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
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
})

// POST /api/votes - Send a vote
export const POST = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (userId === null) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    // Rate limit
    const rl = await rateLimit(`vote:${userId}`, 10, 60 * 1000)
    if (!rl.success) {
        throw new AppError(ErrorCode.RATE_LIMITED, 'Too many requests. Please slow down.')
    }

    // Validate input
    const body = await request.json()
    const parsed = voteSchema.safeParse(body)
    if (!parsed.success) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, parsed.error.issues[0].message)
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
})
