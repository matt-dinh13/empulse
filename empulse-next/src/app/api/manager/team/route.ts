import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const userId = await authenticateRequest(request)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

        // Get subordinates
        const subordinates = await prisma.user.findMany({
            where: { managerId: userId, isActive: true },
            select: {
                id: true,
                fullName: true,
                email: true,
                team: { select: { name: true } },
            },
        })

        if (subordinates.length === 0) {
            return NextResponse.json({ error: 'No team members found' }, { status: 404 })
        }

        const subIds = subordinates.map(s => s.id)

        // Vote counts for each team member this month
        const [sentCounts, receivedCounts] = await Promise.all([
            prisma.vote.groupBy({
                by: ['senderId'],
                _count: { id: true },
                where: { senderId: { in: subIds }, createdAt: { gte: startOfMonth } },
            }),
            prisma.vote.groupBy({
                by: ['receiverId'],
                _count: { id: true },
                where: { receiverId: { in: subIds }, createdAt: { gte: startOfMonth } },
            }),
        ])

        const members = subordinates.map(sub => {
            const sent = sentCounts.find(s => s.senderId === sub.id)?._count.id ?? 0
            const received = receivedCounts.find(r => r.receiverId === sub.id)?._count.id ?? 0
            return {
                id: sub.id,
                fullName: sub.fullName,
                email: sub.email,
                team: sub.team?.name ?? '-',
                votesSent: sent,
                votesReceived: received,
                isActive: sent > 0,
            }
        })

        const totalSent = members.reduce((sum, m) => sum + m.votesSent, 0)
        const totalReceived = members.reduce((sum, m) => sum + m.votesReceived, 0)
        const inactiveMembers = members.filter(m => !m.isActive)

        // Recent team recognition feed (last 10 votes involving team members)
        const teamFeed = await prisma.vote.findMany({
            where: {
                OR: [
                    { senderId: { in: subIds } },
                    { receiverId: { in: subIds } },
                ],
                createdAt: { gte: startOfMonth },
            },
            include: {
                sender: { select: { fullName: true } },
                receiver: { select: { fullName: true } },
                valueTags: { include: { valueTag: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 10,
        })

        const feed = teamFeed.map(v => ({
            id: v.id,
            senderName: v.sender.fullName,
            receiverName: v.receiver.fullName,
            message: v.message,
            values: v.valueTags.map(vt => `${vt.valueTag.icon} ${vt.valueTag.name}`),
            createdAt: v.createdAt,
        }))

        return NextResponse.json({
            summary: {
                totalMembers: members.length,
                totalSent,
                totalReceived,
                inactiveCount: inactiveMembers.length,
            },
            members,
            inactiveMembers: inactiveMembers.map(m => ({ id: m.id, fullName: m.fullName })),
            feed,
        })
    } catch (error) {
        console.error('Manager team error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
