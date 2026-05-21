import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyCronAuth, logJobExecution } from '@/lib/cron'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function isLastDayOfQuarter(date: Date): boolean {
    const month = date.getMonth() // 0-indexed
    const lastDayOfMonth = new Date(date.getFullYear(), month + 1, 0).getDate()
    const isQuarterEndMonth = [2, 5, 8, 11].includes(month) // Mar, Jun, Sep, Dec
    return isQuarterEndMonth && date.getDate() === lastDayOfMonth
}

function getNextQuarterBounds(date: Date): { start: Date; end: Date } {
    const month = date.getMonth()
    // Next quarter start month: Mar->Apr(3), Jun->Jul(6), Sep->Oct(9), Dec->Jan+1(0)
    let nextQStartMonth: number
    let nextQStartYear = date.getFullYear()

    if (month <= 2) { nextQStartMonth = 3 }
    else if (month <= 5) { nextQStartMonth = 6 }
    else if (month <= 8) { nextQStartMonth = 9 }
    else { nextQStartMonth = 0; nextQStartYear++ }

    const start = new Date(nextQStartYear, nextQStartMonth, 1)
    const end = new Date(nextQStartYear, nextQStartMonth + 3, 0)
    return { start, end }
}

export async function GET(request: NextRequest) {
    if (!verifyCronAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = new Date()

    // Only run on actual last day of quarter
    if (!isLastDayOfQuarter(now)) {
        return NextResponse.json({ message: 'Not last day of quarter, skipping' })
    }

    try {
        const { start: nextStart, end: nextEnd } = getNextQuarterBounds(now)

        // Get wallets with balance > 0 for audit logging
        const expiringWallets = await prisma.rewardWallet.findMany({
            where: { balance: { gt: 0 } },
            include: { user: { select: { id: true, fullName: true, email: true } } },
        })

        let recordsProcessed = 0

        await prisma.$transaction(async (tx) => {
            // Log expiring balances to audit
            for (const wallet of expiringWallets) {
                await tx.auditLog.create({
                    data: {
                        actorId: null,
                        action: 'QUARTERLY_POINTS_EXPIRED',
                        entityType: 'reward_wallet',
                        entityId: wallet.id,
                        newValue: {
                            userId: wallet.userId,
                            userName: wallet.user.fullName,
                            expiredBalance: wallet.balance,
                            quarter: `${now.getFullYear()}-Q${Math.ceil((now.getMonth() + 1) / 3)}`,
                        },
                    },
                })
            }

            // Reset all reward wallets
            const walletResult = await tx.rewardWallet.updateMany({
                data: {
                    balance: 0,
                    quarterStart: nextStart,
                    quarterEnd: nextEnd,
                },
            })

            // Cancel PENDING_APPROVAL orders (no refund needed since wallet is reset)
            const orderResult = await tx.redemptionOrder.updateMany({
                where: { status: 'PENDING_APPROVAL' },
                data: { status: 'CANCELLED', adminNotes: 'Auto-cancelled: quarterly point reset' },
            })

            recordsProcessed = walletResult.count + orderResult.count + expiringWallets.length
        })

        await logJobExecution('quarterly-reset', 'success', recordsProcessed)

        return NextResponse.json({
            message: 'Quarterly reset completed',
            walletsExpired: expiringWallets.length,
            totalPointsExpired: expiringWallets.reduce((sum, w) => sum + w.balance, 0),
            recordsProcessed,
        })
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        await logJobExecution('quarterly-reset', 'failed', undefined, msg)
        return NextResponse.json({ error: 'Quarterly reset failed', details: msg }, { status: 500 })
    }
}
