import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const user = await verifyToken(request)
    if (!user || (user.role !== 'admin' && user.role !== 'hr_admin')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const teams = await prisma.team.findMany({
            where: { isActive: true },
            orderBy: { name: 'asc' }
        })
        return NextResponse.json({ teams })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
