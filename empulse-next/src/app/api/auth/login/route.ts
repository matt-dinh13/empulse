import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { generateTokens, setAuthCookies } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'

// Force Node.js runtime for bcryptjs and Prisma
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
        }

        // Rate limit: 5 attempts per email per 15 minutes
        const rl = rateLimit(`login:${email}`, 5, 15 * 60 * 1000)
        if (!rl.success) {
            return NextResponse.json({ error: 'Too many login attempts. Try again later.' }, { status: 429 })
        }

        // Find user
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                region: true,
                team: true,
                quotaWallet: true,
                rewardWallet: true,
            },
        })

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        if (!user.isActive) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.passwordHash)
        if (!validPassword) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        // Update last login
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        })

        // Generate tokens
        const tokens = generateTokens(user.id, user.role)

        const response = NextResponse.json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
                region: user.region,
                team: user.team,
                quotaWallet: user.quotaWallet,
                rewardWallet: user.rewardWallet,
            },
        })

        setAuthCookies(response, tokens)
        return response
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json({ error: 'Login failed' }, { status: 500 })
    }
}
