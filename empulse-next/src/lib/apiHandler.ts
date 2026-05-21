/**
 * Central API error handler wrapper for EmPulse.
 * Wraps route handlers to provide consistent error handling,
 * AppError support, and structured error responses.
 */

import { NextRequest, NextResponse } from 'next/server'
import { AppError, errorResponse } from '@/lib/errors'
import { logger } from '@/lib/logger'

type RouteContext = { params: Promise<Record<string, string>> }

type ApiHandler = (
    req: NextRequest,
    ctx?: RouteContext
) => Promise<NextResponse>

/**
 * Wrap an API route handler with centralized error handling.
 *
 * - AppError instances → proper status code + JSON body
 * - Unknown errors → 500 with actual message (debug) + logging
 *
 * Usage:
 * ```ts
 * export const GET = withErrorHandler(async (request) => {
 *     // ... no try/catch needed
 *     return NextResponse.json({ data })
 * })
 * ```
 */
export function withErrorHandler(handler: ApiHandler): ApiHandler {
    return async (req: NextRequest, ctx?: RouteContext) => {
        try {
            return await handler(req, ctx)
        } catch (error) {
            // Structured AppError → known error with proper status
            if (error instanceof AppError) {
                return errorResponse(error)
            }

            // Unknown/unexpected error → log + 500
            const errMsg = error instanceof Error ? error.message : 'Unknown error'
            logger.error(`API Error [${req.method} ${req.nextUrl.pathname}]`, error)

            return NextResponse.json(
                { error: errMsg },
                { status: 500 }
            )
        }
    }
}
