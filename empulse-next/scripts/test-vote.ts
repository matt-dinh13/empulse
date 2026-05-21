
import dotenv from 'dotenv'
dotenv.config()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('--- Starting Backend Vote Logic Test ---')

    // 1. Setup Test Users
    const senderEmail = 'test.sender@example.com'
    const receiverEmail = 'test.receiver@example.com'

    console.log(`Setting up users: ${senderEmail} -> ${receiverEmail}`)

    // Cleanup previous test data
    /*
    await prisma.vote.deleteMany({
        where: { sender: { email: senderEmail } }
    })
    */

    const sender = await prisma.user.upsert({
        where: { email: senderEmail },
        update: {},
        create: {
            email: senderEmail,
            fullName: 'Test Sender',
            passwordHash: 'hash', // Dummy
            regionId: 1,
            role: 'employee'
        }
    })

    const receiver = await prisma.user.upsert({
        where: { email: receiverEmail },
        update: {},
        create: {
            email: receiverEmail,
            fullName: 'Test Receiver',
            passwordHash: 'hash',
            regionId: 1,
            role: 'employee'
        }
    })

    // 2. Reset Wallets
    console.log('Resetting wallets...')
    // Ensure wallets exist
    await prisma.quotaWallet.upsert({
        where: { userId: sender.id },
        create: { userId: sender.id, balance: 10, periodStart: new Date(), periodEnd: new Date() },
        update: { balance: 10 }
    })

    await prisma.rewardWallet.upsert({
        where: { userId: receiver.id },
        create: { userId: receiver.id, balance: 0, quarterStart: new Date(), quarterEnd: new Date() },
        update: { balance: 0 } // Start fresh
    })

    const senderQuotaBefore = await prisma.quotaWallet.findUnique({ where: { userId: sender.id } })
    const receiverRewardBefore = await prisma.rewardWallet.findUnique({ where: { userId: receiver.id } })

    console.log(`[Before] Sender Quota: ${senderQuotaBefore?.balance}`)
    console.log(`[Before] Receiver Reward: ${receiverRewardBefore?.balance}`)

    // 3. Execute Vote Transaction (Simulating Backend Logic)
    console.log('Executing Vote Transaction...')
    const points = 10
    const message = 'Test vote execution from backend script.'

    try {
        const result = await prisma.$transaction(async (tx) => {
            // Check Quota (Logic)
            const quota = await tx.quotaWallet.findUnique({ where: { userId: sender.id } })
            if (!quota || quota.balance < 1) throw new Error('Insufficient quota')

            // Deduct Quota
            const updatedQuota = await tx.quotaWallet.update({
                where: { userId: sender.id },
                data: { balance: { decrement: 1 } }
            })

            // Add Points
            const updatedReward = await tx.rewardWallet.update({
                where: { userId: receiver.id },
                data: { balance: { increment: points } }
            })

            // Create Vote
            const vote = await tx.vote.create({
                data: {
                    senderId: sender.id,
                    receiverId: receiver.id,
                    message: message,
                    pointsAwarded: points
                }
            })

            return { vote, updatedQuota, updatedReward }
        })

        console.log('Transaction Successful!')
        console.log(`[After] Sender Quota: ${result.updatedQuota.balance} (Expected: 9)`)
        console.log(`[After] Receiver Reward: ${result.updatedReward.balance} (Expected: 10)`)
        console.log(`[Result] Vote ID: ${result.vote.id} created at ${result.vote.createdAt}`)

        if (result.updatedQuota.balance === 9 && result.updatedReward.balance === 10) {
            console.log('✅ TEST PASSED: Logic is sound.')
        } else {
            console.log('❌ TEST FAILED: Balances mismatch.')
        }

    } catch (error) {
        console.error('❌ Transaction Failed:', error)
    } finally {
        await prisma.$disconnect()
    }
}

main()
