import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret')

const PUBLIC_PATHS = ['/', '/login', '/whitepaper']
const PUBLIC_API_PATHS = ['/api/auth/', '/api/health', '/api/ping']
const ADMIN_ROLES = ['super_admin', 'hr_admin', 'admin']

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Allow public pages
    if (PUBLIC_PATHS.includes(pathname)) {
        return NextResponse.next()
    }

    // Allow public API routes
    if (PUBLIC_API_PATHS.some(p => pathname.startsWith(p))) {
        return NextResponse.next()
    }

    // Cron endpoints handle their own auth via CRON_SECRET bearer token
    if (pathname.startsWith('/api/cron/')) {
        return NextResponse.next()
    }

    // Allow static files and Next.js internals
    if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|css|js|json|woff|woff2)$/)) {
        return NextResponse.next()
    }

    // Get token from cookie
    const token = request.cookies.get('accessToken')?.value

    if (!token) {
        // API routes return 401
        if (pathname.startsWith('/api/')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }
        // Page routes redirect to login
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Verify JWT using jose (Edge-compatible)
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET)

        // Check admin routes
        if (pathname.startsWith('/dashboard/admin') || pathname.startsWith('/api/admin/')) {
            const role = payload.role as string
            if (!ADMIN_ROLES.includes(role)) {
                if (pathname.startsWith('/api/')) {
                    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
                }
                return NextResponse.redirect(new URL('/dashboard', request.url))
            }
        }

        // Pass user info to downstream via headers
        const response = NextResponse.next()
        response.headers.set('x-user-id', String(payload.userId))
        response.headers.set('x-user-role', String(payload.role))
        return response
    } catch {
        // Invalid token
        if (pathname.startsWith('/api/')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }
        // Clear invalid cookie and redirect to login
        const response = NextResponse.redirect(new URL('/login', request.url))
        response.cookies.set('accessToken', '', { maxAge: 0 })
        response.cookies.set('refreshToken', '', { maxAge: 0 })
        return response
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
