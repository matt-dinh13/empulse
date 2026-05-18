/**
 * Tests for Zod validation schemas.
 */
import { describe, it, expect } from 'vitest'
import { voteSchema, loginSchema, orderSchema } from '@/lib/validations'

describe('voteSchema', () => {
    it('should accept valid vote input', () => {
        const result = voteSchema.safeParse({
            receiverId: 2,
            message: 'Thank you for being such a great team player and helping me!',
            valueTagIds: [1, 3],
        })
        expect(result.success).toBe(true)
    })

    it('should reject message shorter than 20 chars', () => {
        const result = voteSchema.safeParse({
            receiverId: 2,
            message: 'Too short',
        })
        expect(result.success).toBe(false)
        if (!result.success) {
            expect(result.error.issues[0].path).toContain('message')
        }
    })

    it('should reject missing receiverId', () => {
        const result = voteSchema.safeParse({
            message: 'This is a long enough message for validation.',
        })
        expect(result.success).toBe(false)
        if (!result.success) {
            expect(result.error.issues[0].path).toContain('receiverId')
        }
    })

    it('should accept vote without valueTagIds (optional)', () => {
        const result = voteSchema.safeParse({
            receiverId: 5,
            message: 'Great collaboration on the quarterly report this week!',
        })
        expect(result.success).toBe(true)
    })

    it('should reject negative receiverId', () => {
        const result = voteSchema.safeParse({
            receiverId: -1,
            message: 'This is a long enough message for validation.',
        })
        expect(result.success).toBe(false)
    })
})

describe('loginSchema', () => {
    it('should accept valid login', () => {
        const result = loginSchema.safeParse({
            email: 'test@empulse.com',
            password: 'password123',
        })
        expect(result.success).toBe(true)
    })

    it('should reject invalid email', () => {
        const result = loginSchema.safeParse({
            email: 'not-an-email',
            password: 'password123',
        })
        expect(result.success).toBe(false)
    })
})

describe('orderSchema', () => {
    it('should accept valid order', () => {
        const result = orderSchema.safeParse({ catalogId: 1 })
        expect(result.success).toBe(true)
    })

    it('should reject missing catalogId', () => {
        const result = orderSchema.safeParse({})
        expect(result.success).toBe(false)
    })
})
