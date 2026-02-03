import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Force Node.js runtime
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        // Test database connection
        const userCount = await prisma.user.count()

        return NextResponse.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            version: '1.0.0',
            environment: process.env.NODE_ENV,
            database: 'connected',
            userCount,
            message: 'EmPulse API is running!'
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({
            status: 'error',
            timestamp: new Date().toISOString(),
            database: 'disconnected',
            error: errorMessage,
            hint: 'Check DATABASE_URL environment variable'
        }, { status: 500 })
    }
}
