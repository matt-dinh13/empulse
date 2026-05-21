import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { authenticateAdminRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = withErrorHandler(async (request: NextRequest) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    const whereClause: Prisma.RedemptionOrderWhereInput = {}
    if (status && status !== 'ALL') {
        whereClause.status = status
    }

    const orders = await prisma.redemptionOrder.findMany({
        where: whereClause,
        include: {
            user: {
                select: { id: true, fullName: true, email: true, team: { select: { name: true } } }
            },
            catalog: true,
            approver: { select: { fullName: true } }
        },
        orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ orders })
})
