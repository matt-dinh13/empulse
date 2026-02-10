import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function toCsvRow(values: (string | number | null | undefined)[]): string {
    return values.map(v => {
        const str = String(v ?? '')
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
            return `"${str.replace(/"/g, '""')}"`
        }
        return str
    }).join(',')
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ type: string }> }
) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { type } = await params
    const url = new URL(request.url)
    const startDate = url.searchParams.get('startDate')
    const endDate = url.searchParams.get('endDate')

    const dateFilter: { gte?: Date; lte?: Date } = {}
    if (startDate) dateFilter.gte = new Date(startDate)
    if (endDate) dateFilter.lte = new Date(endDate + 'T23:59:59Z')

    try {
        let csv = ''
        let filename = ''

        switch (type) {
            case 'votes': {
                const votes = await prisma.vote.findMany({
                    where: dateFilter.gte || dateFilter.lte ? { createdAt: dateFilter } : {},
                    include: {
                        sender: { select: { fullName: true, email: true, team: { select: { name: true } } } },
                        receiver: { select: { fullName: true, email: true, team: { select: { name: true } } } },
                        valueTags: { include: { valueTag: true } },
                    },
                    orderBy: { createdAt: 'desc' },
                })

                csv = toCsvRow(['Date', 'Sender', 'Sender Email', 'Sender Team', 'Receiver', 'Receiver Email', 'Receiver Team', 'Message', 'Points', 'Values']) + '\n'
                csv += votes.map(v => toCsvRow([
                    v.createdAt.toISOString().split('T')[0],
                    v.sender.fullName,
                    v.sender.email,
                    v.sender.team?.name,
                    v.receiver.fullName,
                    v.receiver.email,
                    v.receiver.team?.name,
                    v.message,
                    v.pointsAwarded,
                    v.valueTags.map(vt => vt.valueTag.name).join('; '),
                ])).join('\n')
                filename = 'votes-export.csv'
                break
            }

            case 'redemptions': {
                const orders = await prisma.redemptionOrder.findMany({
                    where: dateFilter.gte || dateFilter.lte ? { createdAt: dateFilter } : {},
                    include: {
                        user: { select: { fullName: true, email: true, team: { select: { name: true } }, region: { select: { code: true } } } },
                        catalog: { select: { name: true, rewardType: true } },
                    },
                    orderBy: { createdAt: 'desc' },
                })

                csv = toCsvRow(['Date', 'Employee', 'Email', 'Team', 'Region', 'Item', 'Type', 'Points Spent', 'Status']) + '\n'
                csv += orders.map(o => toCsvRow([
                    o.createdAt.toISOString().split('T')[0],
                    o.user.fullName,
                    o.user.email,
                    o.user.team?.name,
                    o.user.region?.code,
                    o.catalog.name,
                    o.catalog.rewardType,
                    o.pointsSpent,
                    o.status,
                ])).join('\n')
                filename = 'redemptions-export.csv'
                break
            }

            case 'engagement': {
                const users = await prisma.user.findMany({
                    where: { isActive: true },
                    select: {
                        fullName: true,
                        email: true,
                        team: { select: { name: true } },
                        region: { select: { code: true } },
                        role: true,
                        _count: {
                            select: {
                                votesSent: dateFilter.gte || dateFilter.lte
                                    ? { where: { createdAt: dateFilter } }
                                    : true,
                                votesReceived: dateFilter.gte || dateFilter.lte
                                    ? { where: { createdAt: dateFilter } }
                                    : true,
                            }
                        },
                        rewardWallet: { select: { balance: true } },
                    },
                    orderBy: { fullName: 'asc' },
                })

                csv = toCsvRow(['Employee', 'Email', 'Team', 'Region', 'Role', 'Votes Sent', 'Votes Received', 'Reward Balance']) + '\n'
                csv += users.map(u => toCsvRow([
                    u.fullName,
                    u.email,
                    u.team?.name,
                    u.region?.code,
                    u.role,
                    u._count.votesSent,
                    u._count.votesReceived,
                    u.rewardWallet?.balance ?? 0,
                ])).join('\n')
                filename = 'engagement-export.csv'
                break
            }

            default:
                return NextResponse.json({ error: `Unknown export type: ${type}` }, { status: 400 })
        }

        return new NextResponse(csv, {
            headers: {
                'Content-Type': 'text/csv; charset=utf-8',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        })
    } catch (error) {
        console.error('Export error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
