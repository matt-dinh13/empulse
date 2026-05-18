/**
 * Tests for the AppError system and errorResponse helper.
 */
import { describe, it, expect } from 'vitest'
import { AppError, ErrorCode, errorResponse } from '@/lib/errors'

describe('AppError', () => {
    it('should use default status code from ErrorCode map', () => {
        const err = new AppError(ErrorCode.UNAUTHORIZED, 'Not logged in')
        expect(err.statusCode).toBe(401)
        expect(err.code).toBe('UNAUTHORIZED')
        expect(err.message).toBe('Not logged in')
    })

    it('should allow overriding status code', () => {
        const err = new AppError(ErrorCode.INTERNAL_ERROR, 'Custom', 503)
        expect(err.statusCode).toBe(503)
    })

    it('should produce correct JSON with toJSON()', () => {
        const err = new AppError(ErrorCode.VOTE_SELF_NOT_ALLOWED, 'Cannot vote for yourself', undefined, {
            senderId: 1,
        })
        const json = err.toJSON()
        expect(json).toEqual({
            error: 'Cannot vote for yourself',
            code: 'VOTE_SELF_NOT_ALLOWED',
            details: { senderId: 1 },
        })
    })

    it('should omit details from JSON when not provided', () => {
        const err = new AppError(ErrorCode.NOT_FOUND, 'Missing')
        const json = err.toJSON()
        expect(json).toEqual({
            error: 'Missing',
            code: 'NOT_FOUND',
        })
        expect(json).not.toHaveProperty('details')
    })

    it('should extend Error class', () => {
        const err = new AppError(ErrorCode.FORBIDDEN, 'No access')
        expect(err).toBeInstanceOf(Error)
        expect(err.name).toBe('AppError')
    })
})

describe('errorResponse', () => {
    it('should return a NextResponse with correct status and body', async () => {
        const err = new AppError(ErrorCode.INSUFFICIENT_POINTS, 'Not enough points')
        const res = errorResponse(err)

        expect(res.status).toBe(400)
        const body = await res.json()
        expect(body.error).toBe('Not enough points')
        expect(body.code).toBe('INSUFFICIENT_POINTS')
    })
})
