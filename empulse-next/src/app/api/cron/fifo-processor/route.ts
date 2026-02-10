import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyCronAuth, logJobExecution } from '@/lib/cron'
import { sendEmail } from '@/lib/email'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    if (!verifyCronAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        // Get PROCESSING orders sorted by queue position
        const orders = await prisma.redemptionOrder.findMany({
            where: { status: 'PROCESSING' },
            orderBy: { queuePosition: 'asc' },
            include: {
                catalog: true,
                user: { select: { id: true, email: true, fullName: true } },
            },
        })

        let processed = 0

        for (const order of orders) {
            // Find available voucher for this catalog item
            const voucher = await prisma.voucherStock.findFirst({
                where: {
                    catalogId: order.catalogId,
                    status: 'available',
                },
                orderBy: { createdAt: 'asc' },
            })

            if (!voucher) continue // No stock, stays in queue

            await prisma.$transaction(async (tx) => {
                // Assign voucher to order
                await tx.voucherStock.update({
                    where: { id: voucher.id },
                    data: {
                        status: 'assigned',
                        assignedToOrderId: order.id,
                    },
                })

                // Mark order completed
                await tx.redemptionOrder.update({
                    where: { id: order.id },
                    data: {
                        status: 'COMPLETED',
                        voucherId: voucher.id,
                    },
                })
            })

            // Send notification email
            await sendEmail(
                order.user.email,
                `Your reward "${order.catalog.name}" is ready!`,
                `<p>Hi ${order.user.fullName},</p>
                <p>Your reward <strong>${order.catalog.name}</strong> has been fulfilled.</p>
                <p>Voucher code: <strong>${voucher.voucherCode}</strong></p>
                <p>Thank you for being awesome!</p>`,
                order.user.id,
                'order_fulfilled'
            )

            processed++
        }

        await logJobExecution('fifo-processor', 'success', processed)

        return NextResponse.json({
            message: 'FIFO processing completed',
            ordersProcessed: processed,
            ordersSkipped: orders.length - processed,
        })
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        await logJobExecution('fifo-processor', 'failed', undefined, msg)
        return NextResponse.json({ error: 'FIFO processing failed', details: msg }, { status: 500 })
    }
}
