/**
 * Typed Error System for EmPulse
 * Replaces string-based error codes with structured, typed errors.
 */

import { NextResponse } from 'next/server'

export enum ErrorCode {
    // Auth
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',

    // Voting
    VOTE_SELF_NOT_ALLOWED = 'VOTE_SELF_NOT_ALLOWED',
    VOTE_MANAGER_NOT_ALLOWED = 'VOTE_MANAGER_NOT_ALLOWED',
    QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',
    WEEKLY_LIMIT_EXCEEDED = 'WEEKLY_LIMIT_EXCEEDED',
    PERSON_LIMIT_EXCEEDED = 'PERSON_LIMIT_EXCEEDED',
    SAME_TEAM_LIMIT_EXCEEDED = 'SAME_TEAM_LIMIT_EXCEEDED',
    COOLDOWN_ACTIVE = 'COOLDOWN_ACTIVE',

    // Resources
    NOT_FOUND = 'NOT_FOUND',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',

    // Validation
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    RATE_LIMITED = 'RATE_LIMITED',

    // Orders
    INSUFFICIENT_POINTS = 'INSUFFICIENT_POINTS',
    ORDER_NOT_FOUND = 'ORDER_NOT_FOUND',
    INVALID_ORDER_STATUS = 'INVALID_ORDER_STATUS',

    // System
    INTERNAL_ERROR = 'INTERNAL_ERROR',
    SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}

const DEFAULT_STATUS_CODES: Partial<Record<ErrorCode, number>> = {
    [ErrorCode.UNAUTHORIZED]: 401,
    [ErrorCode.FORBIDDEN]: 403,
    [ErrorCode.INVALID_CREDENTIALS]: 401,
    [ErrorCode.NOT_FOUND]: 404,
    [ErrorCode.USER_NOT_FOUND]: 404,
    [ErrorCode.ITEM_NOT_FOUND]: 404,
    [ErrorCode.ORDER_NOT_FOUND]: 404,
    [ErrorCode.VALIDATION_ERROR]: 400,
    [ErrorCode.RATE_LIMITED]: 429,
    [ErrorCode.VOTE_SELF_NOT_ALLOWED]: 400,
    [ErrorCode.VOTE_MANAGER_NOT_ALLOWED]: 400,
    [ErrorCode.QUOTA_EXCEEDED]: 400,
    [ErrorCode.WEEKLY_LIMIT_EXCEEDED]: 400,
    [ErrorCode.PERSON_LIMIT_EXCEEDED]: 400,
    [ErrorCode.SAME_TEAM_LIMIT_EXCEEDED]: 400,
    [ErrorCode.COOLDOWN_ACTIVE]: 400,
    [ErrorCode.INSUFFICIENT_POINTS]: 400,
    [ErrorCode.INVALID_ORDER_STATUS]: 400,
    [ErrorCode.INTERNAL_ERROR]: 500,
    [ErrorCode.SERVICE_UNAVAILABLE]: 503,
}

export class AppError extends Error {
    public readonly code: ErrorCode
    public readonly statusCode: number
    public readonly details?: Record<string, unknown>

    constructor(
        code: ErrorCode,
        message: string,
        statusCode?: number,
        details?: Record<string, unknown>
    ) {
        super(message)
        this.name = 'AppError'
        this.code = code
        this.statusCode = statusCode ?? DEFAULT_STATUS_CODES[code] ?? 500
        this.details = details
    }

    toJSON() {
        return {
            error: this.message,
            code: this.code,
            ...(this.details ? { details: this.details } : {}),
        }
    }
}

/**
 * Helper to create a NextResponse from an AppError
 */
export function errorResponse(error: AppError) {
    return NextResponse.json(error.toJSON(), { status: error.statusCode })
}
