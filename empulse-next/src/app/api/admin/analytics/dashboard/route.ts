import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import { getCache, setCache } from '@/lib/memoryCache'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const cacheKey = `admin:dashboard:v2:${admin.role}:${admin.regionId ?? 'all'}`
        const cacheHeaders = { 'Cache-Control': 'private, max-age=30' }

        const cached = getCache<Record<string, unknown>>(cacheKey)
        if (cached) {
            return NextResponse.json(cached, { headers: cacheHeaders })
        }

        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
        const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59)

        // Core stats
        const [
            totalUsers,
            totalVotes,
            votesThisMonth,
            votesLastMonth,
            pendingOrders,
            ordersStats,
            activeVotersThisMonth,
        ] = await Promise.all([
            prisma.user.count({ where: { isActive: true } }),
            prisma.vote.count(),
            prisma.vote.count({ where: { createdAt: { gte: startOfMonth } } }),
            prisma.vote.count({ where: { createdAt: { gte: startOfLastMonth, lte: endOfLastMonth } } }),
            prisma.redemptionOrder.count({ where: { status: 'PENDING_APPROVAL' } }),
            prisma.redemptionOrder.aggregate({
                _sum: { pointsSpent: true },
                where: { status: { in: ['APPROVED', 'COMPLETED'] } }
            }),
            prisma.vote.groupBy({
                by: ['senderId'],
                where: { createdAt: { gte: startOfMonth } },
            }),
        ])

        const activeVotersPct = totalUsers > 0
            ? Math.round((activeVotersThisMonth.length / totalUsers) * 100)
            : 0
        const voteTrend = votesLastMonth > 0
            ? Math.round(((votesThisMonth - votesLastMonth) / votesLastMonth) * 100)
            : votesThisMonth > 0 ? 100 : 0

        // Top receivers
        const topReceivers = await prisma.vote.groupBy({
            by: ['receiverId'],
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        })

        const leaderboard = await Promise.all(topReceivers.map(async (item) => {
            const user = await prisma.user.findUnique({
                where: { id: item.receiverId },
                select: { fullName: true, email: true, team: { select: { name: true } } }
            })
            return { ...user, voteCount: item._count.id }
        }))

        // Value tag distribution
        const tagDistribution = await prisma.voteValueTag.groupBy({
            by: ['valueTagId'],
            _count: { valueTagId: true },
        })

        const tagIds = tagDistribution.map(t => t.valueTagId)
        const tags = tagIds.length > 0
            ? await prisma.valueTag.findMany({ where: { id: { in: tagIds } } })
            : []

        const valueTagStats = tagDistribution.map(t => {
            const tag = tags.find(tg => tg.id === t.valueTagId)
            return { name: tag?.name ?? 'Unknown', icon: tag?.icon ?? '⭐', count: t._count.valueTagId }
        }).sort((a, b) => b.count - a.count)

        // Regional breakdown
        const regionVotes = await prisma.$queryRaw<{ regionId: number; code: string; name: string; voteCount: bigint }[]>`
            SELECT r.id as "regionId", r.code, r.name, COUNT(v.id) as "voteCount"
            FROM regions r
            LEFT JOIN users u ON u.region_id = r.id
            LEFT JOIN votes v ON v.sender_id = u.id
            WHERE r.is_active = true
            GROUP BY r.id, r.code, r.name
            ORDER BY "voteCount" DESC
        `

        const regionRedemptions = await prisma.$queryRaw<{ regionId: number; code: string; totalSpent: bigint }[]>`
            SELECT r.id as "regionId", r.code, COALESCE(SUM(o.points_spent), 0) as "totalSpent"
            FROM regions r
            LEFT JOIN users u ON u.region_id = r.id
            LEFT JOIN redemption_orders o ON o.user_id = u.id AND o.status IN ('APPROVED', 'COMPLETED')
            WHERE r.is_active = true
            GROUP BY r.id, r.code
        `

        const regionalBreakdown = regionVotes.map(rv => {
            const redemption = regionRedemptions.find(rr => rr.regionId === rv.regionId)
            return {
                code: rv.code,
                name: rv.name,
                votes: Number(rv.voteCount),
                pointsRedeemed: Number(redemption?.totalSpent ?? 0),
            }
        })

        // Redemption metrics
        const [pointsRedeemedThisMonth, popularItems] = await Promise.all([
            prisma.redemptionOrder.aggregate({
                _sum: { pointsSpent: true },
                where: {
                    status: { in: ['APPROVED', 'COMPLETED'] },
                    createdAt: { gte: startOfMonth }
                }
            }),
            prisma.redemptionOrder.groupBy({
                by: ['catalogId'],
                _count: { id: true },
                _sum: { pointsSpent: true },
                orderBy: { _count: { id: 'desc' } },
                take: 5,
            }),
        ])

        const catalogIds = popularItems.map(p => p.catalogId)
        const catalogs = catalogIds.length > 0
            ? await prisma.rewardCatalog.findMany({
                where: { id: { in: catalogIds } },
                select: { id: true, name: true, icon: true }
            })
            : []

        const popularItemStats = popularItems.map(p => {
            const cat = catalogs.find((c: { id: number }) => c.id === p.catalogId)
            return {
                name: cat?.name ?? 'Unknown',
                icon: cat?.icon ?? '🎁',
                orderCount: p._count.id,
                totalPoints: p._sum.pointsSpent ?? 0,
            }
        })

        const payload = {
            stats: {
                totalUsers,
                totalVotes,
                votesThisMonth,
                voteTrend,
                activeVotersPct,
                pendingOrders,
                pointsRedeemed: ordersStats._sum.pointsSpent || 0,
                pointsRedeemedThisMonth: pointsRedeemedThisMonth._sum.pointsSpent || 0,
            },
            leaderboard,
            valueTagStats,
            regionalBreakdown,
            popularItems: popularItemStats,
        }

        setCache(cacheKey, payload, 30_000)

        return NextResponse.json(payload, { headers: cacheHeaders })
    } catch (error) {
        console.error('Analytics error:', error)
        const message = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({ error: 'Internal Server Error', details: message }, { status: 500 })
    }
}
