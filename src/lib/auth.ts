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
