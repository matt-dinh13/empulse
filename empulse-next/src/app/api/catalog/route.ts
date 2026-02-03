import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

// GET /api/catalog - Get reward catalog for user's region
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Get user's region
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { regionId: true },
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        const catalog = await prisma.rewardCatalog.findMany({
            where: {
                regionId: user.regionId,
                isActive: true,
            },
            orderBy: { sortOrder: 'asc' },
        })

        return NextResponse.json({ catalog })
    } catch (error) {
        console.error('Get catalog error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
