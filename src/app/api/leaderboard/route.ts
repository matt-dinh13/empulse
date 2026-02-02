import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const period = searchParams.get('period') || 'month' // 'month' | 'all'

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
                points: true
            },
            where: {
                ...dateFilter
            },
            orderBy: {
                _sum: {
                    points: 'desc'
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
                avatarUrl: true,
                jobTitle: true,
                department: true
            }
        })

        // 3. Merge Data
        const leaderboard = grouped.map((entry, index) => {
            const user = users.find(u => u.id === entry.receiverId)
            return {
                rank: index + 1,
                userId: entry.receiverId,
                name: user?.fullName || 'Unknown',
                avatar: user?.avatarUrl || null,
                role: user?.jobTitle || 'Employee',
                department: user?.department || '',
                points: entry._sum.points || 0
            }
        })

        return NextResponse.json({
            period,
            leaderboard
        })

    } catch (error) {
        console.error('Leaderboard API Error:', error)
        return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
    }
}
