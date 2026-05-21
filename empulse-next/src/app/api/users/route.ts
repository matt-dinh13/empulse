import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

// GET /api/users - Get all users (for voting selection)
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''

    const users = await prisma.user.findMany({
        where: {
            isActive: true,
            id: { not: userId }, // Exclude current user
            ...(search && {
                OR: [
                    { fullName: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }),
        },
        select: {
            id: true,
            email: true,
            fullName: true,
            team: { select: { name: true } },
            region: { select: { name: true } },
        },
        orderBy: { fullName: 'asc' },
        take: 50,
    })

    return NextResponse.json({ users }, {
        headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        }
    })
})
