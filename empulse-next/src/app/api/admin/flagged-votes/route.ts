import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import { logger } from '@/lib/logger'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        // Fetch all reciprocal vote audit logs with actor info
        const logs = await prisma.auditLog.findMany({
            where: { action: 'RECIPROCAL_VOTE_DETECTED' },
            orderBy: { createdAt: 'desc' },
            take: 100,
            include: {
                actor: { select: { fullName: true, email: true } },
            },
        })

        // Collect all vote IDs we need to fetch (both original and reciprocal)
        const voteIds = new Set<number>()
        for (const log of logs) {
            if (log.entityId) voteIds.add(log.entityId)
            const meta = log.newValue as { reciprocalVoteId?: number } | null
            if (meta?.reciprocalVoteId) voteIds.add(meta.reciprocalVoteId)
        }

        // Single batch query for ALL votes (eliminates N+1)
        const votes = voteIds.size > 0
            ? await prisma.vote.findMany({
                where: { id: { in: Array.from(voteIds) } },
                include: {
                    sender: { select: { fullName: true, email: true } },
                    receiver: { select: { fullName: true, email: true } },
                },
            })
            : []

        // Index votes by ID for O(1) lookup
        const voteMap = new Map(votes.map(v => [v.id, v]))

        // Map logs to response items using the voteMap
        const items = logs.map((log) => {
            const meta = log.newValue as { voterId?: number; receiverId?: number; reciprocalVoteId?: number } | null
            const vote = log.entityId ? voteMap.get(log.entityId) : null
            const reciprocalVote = meta?.reciprocalVoteId ? voteMap.get(meta.reciprocalVoteId) : null

            return {
                id: Number(log.id),
                flaggedAt: log.createdAt,
                vote: vote ? {
                    id: vote.id,
                    senderName: vote.sender.fullName,
                    receiverName: vote.receiver.fullName,
                    message: vote.message,
                    createdAt: vote.createdAt,
                } : null,
                reciprocalVote: reciprocalVote ? {
                    id: reciprocalVote.id,
                    senderName: reciprocalVote.sender.fullName,
                    receiverName: reciprocalVote.receiver.fullName,
                    message: reciprocalVote.message,
                    createdAt: reciprocalVote.createdAt,
                } : null,
            }
        })

        return NextResponse.json({ items })
    } catch (error) {
        logger.error('Flagged votes error', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
