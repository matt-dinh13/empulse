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
        const order = await prisma.redemptionOrder.findUnique({ where: { id: orderId } })

        if (!order) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 })
        }
        if (order.status !== 'PENDING_APPROVAL') {
            return NextResponse.json({ error: 'Order is not pending' }, { status: 400 })
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
            }
        })

        // TODO: Trigger Email Notification here

        return NextResponse.json({ order: updatedOrder, message: 'Order approved successfully' })
    } catch (error) {
        console.error('Approve order error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
