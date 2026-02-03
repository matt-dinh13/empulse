import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    const whereClause: Prisma.RedemptionOrderWhereInput = {}
    if (status && status !== 'ALL') {
        whereClause.status = status
    }

    try {
        const orders = await prisma.redemptionOrder.findMany({
            where: whereClause,
            include: {
                user: {
                    select: { id: true, fullName: true, email: true, team: { select: { name: true } } }
                },
                catalog: true,
                approver: {
                    select: { fullName: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        })

        return NextResponse.json({ orders })
    } catch (error) {
        console.error('Fetch orders error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
