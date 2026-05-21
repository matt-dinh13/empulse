/**
 * Extended validation schema tests — covers all Zod schemas
 * beyond the basic voteSchema/loginSchema/orderSchema.
 */
import { describe, it, expect } from 'vitest'
import {
    registerSchema,
    catalogCreateSchema,
    settingsUpdateSchema,
    userUpdateSchema,
} from '@/lib/validations'

describe('registerSchema', () => {
    const valid = {
        email: 'test@example.com',
        password: 'password123',
        fullName: 'Test User',
        regionId: 1,
    }

    it('should accept valid registration data', () => {
        expect(registerSchema.safeParse(valid).success).toBe(true)
    })

    it('should reject short password', () => {
        const result = registerSchema.safeParse({ ...valid, password: '123' })
        expect(result.success).toBe(false)
    })

    it('should reject invalid email', () => {
        const result = registerSchema.safeParse({ ...valid, email: 'notanemail' })
        expect(result.success).toBe(false)
    })

    it('should accept optional teamId and managerId', () => {
        const result = registerSchema.safeParse({ ...valid, teamId: 1, managerId: 2 })
        expect(result.success).toBe(true)
    })

    it('should accept null teamId', () => {
        const result = registerSchema.safeParse({ ...valid, teamId: null })
        expect(result.success).toBe(true)
    })

    it('should reject negative regionId', () => {
        const result = registerSchema.safeParse({ ...valid, regionId: -1 })
        expect(result.success).toBe(false)
    })
})

describe('catalogCreateSchema', () => {
    const valid = {
        name: 'Grab Voucher 50K',
        description: 'A nice voucher',
        pointsRequired: 50,
        rewardType: 'digital_voucher' as const,
        regionId: 1,
    }

    it('should accept valid catalog item', () => {
        expect(catalogCreateSchema.safeParse(valid).success).toBe(true)
    })

    it('should reject points not multiple of 10', () => {
        const result = catalogCreateSchema.safeParse({ ...valid, pointsRequired: 15 })
        expect(result.success).toBe(false)
    })

    it('should reject points below 10', () => {
        const result = catalogCreateSchema.safeParse({ ...valid, pointsRequired: 5 })
        expect(result.success).toBe(false)
    })

    it('should accept physical_item type', () => {
        const result = catalogCreateSchema.safeParse({ ...valid, rewardType: 'physical_item' })
        expect(result.success).toBe(true)
    })

    it('should accept shorthand voucher type', () => {
        const result = catalogCreateSchema.safeParse({ ...valid, rewardType: 'voucher' })
        expect(result.success).toBe(true)
    })

    it('should reject unknown reward type', () => {
        const result = catalogCreateSchema.safeParse({ ...valid, rewardType: 'random' })
        expect(result.success).toBe(false)
    })

    it('should accept optional stockQuantity', () => {
        const result = catalogCreateSchema.safeParse({ ...valid, stockQuantity: 100 })
        expect(result.success).toBe(true)
    })
})

describe('settingsUpdateSchema', () => {
    it('should accept valid settings array', () => {
        const data = {
            settings: [
                { key: 'quota_per_month', value: 10 },
                { key: 'enable_anonymous_votes', value: true },
            ],
        }
        expect(settingsUpdateSchema.safeParse(data).success).toBe(true)
    })

    it('should accept string values', () => {
        const data = {
            settings: [{ key: 'some_key', value: 'some_value' }],
        }
        expect(settingsUpdateSchema.safeParse(data).success).toBe(true)
    })

    it('should reject empty settings key', () => {
        const data = {
            settings: [{ key: '', value: 5 }],
        }
        expect(settingsUpdateSchema.safeParse(data).success).toBe(false)
    })

    it('should reject missing settings array', () => {
        expect(settingsUpdateSchema.safeParse({}).success).toBe(false)
    })
})

describe('userUpdateSchema', () => {
    it('should accept valid partial update', () => {
        const data = { fullName: 'Updated Name' }
        expect(userUpdateSchema.safeParse(data).success).toBe(true)
    })

    it('should accept role change', () => {
        const data = { role: 'hr_admin' }
        expect(userUpdateSchema.safeParse(data).success).toBe(true)
    })

    it('should reject invalid role', () => {
        const data = { role: 'superuser' }
        expect(userUpdateSchema.safeParse(data).success).toBe(false)
    })

    it('should accept isActive toggle', () => {
        const data = { isActive: false }
        expect(userUpdateSchema.safeParse(data).success).toBe(true)
    })

    it('should accept empty object (no updates)', () => {
        expect(userUpdateSchema.safeParse({}).success).toBe(true)
    })
})
