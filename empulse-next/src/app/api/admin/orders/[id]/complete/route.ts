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

    const order = await prisma.redemptionOrder.findUnique({
        where: { id: orderId },
        include: { catalog: { select: { name: true } } },
    })

    if (!order) throw new AppError(ErrorCode.ORDER_NOT_FOUND, 'Order not found')

    if (order.status !== 'APPROVED') {
        throw new AppError(ErrorCode.INVALID_ORDER_STATUS, 'Order must be APPROVED before completion')
    }

    const updatedOrder = await prisma.redemptionOrder.update({
        where: { id: orderId },
        data: { status: 'COMPLETED', updatedAt: new Date() }
    })

    await createNotification(
        order.userId,
        'ORDER_COMPLETED',
        'Your order has been completed!',
        `Your order for "${order.catalog?.name || 'item'}" has been delivered.`,
        { orderId: order.id }
    )

    return NextResponse.json({ order: updatedOrder, message: 'Order marked as completed' })
})
