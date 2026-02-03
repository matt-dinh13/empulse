import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
    // D3: Protect Debug Endpoints
    if (process.env.NODE_ENV === 'production' && process.env.ENABLE_DEBUG_ENDPOINTS !== 'true') {
        return NextResponse.json({ error: 'Endpoint disabled in production' }, { status: 403 })
    }

    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const user = await prisma.user.findUnique({ where: { id: userId } })
        if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

        // 1. Give Points & Refill Quota
        await prisma.rewardWallet.upsert({
            where: { userId },
            create: { userId, balance: 500, quarterStart: new Date(), quarterEnd: new Date() },
            update: { balance: 500 }
        })

        await prisma.quotaWallet.upsert({
            where: { userId },
            create: { userId, balance: 10, periodStart: new Date(), periodEnd: new Date() },
            update: { balance: 10 }
        })

        // 2. Ensure Catalog Items for User's Region
        const regionId = user.regionId
        const catalogCount = await prisma.rewardCatalog.count({ where: { regionId } })

        if (catalogCount === 0) {
            await prisma.rewardCatalog.createMany({
                data: [
                    { name: 'Amazon Coupon $10', description: 'Digital code for shopping', pointsRequired: 100, rewardType: 'digital_voucher', regionId, isActive: true },
                    { name: 'Premium Coffee', description: 'Starbucks Gift Card', pointsRequired: 50, rewardType: 'digital_voucher', regionId, isActive: true },
                    { name: 'Team Lunch', description: 'Voucher for team meal', pointsRequired: 200, rewardType: 'digital_voucher', regionId, isActive: true },
                    { name: 'Day Off', description: 'Extra PTO day', pointsRequired: 500, rewardType: 'physical_item', regionId, isActive: true },
                ]
            })
        }

        // 3. Create a Bot User for History
        let botUser = await prisma.user.findUnique({ where: { email: 'bot@empulse.demo' } })
        if (!botUser) {
            // Need a region for bot. Use user's region.
            // Check if region exists first (it must, since user has it)
            botUser = await prisma.user.create({
                data: {
                    email: 'bot@empulse.demo',
                    fullName: 'Demo Bot',
                    passwordHash: '$2a$10$dummyhashExampleForDemoOnly12345',
                    role: 'employee',
                    regionId,
                    isActive: true,
                    // Create wallets for bot to avoid errors if triggered elsewhere
                    quotaWallet: { create: { balance: 100, periodStart: new Date(), periodEnd: new Date() } },
                    rewardWallet: { create: { balance: 0, quarterStart: new Date(), quarterEnd: new Date() } }
                }
            })
        }

        // 4. Create Dummy Votes (Received)
        // Check if we already spamming
        const recentVotes = await prisma.vote.count({ where: { receiverId: userId, senderId: botUser.id } })
        if (recentVotes < 5) {
            await prisma.vote.createMany({
                data: [
                    { senderId: botUser.id, receiverId: userId, message: 'Great leadership on the Q3 project!', pointsAwarded: 10, createdAt: new Date(Date.now() - 86400000 * 2) },
                    { senderId: botUser.id, receiverId: userId, message: 'Thanks for helping me debug.', pointsAwarded: 10, createdAt: new Date(Date.now() - 86400000 * 5) },
                    { senderId: botUser.id, receiverId: userId, message: 'Always bringing positive energy!', pointsAwarded: 10, createdAt: new Date(Date.now() - 86400000 * 10) }
                ]
            })
            // Update wallet for these votes? 
            // We already set balance to 500 fixed, so no need to calculate valid increments.
        }

        return NextResponse.json({
            message: 'Seeding complete! You have 500 points, 10 quota, and new history.',
            action: 'refresh_page'
        })

    } catch (error) {
        console.error('Seed error:', error)
        return NextResponse.json({ error: 'Seeding failed' }, { status: 500 })
    }
}
