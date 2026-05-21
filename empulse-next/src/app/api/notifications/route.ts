import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/notifications - Get user's notifications
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit

    const [notifications, total] = await Promise.all([
        prisma.inAppNotification.findMany({
            where: { userId },
            orderBy: [{ isRead: 'asc' }, { createdAt: 'desc' }],
            skip,
            take: limit,
        }),
        prisma.inAppNotification.count({ where: { userId } }),
    ])

    return NextResponse.json({
        notifications,
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    })
})

// PATCH /api/notifications - Mark notifications as read
export const PATCH = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const body = await request.json()
    const { ids, markAllRead } = body

    if (markAllRead) {
        await prisma.inAppNotification.updateMany({
            where: { userId, isRead: false },
            data: { isRead: true },
        })
    } else if (Array.isArray(ids) && ids.length > 0) {
        await prisma.inAppNotification.updateMany({
            where: { id: { in: ids }, userId },
            data: { isRead: true },
        })
    } else {
        throw new AppError(ErrorCode.VALIDATION_ERROR, 'Provide ids array or markAllRead: true')
    }

    return NextResponse.json({ message: 'Notifications updated' })
})
