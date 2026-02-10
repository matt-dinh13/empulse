import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

if (process.env.NODE_ENV === 'production' && (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'fallback-secret')) {
    throw new Error('FATAL: JWT_SECRET is not defined in production environment!')
}

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export interface JWTPayload {
    userId: number
    role: string
    type: 'access' | 'refresh'
    iat: number
    exp: number
}

export function generateTokens(userId: number, role: string) {
    const accessToken = jwt.sign(
        { userId, role, type: 'access' },
        JWT_SECRET,
        { expiresIn: '1h' }
    )

    const refreshToken = jwt.sign(
        { userId, role, type: 'refresh' },
        JWT_SECRET,
        { expiresIn: '7d' }
    )

    return { accessToken, refreshToken }
}

export function verifyToken(token: string): JWTPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as JWTPayload
    } catch {
        return null
    }
}

export function setAuthCookies(response: NextResponse, tokens: { accessToken: string; refreshToken: string }) {
    response.cookies.set('accessToken', tokens.accessToken, {
        httpOnly: true,
        secure: IS_PRODUCTION,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60, // 1 hour
    })

    response.cookies.set('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: IS_PRODUCTION,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
    })
}

export function clearAuthCookies(response: NextResponse) {
    response.cookies.set('accessToken', '', { httpOnly: true, secure: IS_PRODUCTION, sameSite: 'lax', path: '/', maxAge: 0 })
    response.cookies.set('refreshToken', '', { httpOnly: true, secure: IS_PRODUCTION, sameSite: 'lax', path: '/', maxAge: 0 })
}

export function getTokenFromRequest(request: NextRequest): string | null {
    // 1. Check httpOnly cookie first
    const cookieToken = request.cookies.get('accessToken')?.value
    if (cookieToken) return cookieToken

    // 2. Fallback to Authorization header (backward compat during migration)
    const authHeader = request.headers.get('authorization')
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.substring(7)
    }
    return null
}

export async function authenticateRequest(request: NextRequest): Promise<number | null> {
    const token = getTokenFromRequest(request)
    if (!token) return null

    const payload = verifyToken(token)
    if (!payload || payload.type !== 'access') return null

    return payload.userId
}

export async function authenticateAdminRequest(request: NextRequest) {
    const userId = await authenticateRequest(request)
    if (!userId) return null

    const { default: prisma } = await import('@/lib/prisma')

    const user = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!user) return null
    if (user.role !== 'super_admin' && user.role !== 'hr_admin' && user.role !== 'admin') return null

    return user
}
