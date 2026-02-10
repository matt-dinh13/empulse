import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyCronAuth, logJobExecution } from '@/lib/cron'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    if (!verifyCronAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        // Get quota_per_month from settings
        const setting = await prisma.systemSetting.findUnique({
            where: { settingKey: 'quota_per_month' },
        })
        const quota = setting ? parseInt(setting.settingValue) : 8

        const now = new Date()
        const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
        const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)

        // Reset all quota wallets
        const walletResult = await prisma.quotaWallet.updateMany({
            data: {
                balance: quota,
                periodStart,
                periodEnd,
            },
        })

        // Calculate previous month for cleanup
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
        const prevMonthYear = `${prevMonth.getFullYear()}-${String(prevMonth.getMonth() + 1).padStart(2, '0')}`

        // Clear previous month's vote tracking
        const voteTrackingResult = await prisma.voteTracking.deleteMany({
            where: { monthYear: prevMonthYear },
        })

        // Clear previous month's weekly vote tracking
        // Weekly format is YYYY-WNN, clear all weeks that started in previous month
        const prevMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)
        const weeklyResult = await prisma.weeklyVoteTracking.deleteMany({
            where: {
                weekYear: {
                    startsWith: `${prevMonth.getFullYear()}-W`,
                },
            },
        })

        const totalProcessed = walletResult.count + voteTrackingResult.count + weeklyResult.count

        await logJobExecution('quota-reset', 'success', totalProcessed)

        return NextResponse.json({
            message: 'Quota reset completed',
            quota,
            walletsReset: walletResult.count,
            voteTrackingCleared: voteTrackingResult.count,
            weeklyTrackingCleared: weeklyResult.count,
        })
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        await logJobExecution('quota-reset', 'failed', undefined, msg)
        return NextResponse.json({ error: 'Quota reset failed', details: msg }, { status: 500 })
    }
}
