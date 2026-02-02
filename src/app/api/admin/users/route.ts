import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { authenticateAdminRequest } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/admin/users
export async function GET(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '50')
        const skip = (page - 1) * limit
        const search = searchParams.get('search')
        const regionId = searchParams.get('regionId')
        const teamId = searchParams.get('teamId')

        const where: any = {}

        // HR Admin Restriction
        if (admin.role === 'hr_admin') {
            where.regionId = admin.regionId
        } else if (regionId) {
            where.regionId = parseInt(regionId)
        }

        if (teamId) where.teamId = parseInt(teamId)

        if (search) {
            where.OR = [
                { fullName: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } }
            ]
        }

        const [users, total] = await Promise.all([
            prisma.user.findMany({
                where,
                include: {
                    team: true,
                    region: true,
                    // Minimal wallet info if needed, or separate endpoint
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            }),
            prisma.user.count({ where })
        ])

        return NextResponse.json({
            users,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        })
    } catch (error) {
        console.error('Fetch users error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

// POST /api/admin/users
export async function POST(request: NextRequest) {
    const admin = await authenticateAdminRequest(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const body = await request.json()
        const { email, fullName, password, role, teamId, regionId, employeeId, managerId } = body

        if (!email || !fullName || !password || !regionId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // HR Admin check
        if (admin.role === 'hr_admin' && Number(regionId) !== admin.regionId) {
            return NextResponse.json({ error: 'Cannot create users in other regions' }, { status: 403 })
        }

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
        }

        const passwordHash = await bcrypt.hash(password, 12)

        // Date Calculations
        const now = new Date()
        const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
        const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0) // Last day of month

        const quarter = Math.floor(now.getMonth() / 3)
        const quarterStart = new Date(now.getFullYear(), quarter * 3, 1)
        const quarterEnd = new Date(now.getFullYear(), (quarter + 1) * 3, 0)

        // Get Default Quota
        const quotaSetting = await prisma.systemSetting.findUnique({
            where: { settingKey: 'quota_per_month' }
        })
        const defaultQuota = quotaSetting ? parseInt(quotaSetting.settingValue) : 8

        const newUser = await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email,
                    fullName,
                    passwordHash,
                    role: role || 'employee',
                    teamId: teamId ? Number(teamId) : null,
                    regionId: Number(regionId),
                    managerId: managerId ? Number(managerId) : null,
                    employeeId,
                    isActive: true
                }
            })

            // Initialize wallets
            await tx.quotaWallet.create({
                data: {
                    userId: user.id,
                    balance: defaultQuota,
                    periodStart,
                    periodEnd
                }
            })

            await tx.rewardWallet.create({
                data: {
                    userId: user.id,
                    balance: 0,
                    quarterStart,
                    quarterEnd
                }
            })

            return user
        })

        return NextResponse.json({ user: newUser }, { status: 201 })
    } catch (error) {
        console.error('Create user error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
