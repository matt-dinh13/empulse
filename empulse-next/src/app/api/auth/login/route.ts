import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { generateTokens } from '@/lib/auth'

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

        console.log('[Login] Attempting login for:', email)

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
            console.log('[Login] User not found')
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        if (!user.isActive) {
            console.log('[Login] User inactive')
            return NextResponse.json({ error: 'Account is deactivated' }, { status: 403 })
        }

        // Verify password
        console.log('[Login] Verifying password')
        const validPassword = await bcrypt.compare(password, user.passwordHash)
        if (!validPassword) {
            console.log('[Login] Invalid password')
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        // Update last login (Write operation)
        console.log('[Login] Updating last login')
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        })

        // Generate tokens
        console.log('[Login] Generating tokens')
        const tokens = generateTokens(user.id)

        console.log('[Login] Success')
        return NextResponse.json({
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
            ...tokens,
        })
    } catch (error) {
        console.error('[Login] Error:', error)
        // Return detailed error for debugging (even in prod for this issue)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        const errorStack = error instanceof Error ? error.stack : undefined
        return NextResponse.json(
            {
                error: 'Internal server error',
                details: errorMessage,
                stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
            },
            { status: 500 }
        )
    }
}
