import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { logger } from '@/lib/logger'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const tags = await prisma.valueTag.findMany({
            where: { isActive: true },
            orderBy: { name: 'asc' },
        })

        return NextResponse.json({ tags })
    } catch (error) {
        logger.error('Value tags error', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
