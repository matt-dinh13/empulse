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
        let alertCount = 0

        // 1. Find overdue APPROVED orders in CZ region
        const overdueOrders = await prisma.redemptionOrder.findMany({
            where: {
                status: 'APPROVED',
                expectedDate: { lt: now },
                user: {
                    region: { code: 'CZ' },
                },
            },
            include: {
                user: { select: { fullName: true, email: true, regionId: true } },
                catalog: { select: { name: true } },
            },
        })

        // 2. Find stale PENDING_APPROVAL orders (older than 7 days)
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        const staleOrders = await prisma.redemptionOrder.findMany({
            where: {
                status: 'PENDING_APPROVAL',
                createdAt: { lt: sevenDaysAgo },
            },
            include: {
                user: { select: { fullName: true, email: true, regionId: true } },
                catalog: { select: { name: true } },
            },
        })

        // Get HR admin emails for alerts
        const hrAdmins = await prisma.user.findMany({
            where: {
                role: { in: ['hr_admin', 'admin', 'super_admin'] },
                isActive: true,
            },
            select: { id: true, email: true, fullName: true, regionId: true },
        })

        // Send overdue alerts
        if (overdueOrders.length > 0) {
            const czAdmins = hrAdmins.filter(a => a.regionId === overdueOrders[0]?.user.regionId)
            const orderList = overdueOrders
                .map(o => `<li>${o.user.fullName} - ${o.catalog.name} (expected: ${o.expectedDate?.toLocaleDateString()})</li>`)
                .join('')

            for (const admin of czAdmins) {
                await sendEmail(
                    admin.email,
                    `[EmPulse] ${overdueOrders.length} overdue order(s) require attention`,
                    `<p>The following orders are past their expected delivery date:</p><ul>${orderList}</ul>`,
                    admin.id,
                    'sla_overdue_alert'
                )
                alertCount++
            }
        }

        // Send stale pending alerts
        if (staleOrders.length > 0) {
            const orderList = staleOrders
                .map(o => `<li>${o.user.fullName} - ${o.catalog.name} (submitted: ${o.createdAt.toLocaleDateString()})</li>`)
                .join('')

            for (const admin of hrAdmins) {
                await sendEmail(
                    admin.email,
                    `[EmPulse] ${staleOrders.length} pending order(s) awaiting approval for 7+ days`,
                    `<p>The following orders have been pending approval for over 7 days:</p><ul>${orderList}</ul>`,
                    admin.id,
                    'sla_stale_pending_alert'
                )
                alertCount++
            }
        }

        await logJobExecution('sla-checker', 'success', alertCount)

        return NextResponse.json({
            message: 'SLA check completed',
            overdueOrders: overdueOrders.length,
            staleOrders: staleOrders.length,
            alertsSent: alertCount,
        })
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        await logJobExecution('sla-checker', 'failed', undefined, msg)
        return NextResponse.json({ error: 'SLA check failed', details: msg }, { status: 500 })
    }
}
