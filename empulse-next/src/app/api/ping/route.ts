import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { logger } from '@/lib/logger'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        // Warm up DB connection
        await prisma.user.findFirst({ select: { id: true } })
        return new NextResponse('pong', { status: 200 })
    } catch (e) {
        logger.error('Ping failed', e)
        return new NextResponse('error', { status: 500 })
    }
}
