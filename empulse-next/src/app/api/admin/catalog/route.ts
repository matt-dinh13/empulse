import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '20')
        const skip = (page - 1) * limit
        const regionIdParam = searchParams.get('regionId')
        const isActiveParam = searchParams.get('isActive')

        const where: any = {}

        // Active filter
        if (isActiveParam === 'true') where.isActive = true
        if (isActiveParam === 'false') where.isActive = false

        // Region filter
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
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        })
    } catch (error) {
        console.error('Fetch catalog error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const body = await request.json()
        const { name, description, pointsRequired, rewardType, icon, displayValue, regionId, stockQuantity } = body
        const normalizedRewardType =
            rewardType === 'voucher' ? 'digital_voucher'
            : rewardType === 'physical' ? 'physical_item'
            : rewardType

        // Validation
        if (!name || !description || !pointsRequired || !regionId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }
        if (pointsRequired < 10 || pointsRequired % 10 !== 0) {
            return NextResponse.json({ error: 'Points must be a multiple of 10 and at least 10' }, { status: 400 })
        }

        // Region Authorization
        const targetRegionId = Number(regionId)
        if (admin.role === 'hr_admin' && admin.regionId !== targetRegionId) {
            return NextResponse.json({ error: 'Cannot create items in other regions' }, { status: 403 })
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
                // Handle stock logic if model supports it (blueprint says stockQuantity, schema has VoucherStock relation or plain field? 
                // Schema has PhysicalInventory table, but blueprint asked for stockQuantity field?
                // Let's check schema again. RewardCatalog doesn't have stockQuantity field directly?
                // Schema: voucherStock via VoucherStock[], PhysicalInventory via OneToOne.
                // For MVP, if we want stockQuantity, we should create PhysicalInventory record if type is physical.
                // But for now, let's just create the item. We can add inventory management later.
            }
        })

        // If type is physical and stock provided, init inventory
        if (newItem.rewardType === 'physical_item' && stockQuantity !== undefined) {
            await prisma.physicalInventory.upsert({
                where: { catalogId: newItem.id },
                create: { catalogId: newItem.id, stockCount: Number(stockQuantity) },
                update: { stockCount: Number(stockQuantity) }
            })
        }

        return NextResponse.json({ item: newItem }, { status: 201 })
    } catch (error) {
        console.error('Create catalog error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
