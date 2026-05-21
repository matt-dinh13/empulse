import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { authenticateAdminRequest } from '@/lib/auth'
import bcrypt from 'bcryptjs'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const PUT = withErrorHandler(async (request: NextRequest, ctx) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { id } = await ctx!.params
    const userId = parseInt(id)

    const body = await request.json()
    const { fullName, email, role, teamId, regionId, isActive, password } = body

    const updateData: Prisma.UserUncheckedUpdateInput = {
        fullName,
        email,
        role,
        teamId: teamId !== undefined ? Number(teamId) : undefined,
        regionId: regionId !== undefined ? Number(regionId) : undefined,
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
})

export const DELETE = withErrorHandler(async (request: NextRequest, ctx) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { id } = await ctx!.params

    await prisma.user.update({
        where: { id: parseInt(id) },
        data: { isActive: false }
    })

    return NextResponse.json({ message: 'User deactivated successfully' })
})
