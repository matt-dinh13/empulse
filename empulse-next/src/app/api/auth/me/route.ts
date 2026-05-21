import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            region: true,
            team: true,
            manager: {
                select: { id: true, fullName: true, email: true },
            },
            quotaWallet: true,
            rewardWallet: true,
        },
    })

    if (!user) {
        throw new AppError(ErrorCode.USER_NOT_FOUND, 'User not found')
    }

    return NextResponse.json({ user })
})
