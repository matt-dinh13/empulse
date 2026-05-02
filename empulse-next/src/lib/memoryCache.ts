import { redis } from './redis'

type CacheEntry<T> = {
    value: T
    expiresAt: number
}

const memoryCache = new Map<string, CacheEntry<unknown>>()

export async function getCache<T>(key: string): Promise<T | null> {
    if (redis) {
        try {
            return await redis.get<T>(key)
        } catch (e) {
            // fallback
        }
    }

    const entry = memoryCache.get(key)
    if (!entry) return null
    if (Date.now() > entry.expiresAt) {
        memoryCache.delete(key)
        return null
    }
    return entry.value as T
}

export async function setCache<T>(key: string, value: T, ttlMs: number): Promise<void> {
    if (redis) {
        try {
            await redis.set(key, value, { px: ttlMs })
            return
        } catch (e) {
            // fallback
        }
    }

    memoryCache.set(key, { value, expiresAt: Date.now() + ttlMs })
}

export async function clearCache(prefix?: string): Promise<void> {
    if (redis) {
        try {
            if (!prefix) {
                await redis.flushdb()
            } else {
                const keys = await redis.keys(`${prefix}*`)
                if (keys.length > 0) {
                    await redis.del(...keys)
                }
            }
            return
        } catch (e) {
            // fallback
        }
    }

    if (!prefix) {
        memoryCache.clear()
        return
    }
    for (const key of memoryCache.keys()) {
        if (key.startsWith(prefix)) {
            memoryCache.delete(key)
        }
    }
}
