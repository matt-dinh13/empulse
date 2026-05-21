import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { orderSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rateLimit'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

// GET /api/orders - Get user's orders
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const orders = await prisma.redemptionOrder.findMany({
        where: { userId },
        include: { catalog: true },
        orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ orders })
})

// POST /api/orders - Create new order (redeem reward)
export const POST = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    // Rate limit: 5 orders per user per minute
    const rl = await rateLimit(`order:${userId}`, 5, 60 * 1000)
    if (!rl.success) {
        throw new AppError(ErrorCode.RATE_LIMITED, 'Too many requests. Please slow down.')
    }

    const body = await request.json()
    const parsed = orderSchema.safeParse(body)
    if (!parsed.success) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, parsed.error.issues[0].message)
    }
    const { catalogId } = parsed.data

    // Create order and deduct points (all checks inside transaction to prevent race conditions)
    const order = await prisma.$transaction(async (tx) => {
        const catalogItem = await tx.rewardCatalog.findUnique({
            where: { id: catalogId },
        })

        if (!catalogItem || !catalogItem.isActive) {
            throw new AppError(ErrorCode.ITEM_NOT_FOUND, 'Reward not found or inactive')
        }

        const rewardWallet = await tx.rewardWallet.findUnique({
            where: { userId },
        })

        if (!rewardWallet || rewardWallet.balance < catalogItem.pointsRequired) {
            throw new AppError(ErrorCode.INSUFFICIENT_POINTS, 'Insufficient points')
        }

        // Deduct points
        await tx.rewardWallet.update({
            where: { userId },
            data: { balance: { decrement: catalogItem.pointsRequired } },
        })

        // Create order
        return tx.redemptionOrder.create({
            data: {
                userId,
                catalogId,
                pointsSpent: catalogItem.pointsRequired,
                status: 'PENDING_APPROVAL',
            },
            include: { catalog: true },
        })
    })

    return NextResponse.json({ message: 'Order created successfully', order }, { status: 201 })
})
