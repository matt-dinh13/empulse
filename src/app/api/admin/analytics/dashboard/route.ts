import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const user = await verifyToken(request)
    if (!user || user.role !== 'admin' && user.role !== 'hr_admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        // Run concurrent queries
        const [
            totalUsers,
            totalVotes,
            pendingOrders,
            ordersStats
        ] = await Promise.all([
            prisma.user.count({ where: { isActive: true } }),
            prisma.vote.count(),
            prisma.redemptionOrder.count({ where: { status: 'PENDING_APPROVAL' } }),
            prisma.redemptionOrder.aggregate({
                _sum: { pointsSpent: true },
                where: { status: { in: ['APPROVED', 'COMPLETED'] } }
            })
        ])

        // Get top receivers (Leaderboard) - simplified
        const topReceivers = await prisma.vote.groupBy({
            by: ['receiverId'],
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        })

        // Fetch user details for leaderboard
        const leaderboard = await Promise.all(topReceivers.map(async (item) => {
            const user = await prisma.user.findUnique({
                where: { id: item.receiverId },
                select: { fullName: true, email: true, team: { select: { name: true } } }
            })
            return {
                ...user,
                voteCount: item._count.id
            }
        }))

        return NextResponse.json({
            stats: {
                totalUsers,
                totalVotes,
                pendingOrders,
                pointsRedeemed: ordersStats._sum.pointsSpent || 0
            },
            leaderboard
        })

    } catch (error) {
        console.error('Analytics error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
