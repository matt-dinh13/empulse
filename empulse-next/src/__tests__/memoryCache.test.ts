/**
 * Tests for the in-memory cache layer.
 * These tests bypass Redis (which won't be available in test env)
 * and validate the in-process Map-based fallback cache.
 */
import { describe, it, expect, beforeEach } from 'vitest'

// We test the cache logic directly by importing the module.
// Since there's no Redis in test env, all calls fall through to memoryCache Map.

// Mock redis to be null so memoryCache is always used
import { vi } from 'vitest'
vi.mock('@/lib/redis', () => ({
    redis: null,
}))

import { getCache, setCache, clearCache } from '@/lib/memoryCache'

describe('memoryCache', () => {
    beforeEach(async () => {
        await clearCache()
    })

    it('should return null for missing key', async () => {
        const result = await getCache('nonexistent')
        expect(result).toBeNull()
    })

    it('should set and retrieve a value', async () => {
        await setCache('test-key', { foo: 'bar' }, 60_000)
        const result = await getCache<{ foo: string }>('test-key')
        expect(result).toEqual({ foo: 'bar' })
    })

    it('should handle different value types', async () => {
        await setCache('str', 'hello', 60_000)
        await setCache('num', 42, 60_000)
        await setCache('arr', [1, 2, 3], 60_000)

        expect(await getCache('str')).toBe('hello')
        expect(await getCache('num')).toBe(42)
        expect(await getCache('arr')).toEqual([1, 2, 3])
    })

    it('should return null for expired entries', async () => {
        await setCache('expires', 'soon', 1) // 1ms TTL
        // Wait for expiration
        await new Promise((r) => setTimeout(r, 10))
        const result = await getCache('expires')
        expect(result).toBeNull()
    })

    it('should clear all entries', async () => {
        await setCache('a', 1, 60_000)
        await setCache('b', 2, 60_000)
        await clearCache()
        expect(await getCache('a')).toBeNull()
        expect(await getCache('b')).toBeNull()
    })

    it('should clear by prefix', async () => {
        await setCache('admin:dashboard:1', 'data1', 60_000)
        await setCache('admin:dashboard:2', 'data2', 60_000)
        await setCache('user:profile:1', 'profile', 60_000)

        await clearCache('admin:')
        expect(await getCache('admin:dashboard:1')).toBeNull()
        expect(await getCache('admin:dashboard:2')).toBeNull()
        expect(await getCache('user:profile:1')).toBe('profile')
    })

    it('should overwrite existing key', async () => {
        await setCache('key', 'v1', 60_000)
        await setCache('key', 'v2', 60_000)
        expect(await getCache('key')).toBe('v2')
    })
})
