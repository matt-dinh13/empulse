import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyCronAuth, logJobExecution } from '@/lib/cron'
import { sendEmail } from '@/lib/email'
import { createNotification } from '@/lib/notifications'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function getQuarterEnd(date: Date): Date {
    const month = date.getMonth()
    let endMonth: number
    if (month <= 2) endMonth = 2       // Q1: Jan-Mar
    else if (month <= 5) endMonth = 5  // Q2: Apr-Jun
    else if (month <= 8) endMonth = 8  // Q3: Jul-Sep
    else endMonth = 11                 // Q4: Oct-Dec

    return new Date(date.getFullYear(), endMonth + 1, 0) // Last day of quarter end month
}

function daysBetween(a: Date, b: Date): number {
    const msPerDay = 24 * 60 * 60 * 1000
    return Math.ceil((b.getTime() - a.getTime()) / msPerDay)
}

const WARNING_DAYS = [14, 7, 3, 2, 1]

export async function GET(request: NextRequest) {
    if (!verifyCronAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const now = new Date()
        const quarterEnd = getQuarterEnd(now)
        const daysLeft = daysBetween(now, quarterEnd)

        if (!WARNING_DAYS.includes(daysLeft)) {
            return NextResponse.json({
                message: `${daysLeft} days until quarter end, no warning needed`,
            })
        }

        // Get min_points_to_redeem setting
        const setting = await prisma.systemSetting.findUnique({
            where: { settingKey: 'min_points_to_redeem' },
        })
        const minPoints = setting ? parseInt(setting.settingValue) : 50

        // Find users with balances above threshold
        const wallets = await prisma.rewardWallet.findMany({
            where: { balance: { gte: minPoints } },
            include: {
                user: { select: { id: true, email: true, fullName: true, isActive: true } },
            },
        })

        const activeWallets = wallets.filter(w => w.user.isActive)
        let emailsSent = 0

        for (const wallet of activeWallets) {
            await sendEmail(
                wallet.user.email,
                `[EmPulse] Your ${wallet.balance} points expire in ${daysLeft} day${daysLeft === 1 ? '' : 's'}!`,
                `<p>Hi ${wallet.user.fullName},</p>
                <p>You have <strong>${wallet.balance} points</strong> that will expire at the end of this quarter (${quarterEnd.toLocaleDateString()}).</p>
                <p>Visit the rewards catalog to redeem your points before they expire!</p>
                <p>— The EmPulse Team</p>`,
                wallet.user.id,
                'quarterly_expiry_warning'
            )
            await createNotification(
                wallet.user.id,
                'QUARTERLY_WARNING',
                `Your ${wallet.balance} points expire in ${daysLeft} day${daysLeft === 1 ? '' : 's'}!`,
                'Visit the rewards catalog to redeem your points before they expire.',
                { daysLeft, balance: wallet.balance }
            )
            emailsSent++
        }

        await logJobExecution('quarterly-warning', 'success', emailsSent)

        return NextResponse.json({
            message: `Quarterly warning sent (${daysLeft} days remaining)`,
            daysUntilExpiry: daysLeft,
            usersNotified: emailsSent,
        })
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        await logJobExecution('quarterly-warning', 'failed', undefined, msg)
        return NextResponse.json({ error: 'Quarterly warning failed', details: msg }, { status: 500 })
    }
}
