import { NextResponse } from 'next/server'

// Simple health check without database
export const runtime = 'nodejs'

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            hasDatabase: !!process.env.DATABASE_URL,
            hasDirect: !!process.env.DIRECT_URL,
            hasJwt: !!process.env.JWT_SECRET,
            nodeEnv: process.env.NODE_ENV,
        }
    })
}
