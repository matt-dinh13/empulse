import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = withErrorHandler(async (request: NextRequest, ctx) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { id } = await ctx!.params
    const itemId = parseInt(id)

    const item = await prisma.rewardCatalog.findUnique({ where: { id: itemId } })
    if (!item) throw new AppError(ErrorCode.ITEM_NOT_FOUND, 'Item not found')

    if (admin.role === 'hr_admin' && item.regionId !== admin.regionId) {
        throw new AppError(ErrorCode.FORBIDDEN, 'Unauthorized')
    }

    return NextResponse.json({ item })
})

export const PUT = withErrorHandler(async (request: NextRequest, ctx) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { id } = await ctx!.params
    const itemId = parseInt(id)

    const existingItem = await prisma.rewardCatalog.findUnique({ where: { id: itemId } })
    if (!existingItem) throw new AppError(ErrorCode.ITEM_NOT_FOUND, 'Item not found')

    if (admin.role === 'hr_admin' && existingItem.regionId !== admin.regionId) {
        throw new AppError(ErrorCode.FORBIDDEN, 'Unauthorized to edit this region')
    }

    const body = await request.json()
    const { name, description, pointsRequired, rewardType, icon, displayValue, isActive, regionId } = body
    const normalizedRewardType =
        rewardType === 'voucher' ? 'digital_voucher'
        : rewardType === 'physical' ? 'physical_item'
        : rewardType

    if (regionId && Number(regionId) !== existingItem.regionId) {
        if (admin.role === 'hr_admin') {
            throw new AppError(ErrorCode.FORBIDDEN, 'Cannot move item to another region')
        }
    }

    if (pointsRequired && (pointsRequired < 10 || pointsRequired % 10 !== 0)) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, 'Points must be a multiple of 10 and at least 10')
    }

    const updatedItem = await prisma.rewardCatalog.update({
        where: { id: itemId },
        data: {
            name,
            description,
            pointsRequired: pointsRequired ? Number(pointsRequired) : undefined,
            rewardType: normalizedRewardType,
            icon,
            displayValue,
            isActive,
            regionId: regionId ? Number(regionId) : undefined
        }
    })

    return NextResponse.json({ item: updatedItem })
})

export const DELETE = withErrorHandler(async (request: NextRequest, ctx) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { id } = await ctx!.params
    const itemId = parseInt(id)

    const existingItem = await prisma.rewardCatalog.findUnique({ where: { id: itemId } })
    if (!existingItem) throw new AppError(ErrorCode.ITEM_NOT_FOUND, 'Item not found')

    if (admin.role === 'hr_admin' && existingItem.regionId !== admin.regionId) {
        throw new AppError(ErrorCode.FORBIDDEN, 'Unauthorized to delete this region item')
    }

    await prisma.rewardCatalog.update({
        where: { id: itemId },
        data: { isActive: false }
    })

    return NextResponse.json({ message: 'Item deactivated successfully' })
})
