import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const count = await prisma.inAppNotification.count({
            where: { userId, isRead: false },
        })

        return NextResponse.json({ unreadCount: count })
    } catch (error) {
        console.error('Notification count error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
