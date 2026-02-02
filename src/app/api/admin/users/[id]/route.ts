import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params

    try {
        const body = await request.json()
        const { fullName, email, role, teamId, regionId, isActive, password } = body
        const userId = parseInt(id)

        const updateData: any = {
            fullName,
            email,
            role,
            teamId: teamId ? Number(teamId) : null,
            regionId: Number(regionId),
            isActive
        }

        if (password) {
            updateData.passwordHash = await bcrypt.hash(password, 10)
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData
        })

        return NextResponse.json({ user: updatedUser })
    } catch (error) {
        console.error('Update user error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params

    try {
        // Soft delete (deactivate)
        await prisma.user.update({
            where: { id: parseInt(id) },
            data: { isActive: false }
        })

        return NextResponse.json({ message: 'User deactivated successfully' })
    } catch (error) {
        console.error('Deactivate user error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
