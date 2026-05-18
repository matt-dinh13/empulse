/**
 * Tests for the withErrorHandler API middleware.
 */
import { describe, it, expect, vi } from 'vitest'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandler } from '@/lib/apiHandler'
import { AppError, ErrorCode } from '@/lib/errors'

// Mock logger to avoid console noise
vi.mock('@/lib/logger', () => ({
    logger: { error: vi.fn(), info: vi.fn(), warn: vi.fn() },
}))

function makeRequest(path = '/api/test') {
    return new NextRequest(new URL(path, 'http://localhost'))
}

describe('withErrorHandler', () => {
    it('should pass through successful responses unchanged', async () => {
        const handler = withErrorHandler(async () => {
            return NextResponse.json({ ok: true })
        })

        const res = await handler(makeRequest())
        expect(res.status).toBe(200)
        const body = await res.json()
        expect(body.ok).toBe(true)
    })

    it('should convert AppError to proper error response', async () => {
        const handler = withErrorHandler(async () => {
            throw new AppError(ErrorCode.QUOTA_EXCEEDED, 'Monthly quota reached')
        })

        const res = await handler(makeRequest())
        expect(res.status).toBe(400)
        const body = await res.json()
        expect(body.error).toBe('Monthly quota reached')
        expect(body.code).toBe('QUOTA_EXCEEDED')
    })

    it('should handle unknown errors with 500 and actual message', async () => {
        const handler = withErrorHandler(async () => {
            throw new Error('Database connection failed')
        })

        const res = await handler(makeRequest())
        expect(res.status).toBe(500)
        const body = await res.json()
        expect(body.error).toBe('Database connection failed')
    })

    it('should handle non-Error throws gracefully', async () => {
        const handler = withErrorHandler(async () => {
            throw 'string error' // eslint-disable-line no-throw-literal
        })

        const res = await handler(makeRequest())
        expect(res.status).toBe(500)
        const body = await res.json()
        expect(body.error).toBe('Unknown error')
    })
})
