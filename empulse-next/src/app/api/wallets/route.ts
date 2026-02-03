import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

// GET /api/wallets - Get current user's wallets
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const [quotaWallet, rewardWallet] = await Promise.all([
            prisma.quotaWallet.findUnique({ where: { userId } }),
            prisma.rewardWallet.findUnique({ where: { userId } }),
        ])

        return NextResponse.json({
            quotaWallet,
            rewardWallet,
        })
    } catch (error) {
        console.error('Get wallets error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
