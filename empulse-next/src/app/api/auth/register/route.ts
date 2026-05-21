import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { generateTokens, setAuthCookies } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'
import { AppError, ErrorCode } from '@/lib/errors'
import { withErrorHandler } from '@/lib/apiHandler'

export const POST = withErrorHandler(async (request: NextRequest) => {
    // Rate limit: 3 registrations per IP per hour
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
    const rl = await rateLimit(`register:${ip}`, 3, 60 * 60 * 1000)
    if (!rl.success) {
        throw new AppError(ErrorCode.RATE_LIMITED, 'Too many registration attempts. Try again later.')
    }

    const body = await request.json()
    const { email, password, fullName, regionId, teamId, managerId } = body

    if (!email || !password || !fullName || !regionId) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, 'Email, password, fullName, and regionId are required')
    }

    if (password.length < 6) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, 'Password must be at least 6 characters')
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
        throw new AppError(ErrorCode.VALIDATION_ERROR, 'Email already registered', 409)
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const now = new Date()
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    const quarter = Math.floor(now.getMonth() / 3)
    const quarterStart = new Date(now.getFullYear(), quarter * 3, 1)
    const quarterEnd = new Date(now.getFullYear(), (quarter + 1) * 3, 0)

    const quotaSetting = await prisma.systemSetting.findUnique({
        where: { settingKey: 'quota_per_month' },
    })
    const defaultQuota = quotaSetting ? parseInt(quotaSetting.settingValue) : 8

    const user = await prisma.user.create({
        data: {
            email,
            passwordHash,
            fullName,
            regionId,
            teamId: teamId || null,
            managerId: managerId || null,
            role: 'employee',
            quotaWallet: {
                create: { balance: defaultQuota, periodStart, periodEnd },
            },
            rewardWallet: {
                create: { balance: 0, quarterStart, quarterEnd },
            },
        },
        include: {
            region: true,
            team: true,
            quotaWallet: true,
            rewardWallet: true,
        },
    })

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
})
