/**
 * Tests for voteService helper functions.
 * Pure functions only — no Prisma mocking needed.
 */
import { describe, it, expect } from 'vitest'
import { getMonthYear, getWeekYear } from '@/lib/services/voteService'

describe('getMonthYear', () => {
    it('should format January 2026 correctly', () => {
        const date = new Date(2026, 0, 15) // Jan 15, 2026
        expect(getMonthYear(date)).toBe('2026-01')
    })

    it('should zero-pad single-digit months', () => {
        const date = new Date(2026, 4, 1) // May 1, 2026
        expect(getMonthYear(date)).toBe('2026-05')
    })

    it('should handle December correctly', () => {
        const date = new Date(2026, 11, 31) // Dec 31, 2026
        expect(getMonthYear(date)).toBe('2026-12')
    })

    it('should handle year boundary (Jan 1)', () => {
        const date = new Date(2027, 0, 1)
        expect(getMonthYear(date)).toBe('2027-01')
    })
})

describe('getWeekYear', () => {
    it('should return a valid week-year format', () => {
        const date = new Date(2026, 0, 5) // Mon Jan 5, 2026
        const result = getWeekYear(date)
        expect(result).toMatch(/^\d{4}-W\d{2}$/)
    })

    it('should zero-pad single-digit week numbers', () => {
        const date = new Date(2026, 0, 1) // Jan 1, 2026
        const result = getWeekYear(date)
        expect(result).toMatch(/W\d{2}/)
    })

    it('should return different weeks for dates a week apart', () => {
        const week1 = getWeekYear(new Date(2026, 4, 11)) // May 11
        const week2 = getWeekYear(new Date(2026, 4, 18)) // May 18
        expect(week1).not.toBe(week2)
    })

    it('should return same week for consecutive days in same week', () => {
        const monday = getWeekYear(new Date(2026, 4, 11))    // Mon May 11
        const wednesday = getWeekYear(new Date(2026, 4, 13))  // Wed May 13
        expect(monday).toBe(wednesday)
    })
})
