import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const logs = await prisma.auditLog.findMany({
            where: { action: 'RECIPROCAL_VOTE_DETECTED' },
            orderBy: { createdAt: 'desc' },
            take: 100,
            include: {
                actor: { select: { fullName: true, email: true } },
            },
        })

        const items = await Promise.all(logs.map(async (log) => {
            const meta = log.newValue as { voterId?: number; receiverId?: number; reciprocalVoteId?: number } | null

            const [vote, reciprocalVote] = await Promise.all([
                log.entityId ? prisma.vote.findUnique({
                    where: { id: log.entityId },
                    include: {
                        sender: { select: { fullName: true, email: true } },
                        receiver: { select: { fullName: true, email: true } },
                    },
                }) : null,
                meta?.reciprocalVoteId ? prisma.vote.findUnique({
                    where: { id: meta.reciprocalVoteId },
                    include: {
                        sender: { select: { fullName: true, email: true } },
                        receiver: { select: { fullName: true, email: true } },
                    },
                }) : null,
            ])

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
        }))

        return NextResponse.json({ items })
    } catch (error) {
        console.error('Flagged votes error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
