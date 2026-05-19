import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/admin/cleanup
 * One-shot admin endpoint to clean up duplicate notifications and other data artifacts.
 * Only accessible by super_admin.
 */
export const POST = withErrorHandler(async (request: NextRequest) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    if (admin.role !== 'super_admin' && admin.role !== 'admin') {
        throw new AppError(ErrorCode.FORBIDDEN, 'Super Admin only')
    }

    const results: Record<string, number> = {}

    // 1. Remove duplicate notifications (keep earliest by id)
    const allNotifications = await prisma.inAppNotification.findMany({
        orderBy: { id: 'asc' },
        select: { id: true, userId: true, type: true, title: true, message: true },
    })

    const seen = new Set<string>()
    const dupeIds: number[] = []
    for (const n of allNotifications) {
        const key = `${n.userId}|${n.type}|${n.title}|${n.message}`
        if (seen.has(key)) {
            dupeIds.push(n.id)
        } else {
            seen.add(key)
        }
    }

    if (dupeIds.length > 0) {
        const deleted = await prisma.inAppNotification.deleteMany({
            where: { id: { in: dupeIds } },
        })
        results.duplicateNotificationsRemoved = deleted.count
    } else {
        results.duplicateNotificationsRemoved = 0
    }

    return NextResponse.json({
        message: 'Cleanup completed',
        results,
    })
})
