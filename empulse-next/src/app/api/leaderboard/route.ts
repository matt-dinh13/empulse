import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCache, setCache } from '@/lib/memoryCache'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const period = searchParams.get('period') || 'month' // 'month' | 'all'
        const cacheKey = `leaderboard:${period}`
        const cacheHeaders = {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }

        const cached = getCache<{ period: string; leaderboard: unknown[] }>(cacheKey)
        if (cached) {
            return NextResponse.json(cached, { headers: cacheHeaders })
        }

        // Date filter
        let dateFilter = {}
        if (period === 'month') {
            const now = new Date()
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
            dateFilter = {
                createdAt: {
                    gte: startOfMonth
                }
            }
        }

        // 1. Group votes by receiver to get sums
        const grouped = await prisma.vote.groupBy({
            by: ['receiverId'],
            _sum: {
                pointsAwarded: true
            },
            where: {
                ...dateFilter
            },
            orderBy: {
                _sum: {
                    pointsAwarded: 'desc'
                }
            },
            take: 10
        })

        if (grouped.length === 0) {
            return NextResponse.json({ leaderboard: [] })
        }

        // 2. Fetch User details
        const receiverIds = grouped.map(g => g.receiverId)
        const users = await prisma.user.findMany({
            where: { id: { in: receiverIds } },
            select: {
                id: true,
                fullName: true,
                role: true,
                team: {
                    select: {
                        name: true
                    }
                }
            }
        })

        // 3. Merge Data
        const leaderboard = grouped.map((entry, index) => {
            const user = users.find(u => u.id === entry.receiverId)
            return {
                rank: index + 1,
                userId: entry.receiverId,
                name: user?.fullName || 'Unknown',
                avatar: null, // User model has no avatarUrl yet
                role: user?.role || 'Employee',
                department: user?.team?.name || '',
                points: entry._sum.pointsAwarded || 0
            }
        })

        const payload = { period, leaderboard }
        setCache(cacheKey, payload, 60_000)

        return NextResponse.json(payload, { headers: cacheHeaders })

    } catch (error) {
        console.error('Leaderboard API Error:', error)
        return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
    }
}
