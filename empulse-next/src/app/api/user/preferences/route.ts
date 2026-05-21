import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/user/preferences - Get user's email preferences
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { emailNotifications: true },
    })

    if (!user) {
        throw new AppError(ErrorCode.USER_NOT_FOUND, 'User not found')
    }

    return NextResponse.json({ emailNotifications: user.emailNotifications })
})

// PATCH /api/user/preferences - Update user's email preferences
export const PATCH = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const body = await request.json()
    const { emailNotifications } = body

    if (typeof emailNotifications !== 'boolean') {
        throw new AppError(ErrorCode.VALIDATION_ERROR, 'emailNotifications must be a boolean')
    }

    await prisma.user.update({
        where: { id: userId },
        data: { emailNotifications },
    })

    return NextResponse.json({ message: 'Preferences updated', emailNotifications })
})
