import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
    // D3: Protect Debug Endpoints
    if (process.env.NODE_ENV === 'production' && process.env.ENABLE_DEBUG_ENDPOINTS !== 'true') {
        return NextResponse.json({ error: 'Endpoint disabled in production' }, { status: 403 })
    }

    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Promote to Admin
        const user = await prisma.user.update({
            where: { id: userId },
            data: { role: 'admin' }
        })

        return NextResponse.json({
            message: `User ${user.email} is now an ADMIN! Please Logout and Login again to see changes.`,
            user
        })
    } catch (error) {
        console.error('Promote error:', error)
        return NextResponse.json({ error: 'Failed to promote' }, { status: 500 })
    }
}
