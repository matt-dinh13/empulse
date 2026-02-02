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

        // Only APPROVED orders can be COMPLETED (e.g. physical item delivered)
        if (order.status !== 'APPROVED') {
            return NextResponse.json({ error: 'Order must be APPROVED before completion' }, { status: 400 })
        }

        const updatedOrder = await prisma.redemptionOrder.update({
            where: { id: orderId },
            data: {
                status: 'COMPLETED',
                updatedAt: new Date()
            }
        })

        return NextResponse.json({ order: updatedOrder, message: 'Order marked as completed' })
    } catch (error) {
        console.error('Complete order error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
