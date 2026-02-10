import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCache, setCache } from '@/lib/memoryCache'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const period = searchParams.get('period') || 'month'
        const type = searchParams.get('type') || 'receivers'
        const cacheKey = `leaderboard:${period}:${type}`
        const cacheHeaders = {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }

        const cached = getCache<{ period: string; type: string; leaderboard: unknown[] }>(cacheKey)
        if (cached) {
            return NextResponse.json(cached, { headers: cacheHeaders })
        }

        // Date filter
        let dateFilter = {}
        if (period === 'month') {
            const now = new Date()
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
            dateFilter = { createdAt: { gte: startOfMonth } }
        }

        let leaderboard: unknown[]

        if (type === 'senders') {
            // Top recognizers
            const grouped = await prisma.vote.groupBy({
                by: ['senderId'],
                _count: { id: true },
                where: { ...dateFilter },
                orderBy: { _count: { id: 'desc' } },
                take: 10,
            })

            if (grouped.length === 0) {
                return NextResponse.json({ period, type, leaderboard: [] })
            }

            const senderIds = grouped.map(g => g.senderId)
            const users = await prisma.user.findMany({
                where: { id: { in: senderIds } },
                select: { id: true, fullName: true, role: true, team: { select: { name: true } } },
            })

            leaderboard = grouped.map((entry, index) => {
                const user = users.find(u => u.id === entry.senderId)
                return {
                    rank: index + 1,
                    userId: entry.senderId,
                    name: user?.fullName || 'Unknown',
                    avatar: null,
                    role: user?.role || 'Employee',
                    department: user?.team?.name || '',
                    voteCount: entry._count.id,
                }
            })
        } else if (type === 'teams') {
            // Team aggregate points
            const votes = await prisma.vote.findMany({
                where: { ...dateFilter },
                select: {
                    pointsAwarded: true,
                    receiver: { select: { team: { select: { id: true, name: true } } } },
                },
            })

            const teamMap = new Map<number, { name: string; points: number; voteCount: number }>()
            for (const vote of votes) {
                const team = vote.receiver.team
                if (!team) continue
                const existing = teamMap.get(team.id)
                if (existing) {
                    existing.points += vote.pointsAwarded
                    existing.voteCount++
                } else {
                    teamMap.set(team.id, { name: team.name, points: vote.pointsAwarded, voteCount: 1 })
                }
            }

            leaderboard = Array.from(teamMap.entries())
                .sort((a, b) => b[1].points - a[1].points)
                .slice(0, 10)
                .map(([teamId, data], index) => ({
                    rank: index + 1,
                    teamId,
                    name: data.name,
                    points: data.points,
                    voteCount: data.voteCount,
                }))
        } else {
            // Default: top receivers
            const grouped = await prisma.vote.groupBy({
                by: ['receiverId'],
                _sum: { pointsAwarded: true },
                where: { ...dateFilter },
                orderBy: { _sum: { pointsAwarded: 'desc' } },
                take: 10,
            })

            if (grouped.length === 0) {
                return NextResponse.json({ period, type, leaderboard: [] })
            }

            const receiverIds = grouped.map(g => g.receiverId)
            const users = await prisma.user.findMany({
                where: { id: { in: receiverIds } },
                select: { id: true, fullName: true, role: true, team: { select: { name: true } } },
            })

            leaderboard = grouped.map((entry, index) => {
                const user = users.find(u => u.id === entry.receiverId)
                return {
                    rank: index + 1,
                    userId: entry.receiverId,
                    name: user?.fullName || 'Unknown',
                    avatar: null,
                    role: user?.role || 'Employee',
                    department: user?.team?.name || '',
                    points: entry._sum.pointsAwarded || 0,
                }
            })
        }

        const payload = { period, type, leaderboard }
        setCache(cacheKey, payload, 60_000)

        return NextResponse.json(payload, { headers: cacheHeaders })
    } catch (error) {
        console.error('Leaderboard API Error:', error)
        return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
    }
}
