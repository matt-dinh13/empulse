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

    const data = await request.json().catch(() => ({}))
    const { reason } = data

    const order = await prisma.redemptionOrder.findUnique({ where: { id: orderId } })
    if (!order) throw new AppError(ErrorCode.ORDER_NOT_FOUND, 'Order not found')
    if (order.status !== 'PENDING_APPROVAL') {
        throw new AppError(ErrorCode.INVALID_ORDER_STATUS, 'Can only reject pending orders')
    }

    // Transaction: Update status AND Refund points
    await prisma.$transaction(async (tx) => {
        await tx.redemptionOrder.update({
            where: { id: orderId },
            data: {
                status: 'REJECTED',
                approvedBy: admin.id,
                approvedAt: new Date(),
                adminNotes: reason || 'Rejected by admin'
            }
        })

        await tx.rewardWallet.update({
            where: { userId: order.userId },
            data: { balance: { increment: order.pointsSpent } }
        })

        if (order.voucherId) {
            await tx.voucherStock.updateMany({
                where: { assignedToOrderId: orderId },
                data: { status: 'available', assignedToOrderId: null }
            })
        }
    })

    const catalog = await prisma.rewardCatalog.findUnique({
        where: { id: order.catalogId },
        select: { name: true },
    })

    await createNotification(
        order.userId,
        'ORDER_REJECTED',
        'Order Rejected',
        `Your order for "${catalog?.name || 'item'}" was rejected. ${reason ? `Reason: ${reason}` : 'Points have been refunded.'}`,
        { orderId }
    )

    return NextResponse.json({ message: 'Order rejected and points refunded' })
})
