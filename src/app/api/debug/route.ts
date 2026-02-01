import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
    const results: Record<string, unknown> = {
        timestamp: new Date().toISOString(),
        steps: []
    }

    try {
        // Step 1: Check if Prisma client exists
        (results.steps as string[]).push('Prisma client loaded')

        // Step 2: Try to connect
        await prisma.$connect()
            ; (results.steps as string[]).push('Database connected')

        // Step 3: Try a simple query
        const userCount = await prisma.user.count()
            ; (results.steps as string[]).push(`User count: ${userCount}`)

        // Step 4: Try to find admin user
        const admin = await prisma.user.findFirst({
            where: { email: 'admin@empulse.com' },
            select: { id: true, email: true, fullName: true }
        })
            ; (results.steps as string[]).push(`Admin found: ${admin ? 'yes' : 'no'}`)

        results.status = 'ok'
        results.admin = admin

        return NextResponse.json(results)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        const errorStack = error instanceof Error ? error.stack : undefined

        results.status = 'error'
        results.error = errorMessage
        results.stack = errorStack?.split('\n').slice(0, 5)

        return NextResponse.json(results, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}
