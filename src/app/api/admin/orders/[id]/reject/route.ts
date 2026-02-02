import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const orderId = parseInt(id)

    try {
        const data = await request.json().catch(() => ({}))
        const { reason } = data

        const order = await prisma.redemptionOrder.findUnique({ where: { id: orderId } })

        if (!order) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 })
        }
        if (order.status !== 'PENDING_APPROVAL') {
            return NextResponse.json({ error: 'Can only reject pending orders' }, { status: 400 })
        }

        // Transaction: Update status AND Refund points
        await prisma.$transaction(async (tx) => {
            // 1. Update Order
            await tx.redemptionOrder.update({
                where: { id: orderId },
                data: {
                    status: 'REJECTED',
                    approvedBy: admin.id,
                    approvedAt: new Date(), // Rejection also tracked here
                    adminNotes: reason || 'Rejected by admin'
                }
            })

            // 2. Refund Points
            await tx.rewardWallet.update({
                where: { userId: order.userId },
                data: {
                    balance: { increment: order.pointsSpent }
                }
            })

            // 3. Log Audit? (Optional, skipping for now)
        })

        return NextResponse.json({ message: 'Order rejected and points refunded' })
    } catch (error) {
        console.error('Reject order error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
