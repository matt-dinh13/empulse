import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = withErrorHandler(async () => {
    const tags = await prisma.valueTag.findMany({
        where: { isActive: true },
        orderBy: { name: 'asc' },
    })

    return NextResponse.json({ tags })
})
