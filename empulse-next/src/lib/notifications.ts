import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export async function createNotification(
    userId: number,
    type: string,
    title: string,
    message: string,
    metadata?: Prisma.InputJsonValue
) {
    await prisma.inAppNotification.create({
        data: {
            userId,
            type,
            title,
            message,
            metadata: metadata ?? Prisma.JsonNull,
        },
    })
}
