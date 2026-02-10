import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyCronAuth, logJobExecution } from '@/lib/cron'
import { sendEmail } from '@/lib/email'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    if (!verifyCronAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const now = new Date()

        // 1. Expire vouchers past expiry date
        const expiredResult = await prisma.voucherStock.updateMany({
            where: {
                expiryDate: { lt: now },
                status: 'available',
            },
            data: { status: 'expired' },
        })

        // 2. Check for catalog items with zero available vouchers
        let lowStockAlerts = 0
        const catalogItems = await prisma.rewardCatalog.findMany({
            where: {
                isActive: true,
                rewardType: { in: ['digital_voucher', 'voucher'] },
            },
            include: {
                voucherStock: {
                    where: { status: 'available' },
                },
                region: true,
            },
        })

        const outOfStockItems = catalogItems.filter(item => item.voucherStock.length === 0)

        if (outOfStockItems.length > 0) {
            // Get VN HR admins (vouchers are VN region)
            const hrAdmins = await prisma.user.findMany({
                where: {
                    role: { in: ['hr_admin', 'admin', 'super_admin'] },
                    isActive: true,
                },
                select: { id: true, email: true, regionId: true },
            })

            const itemList = outOfStockItems
                .map(item => `<li>${item.name} (${item.region.name}) - 0 vouchers available</li>`)
                .join('')

            for (const admin of hrAdmins) {
                await sendEmail(
                    admin.email,
                    `[EmPulse] ${outOfStockItems.length} reward(s) out of stock`,
                    `<p>The following active rewards have no available vouchers:</p><ul>${itemList}</ul><p>Please upload new voucher codes.</p>`,
                    admin.id,
                    'low_stock_alert'
                )
                lowStockAlerts++
            }
        }

        await logJobExecution('voucher-cleanup', 'success', expiredResult.count)

        return NextResponse.json({
            message: 'Voucher cleanup completed',
            vouchersExpired: expiredResult.count,
            outOfStockItems: outOfStockItems.length,
            alertsSent: lowStockAlerts,
        })
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        await logJobExecution('voucher-cleanup', 'failed', undefined, msg)
        return NextResponse.json({ error: 'Voucher cleanup failed', details: msg }, { status: 500 })
    }
}
