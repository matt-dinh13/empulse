import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export interface JWTPayload {
    userId: number
    type: 'access' | 'refresh'
    iat: number
    exp: number
}

export function generateTokens(userId: number) {
    const accessToken = jwt.sign(
        { userId, type: 'access' },
        JWT_SECRET,
        { expiresIn: '1h' }
    )

    const refreshToken = jwt.sign(
        { userId, type: 'refresh' },
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

export function getTokenFromRequest(request: NextRequest): string | null {
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

    // We must import prisma dynamically or ensure no circular deps. 
    // Usually safe in Next.js api routes but let's be careful.
    // Ideally pass prisma client or just import it.
    // Since this file is in lib, we interpret it as server-side.
    const { default: prisma } = await import('@/lib/prisma')

    const user = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!user) return null
    if (user.role !== 'admin' && user.role !== 'hr_admin') return null

    return user
}
