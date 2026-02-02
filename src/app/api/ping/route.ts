import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        // Warm up DB connection
        await prisma.user.findFirst({ select: { id: true } })
        return new NextResponse('pong', { status: 200 })
    } catch (e) {
        console.error('Ping failed:', e)
        return new NextResponse('error', { status: 500 })
    }
}
