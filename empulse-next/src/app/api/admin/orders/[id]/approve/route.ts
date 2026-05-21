import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import { createNotification } from '@/lib/notifications'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const POST = withErrorHandler(async (request: NextRequest, ctx) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { id } = await ctx!.params
    const orderId = parseInt(id)

    const order = await prisma.redemptionOrder.findUnique({ where: { id: orderId } })
    if (!order) throw new AppError(ErrorCode.ORDER_NOT_FOUND, 'Order not found')
    if (order.status !== 'PENDING_APPROVAL') {
        throw new AppError(ErrorCode.INVALID_ORDER_STATUS, 'Order is not pending')
    }

    const data = await request.json().catch(() => ({}))
    const { notes } = data

    const updatedOrder = await prisma.redemptionOrder.update({
        where: { id: orderId },
        data: {
            status: 'APPROVED',
            approvedBy: admin.id,
            approvedAt: new Date(),
            adminNotes: notes || null
        },
        include: { catalog: { select: { name: true } } },
    })

    await createNotification(
        order.userId,
        'ORDER_APPROVED',
        'Order Approved',
        `Your order for "${updatedOrder.catalog.name}" has been approved!`,
        { orderId }
    )

    return NextResponse.json({ order: updatedOrder, message: 'Order approved successfully' })
})
