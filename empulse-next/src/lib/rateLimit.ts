import { redis } from './redis'

const memoryStore = new Map<string, { count: number; resetAt: number }>()

// Clean up expired entries periodically (only for memory store)
setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of memoryStore) {
        if (now > entry.resetAt) {
            memoryStore.delete(key)
        }
    }
}, 60_000)

export async function rateLimit(key: string, limit: number, windowMs: number): Promise<{ success: boolean; remaining: number }> {
    if (redis) {
        try {
            const current = await redis.incr(key)
            if (current === 1) {
                // First request, set expiry
                await redis.pexpire(key, windowMs)
            }
            return {
                success: current <= limit,
                remaining: Math.max(0, limit - current)
            }
        } catch {
            // Fallback to memory on redis error silently to not break the app
        }
    }

    // Memory Fallback
    const now = Date.now()
    const entry = memoryStore.get(key)

    if (!entry || now > entry.resetAt) {
        memoryStore.set(key, { count: 1, resetAt: now + windowMs })
        return { success: true, remaining: limit - 1 }
    }

    if (entry.count >= limit) {
        return { success: false, remaining: 0 }
    }

    entry.count++
    return { success: true, remaining: limit - entry.count }
}
