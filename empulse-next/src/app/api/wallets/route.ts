import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

// GET /api/wallets - Get current user's wallets
export const GET = withErrorHandler(async (request: NextRequest) => {
    const userId = await authenticateRequest(request)
    if (!userId) {
        throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')
    }

    const [quotaWallet, rewardWallet] = await Promise.all([
        prisma.quotaWallet.findUnique({ where: { userId } }),
        prisma.rewardWallet.findUnique({ where: { userId } }),
    ])

    return NextResponse.json({ quotaWallet, rewardWallet })
})
