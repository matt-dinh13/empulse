import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { getCache, setCache } from '@/lib/memoryCache'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

// GET /api/catalog - Get reward catalog for user's region
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    // Get user's region
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { regionId: true },
    })

    if (!user) {
        throw new AppError(ErrorCode.USER_NOT_FOUND, 'User not found')
    }

    const cacheKey = `catalog:region:${user.regionId}`
    const cacheHeaders = {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        'Vary': 'Authorization'
    }

    const cached = await getCache<{ catalog: unknown[] }>(cacheKey)
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
    await setCache(cacheKey, payload, 60_000)

    return NextResponse.json(payload, { headers: cacheHeaders })
})
