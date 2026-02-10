import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/notifications - Get user's notifications
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        })
    } catch (error) {
        console.error('Get notifications error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// PATCH /api/notifications - Mark notifications as read
export async function PATCH(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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
            return NextResponse.json({ error: 'Provide ids array or markAllRead: true' }, { status: 400 })
        }

        return NextResponse.json({ message: 'Notifications updated' })
    } catch (error) {
        console.error('Update notifications error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
