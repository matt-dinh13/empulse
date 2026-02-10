import { z } from 'zod'

// --- Auth ---

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string().min(1).max(255),
    regionId: z.number().int().positive(),
    teamId: z.number().int().positive().nullable().optional(),
    managerId: z.number().int().positive().nullable().optional(),
    role: z.enum(['employee', 'hr_admin', 'super_admin', 'admin']).optional(),
})

// --- Votes ---

export const voteSchema = z.object({
    receiverId: z.number().int().positive(),
    message: z.string().min(20).max(500),
    valueTagIds: z.array(z.number().int().positive()).optional(),
})

// --- Orders ---

export const orderSchema = z.object({
    catalogId: z.number().int().positive(),
})

// --- Admin: Catalog ---

export const catalogCreateSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1),
    pointsRequired: z.number().int().min(10).refine(v => v % 10 === 0, { message: 'Points must be a multiple of 10' }),
    rewardType: z.enum(['digital_voucher', 'physical_item', 'voucher', 'physical']),
    icon: z.string().optional(),
    displayValue: z.string().max(50).nullable().optional(),
    regionId: z.number().int().positive(),
    stockQuantity: z.number().int().min(0).optional(),
})

export const catalogUpdateSchema = catalogCreateSchema.partial()

// --- Admin: Settings ---

export const settingsUpdateSchema = z.object({
    settings: z.array(z.object({
        key: z.string().min(1),
        value: z.union([z.string(), z.number(), z.boolean()]),
    })),
})

// --- Admin: User Update ---

export const userUpdateSchema = z.object({
    fullName: z.string().min(1).max(255).optional(),
    email: z.string().email().optional(),
    role: z.enum(['employee', 'hr_admin', 'super_admin', 'admin']).optional(),
    teamId: z.number().int().positive().nullable().optional(),
    managerId: z.number().int().positive().nullable().optional(),
    isActive: z.boolean().optional(),
})
