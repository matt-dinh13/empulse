import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { orderSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rateLimit'

// GET /api/orders - Get user's orders
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const orders = await prisma.redemptionOrder.findMany({
            where: { userId },
            include: {
                catalog: true,
            },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json({ orders })
    } catch (error) {
        console.error('Get orders error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// POST /api/orders - Create new order (redeem reward)
export async function POST(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Rate limit: 5 orders per user per minute
        const rl = rateLimit(`order:${userId}`, 5, 60 * 1000)
        if (!rl.success) {
            return NextResponse.json({ error: 'Too many requests. Please slow down.' }, { status: 429 })
        }

        const body = await request.json()
        const parsed = orderSchema.safeParse(body)
        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
        }
        const { catalogId } = parsed.data

        // Get catalog item
        const catalogItem = await prisma.rewardCatalog.findUnique({
            where: { id: catalogId },
        })

        if (!catalogItem || !catalogItem.isActive) {
            return NextResponse.json(
                { error: 'Reward not found or inactive' },
                { status: 404 }
            )
        }

        // Check user balance
        const rewardWallet = await prisma.rewardWallet.findUnique({
            where: { userId },
        })

        if (!rewardWallet || rewardWallet.balance < catalogItem.pointsRequired) {
            return NextResponse.json(
                { error: 'Insufficient points' },
                { status: 400 }
            )
        }

        // Create order and deduct points
        const order = await prisma.$transaction(async (tx) => {
            // Deduct points
            await tx.rewardWallet.update({
                where: { userId },
                data: { balance: { decrement: catalogItem.pointsRequired } },
            })

            // Create order
            const newOrder = await tx.redemptionOrder.create({
                data: {
                    userId,
                    catalogId,
                    pointsSpent: catalogItem.pointsRequired,
                    status: 'PENDING_APPROVAL',
                },
                include: {
                    catalog: true,
                },
            })

            return newOrder
        })

        return NextResponse.json({
            message: 'Order created successfully',
            order,
        }, { status: 201 })
    } catch (error) {
        console.error('Create order error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
