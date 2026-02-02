import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const { id } = await params
        const itemId = parseInt(id)

        const item = await prisma.rewardCatalog.findUnique({ where: { id: itemId } })
        if (!item) return NextResponse.json({ error: 'Item not found' }, { status: 404 })

        if (admin.role === 'hr_admin' && item.regionId !== admin.regionId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        return NextResponse.json({ item })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const { id } = await params
        const itemId = parseInt(id)

        // Fetch existing
        const existingItem = await prisma.rewardCatalog.findUnique({ where: { id: itemId } })
        if (!existingItem) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 })
        }

        // Auth Check
        if (admin.role === 'hr_admin' && existingItem.regionId !== admin.regionId) {
            return NextResponse.json({ error: 'Unauthorized to edit this region' }, { status: 403 })
        }

        const body = await request.json()
        const { name, description, pointsRequired, rewardType, icon, displayValue, isActive, regionId } = body

        // Region Change Check
        if (regionId && Number(regionId) !== existingItem.regionId) {
            if (admin.role === 'hr_admin') {
                return NextResponse.json({ error: 'Cannot move item to another region' }, { status: 403 })
            }
        }

        // Validate Points if changed
        if (pointsRequired && (pointsRequired < 10 || pointsRequired % 10 !== 0)) {
            return NextResponse.json({ error: 'Points must be a multiple of 10 and at least 10' }, { status: 400 })
        }

        const updatedItem = await prisma.rewardCatalog.update({
            where: { id: itemId },
            data: {
                name,
                description,
                pointsRequired: pointsRequired ? Number(pointsRequired) : undefined,
                rewardType,
                icon,
                displayValue,
                isActive,
                regionId: regionId ? Number(regionId) : undefined
            }
        })

        return NextResponse.json({ item: updatedItem })
    } catch (error) {
        console.error('Update catalog error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const { id } = await params
        const itemId = parseInt(id)

        const existingItem = await prisma.rewardCatalog.findUnique({ where: { id: itemId } })
        if (!existingItem) return NextResponse.json({ error: 'Item not found' }, { status: 404 })

        if (admin.role === 'hr_admin' && existingItem.regionId !== admin.regionId) {
            return NextResponse.json({ error: 'Unauthorized to delete this region item' }, { status: 403 })
        }

        // Soft delete
        await prisma.rewardCatalog.update({
            where: { id: itemId },
            data: { isActive: false }
        })

        return NextResponse.json({ message: 'Item deactivated successfully' })
    } catch (error) {
        console.error('Delete catalog error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
