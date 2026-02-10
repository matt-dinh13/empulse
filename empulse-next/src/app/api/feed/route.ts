import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getCache, setCache } from '@/lib/memoryCache'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const FEED_CACHE_TTL = 30 * 1000 // 30 seconds

export async function GET(request: NextRequest) {
    try {
        // Check if public wall is enabled
        const setting = await prisma.systemSetting.findUnique({
            where: { settingKey: 'enable_public_wall' },
        })
        if (setting && setting.settingValue === 'false') {
            return NextResponse.json({ error: 'Public feed is disabled' }, { status: 403 })
        }

        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const skip = (page - 1) * limit

        const cacheKey = `feed:${page}:${limit}`
        const cached = getCache<{ feed: unknown[]; pagination: unknown }>(cacheKey)
        if (cached) {
            return NextResponse.json(cached)
        }

        const [votes, total] = await Promise.all([
            prisma.vote.findMany({
                include: {
                    sender: {
                        select: { id: true, fullName: true, team: { select: { name: true } } },
                    },
                    receiver: {
                        select: { id: true, fullName: true, team: { select: { name: true } } },
                    },
                    valueTags: {
                        include: { valueTag: true },
                    },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.vote.count(),
        ])

        const feed = votes.map(v => ({
            id: v.id,
            sender: {
                id: v.sender.id,
                fullName: v.sender.fullName,
                team: v.sender.team?.name || null,
            },
            receiver: {
                id: v.receiver.id,
                fullName: v.receiver.fullName,
                team: v.receiver.team?.name || null,
            },
            message: v.message,
            pointsAwarded: v.pointsAwarded,
            valueTags: v.valueTags.map(vt => ({
                id: vt.valueTag.id,
                name: vt.valueTag.name,
                icon: vt.valueTag.icon,
            })),
            createdAt: v.createdAt,
        }))

        const result = {
            feed,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        }

        setCache(cacheKey, result, FEED_CACHE_TTL)

        return NextResponse.json(result)
    } catch (error) {
        console.error('Feed error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
