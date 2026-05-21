import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export function verifyCronAuth(request: NextRequest): boolean {
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    if (!cronSecret) return false
    return authHeader === `Bearer ${cronSecret}`
}

export async function logJobExecution(
    jobName: string,
    status: 'success' | 'failed',
    recordsProcessed?: number,
    errorMessage?: string
) {
    await prisma.scheduledJobLog.create({
        data: {
            jobName,
            status,
            startedAt: new Date(),
            completedAt: new Date(),
            recordsProcessed,
            errorMessage,
        },
    })
}
