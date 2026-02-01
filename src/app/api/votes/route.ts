import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

// GET /api/votes - Get votes for current user
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') || 'received'
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const skip = (page - 1) * limit

        const whereClause = type === 'sent'
            ? { senderId: userId }
            : { receiverId: userId }

        const [votes, total] = await Promise.all([
            prisma.vote.findMany({
                where: whereClause,
                include: {
                    sender: { select: { id: true, fullName: true, email: true } },
                    receiver: { select: { id: true, fullName: true, email: true } },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.vote.count({ where: whereClause }),
        ])

        return NextResponse.json({
            votes,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        })
    } catch (error) {
        console.error('Get votes error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// POST /api/votes - Send a vote
export async function POST(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { receiverId, message } = body

        if (!receiverId || !message) {
            return NextResponse.json(
                { error: 'Receiver and message are required' },
                { status: 400 }
            )
        }

        if (receiverId === userId) {
            return NextResponse.json(
                { error: 'Cannot vote for yourself' },
                { status: 400 }
            )
        }

        // Check quota
        const quotaWallet = await prisma.quotaWallet.findUnique({
            where: { userId },
        })

        if (!quotaWallet || quotaWallet.balance <= 0) {
            return NextResponse.json(
                { error: 'No quota remaining' },
                { status: 400 }
            )
        }

        // Check receiver exists
        const receiver = await prisma.user.findUnique({
            where: { id: receiverId },
        })

        if (!receiver || !receiver.isActive) {
            return NextResponse.json(
                { error: 'Receiver not found or inactive' },
                { status: 404 }
            )
        }

        // Create vote and update wallets in transaction
        const pointsToAward = 10

        const result = await prisma.$transaction(async (tx) => {
            // Deduct from sender's quota
            await tx.quotaWallet.update({
                where: { userId },
                data: { balance: { decrement: 1 } },
            })

            // Add to receiver's reward wallet
            await tx.rewardWallet.update({
                where: { userId: receiverId },
                data: { balance: { increment: pointsToAward } },
            })

            // Create vote
            const vote = await tx.vote.create({
                data: {
                    senderId: userId,
                    receiverId,
                    message,
                    pointsAwarded: pointsToAward,
                },
                include: {
                    sender: { select: { id: true, fullName: true, email: true } },
                    receiver: { select: { id: true, fullName: true, email: true } },
                },
            })

            return vote
        })

        return NextResponse.json({
            message: 'Vote sent successfully',
            vote: result,
        }, { status: 201 })
    } catch (error) {
        console.error('Send vote error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
