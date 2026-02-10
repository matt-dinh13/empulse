import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/user/preferences - Get user's email preferences
export async function GET(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { emailNotifications: true },
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        return NextResponse.json({ emailNotifications: user.emailNotifications })
    } catch (error) {
        console.error('Get preferences error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// PATCH /api/user/preferences - Update user's email preferences
export async function PATCH(request: NextRequest) {
    try {
        const userId = await authenticateRequest(request)
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { emailNotifications } = body

        if (typeof emailNotifications !== 'boolean') {
            return NextResponse.json(
                { error: 'emailNotifications must be a boolean' },
                { status: 400 }
            )
        }

        await prisma.user.update({
            where: { id: userId },
            data: { emailNotifications },
        })

        return NextResponse.json({ message: 'Preferences updated', emailNotifications })
    } catch (error) {
        console.error('Update preferences error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
