import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { authenticateAdminRequest } from '@/lib/auth'
import { catalogCreateSchema } from '@/lib/validations'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = withErrorHandler(async (request: NextRequest) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit
    const regionIdParam = searchParams.get('regionId')
    const isActiveParam = searchParams.get('isActive')

    const where: Prisma.RewardCatalogWhereInput = {}
    if (isActiveParam === 'true') where.isActive = true
    if (isActiveParam === 'false') where.isActive = false

    if (admin.role === 'hr_admin') {
        where.regionId = admin.regionId
    } else if (regionIdParam) {
        where.regionId = parseInt(regionIdParam)
    }

    const [items, total] = await Promise.all([
        prisma.rewardCatalog.findMany({
            where,
            orderBy: { sortOrder: 'asc' },
            include: { region: { select: { name: true, code: true } } },
            skip,
            take: limit
        }),
        prisma.rewardCatalog.count({ where })
    ])

    return NextResponse.json({
        items,
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
    })
})

export const POST = withErrorHandler(async (request: NextRequest) => {
    const admin = await authenticateAdminRequest(request)
    if (!admin) throw new AppError(ErrorCode.UNAUTHORIZED, 'Unauthorized')

    const body = await request.json()
    const parsed = catalogCreateSchema.safeParse(body)
    if (!parsed.success) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, parsed.error.issues[0].message)
    }
    const { name, description, pointsRequired, rewardType, icon, displayValue, regionId, stockQuantity } = parsed.data
    const normalizedRewardType =
        rewardType === 'voucher' ? 'digital_voucher'
        : rewardType === 'physical' ? 'physical_item'
        : rewardType

    const targetRegionId = regionId
    if (admin.role === 'hr_admin' && admin.regionId !== targetRegionId) {
        throw new AppError(ErrorCode.FORBIDDEN, 'Cannot create items in other regions')
    }

    const newItem = await prisma.rewardCatalog.create({
        data: {
            name,
            description,
            pointsRequired: Number(pointsRequired),
            rewardType: normalizedRewardType || 'digital_voucher',
            icon: icon || '🎁',
            displayValue,
            regionId: targetRegionId,
        }
    })

    if (newItem.rewardType === 'physical_item' && stockQuantity !== undefined) {
        await prisma.physicalInventory.upsert({
            where: { catalogId: newItem.id },
            create: { catalogId: newItem.id, stockCount: Number(stockQuantity) },
            update: { stockCount: Number(stockQuantity) }
        })
    }

    return NextResponse.json({ item: newItem }, { status: 201 })
})
