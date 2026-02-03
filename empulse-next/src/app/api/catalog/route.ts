import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { getCache, setCache } from '@/lib/memoryCache'

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

        const cacheKey = `catalog:region:${user.regionId}`
        const cacheHeaders = {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            'Vary': 'Authorization'
        }

        const cached = getCache<{ catalog: unknown[] }>(cacheKey)
        if (cached) {
            return NextResponse.json(cached, { headers: cacheHeaders })
        }

        const catalog = await prisma.rewardCatalog.findMany({
            where: {
                regionId: user.regionId,
                isActive: true,
            },
            orderBy: { sortOrder: 'asc' },
        })

        const payload = { catalog }
        setCache(cacheKey, payload, 60_000)

        return NextResponse.json(payload, { headers: cacheHeaders })
    } catch (error) {
        console.error('Get catalog error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
