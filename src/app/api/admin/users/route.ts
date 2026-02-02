import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Helper to check admin role
async function checkAdmin(request: NextRequest) {
    const user = await verifyToken(request)
    if (!user) return null
    // Allow 'admin' (Super Admin) and 'hr_admin'
    if (user.role !== 'admin' && user.role !== 'hr_admin') return null
    return user
}

export async function GET(request: NextRequest) {
    const admin = await checkAdmin(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const users = await prisma.user.findMany({
            include: {
                team: true,
                region: true,
                quotaWallet: true,
                rewardWallet: true,
            },
            orderBy: { id: 'asc' }
        })

        return NextResponse.json({ users })
    } catch (error) {
        console.error('Fetch users error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    const admin = await checkAdmin(request)
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    try {
        const body = await request.json()
        const { email, fullName, password, role, teamId, regionId, employeeId } = body

        if (!email || !fullName || !password || !regionId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email,
                    fullName,
                    passwordHash,
                    role: role || 'employee',
                    teamId: teamId ? Number(teamId) : null,
                    regionId: Number(regionId),
                    employeeId
                }
            })

            // Initialize wallets
            await tx.quotaWallet.create({
                data: {
                    userId: user.id,
                    periodStart: new Date(), // Logic needed for proper dates, using now for simplicity
                    periodEnd: new Date(new Date().setMonth(new Date().getMonth() + 1))
                }
            })

            await tx.rewardWallet.create({
                data: {
                    userId: user.id,
                    quarterStart: new Date(),
                    quarterEnd: new Date(new Date().setMonth(new Date().getMonth() + 3))
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
