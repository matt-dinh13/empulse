import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { generateTokens, setAuthCookies } from '@/lib/auth'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, password, fullName, regionId, teamId, managerId, role } = body

        // Validation
        if (!email || !password || !fullName || !regionId) {
            return NextResponse.json(
                { error: 'Email, password, fullName, and regionId are required' },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters' },
                { status: 400 }
            )
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            )
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 12)

        // Get current period dates
        const now = new Date()
        const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
        const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)

        // Get quarter dates
        const quarter = Math.floor(now.getMonth() / 3)
        const quarterStart = new Date(now.getFullYear(), quarter * 3, 1)
        const quarterEnd = new Date(now.getFullYear(), (quarter + 1) * 3, 0)

        // Get default quota from settings
        const quotaSetting = await prisma.systemSetting.findUnique({
            where: { settingKey: 'quota_per_month' },
        })
        const defaultQuota = quotaSetting ? parseInt(quotaSetting.settingValue) : 8

        // Create user with wallets
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                fullName,
                regionId,
                teamId: teamId || null,
                managerId: managerId || null,
                role: role || 'employee',
                quotaWallet: {
                    create: {
                        balance: defaultQuota,
                        periodStart,
                        periodEnd,
                    },
                },
                rewardWallet: {
                    create: {
                        balance: 0,
                        quarterStart,
                        quarterEnd,
                    },
                },
            },
            include: {
                region: true,
                team: true,
                quotaWallet: true,
                rewardWallet: true,
            },
        })

        // Generate tokens
        const tokens = generateTokens(user.id, user.role)

        const response = NextResponse.json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
                region: user.region,
                team: user.team,
            },
        }, { status: 201 })

        setAuthCookies(response, tokens)
        return response
    } catch (error) {
        console.error('Register error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
