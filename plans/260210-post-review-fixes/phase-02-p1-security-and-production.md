# Phase 2 — P1 Security + Production Blockers

> **Priority**: P1 — Fix before production launch
> **Status**: Pending
> **Estimated Files**: 8
> **Depends on**: Phase 1 complete

---

## Task 1: Remove Demo Passwords from Login Page

### Problem
`src/app/login/page.tsx:107-112` shows hardcoded credentials in production:
```
admin@empulse.com / password123
hr.admin@empulse.com / password123
nguyen.van.a@empulse.com / password123
```

### Fix
Gate behind environment check:
```typescript
{process.env.NODE_ENV === 'development' && (
    <div className="demo-accounts">
        {/* demo accounts table */}
    </div>
)}
```

Or better: use `NEXT_PUBLIC_SHOW_DEMO` env var set only in development.

### Files to modify
- `src/app/login/page.tsx` — Lines 107-112

---

## Task 2: Harden Login Error Handling

### Problem
1. `src/app/api/auth/login/route.ts:85-94` returns detailed error messages + stack traces:
```typescript
return NextResponse.json({
    error: error.message,  // Leaks internal details
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
}, { status: 500 })
```
2. Multiple `console.log` statements expose auth flow details to server logs

### Fix
```typescript
// Replace detailed error response with generic message
console.error('Login error:', error)  // Server-side only
return NextResponse.json({ error: 'Login failed' }, { status: 500 })
```

Remove or reduce `console.log` statements in auth flow (lines 26, 40, 45, 50, 53, 58, 65, 68). Keep only essential error logging.

### Files to modify
- `src/app/api/auth/login/route.ts` — Lines 26-94

---

## Task 3: Tighten Cookie Security

### Problem
`src/lib/auth.ts:48-61` sets `sameSite: 'lax'` which allows cookies on cross-site GET navigations:
```typescript
sameSite: 'lax',
```

### Fix
Change to `'strict'` for both accessToken and refreshToken cookies:
```typescript
sameSite: 'strict',
```

Note: This means the user won't be auto-logged-in when following links from external sites (e.g., email links to `/dashboard`). They'll need to log in again. This is acceptable for a security-focused internal tool.

### Files to modify
- `src/lib/auth.ts` — Lines 50 and 58

---

## Task 4: Add Rate Limiting to Registration

### Problem
`/api/auth/register` has no rate limiting. Attackers can create unlimited accounts.

### Fix
Add rate limiting at the top of the POST handler, similar to login:
```typescript
import { rateLimit } from '@/lib/rateLimit'

// At top of POST handler:
const ip = request.headers.get('x-forwarded-for') || 'unknown'
const { success } = rateLimit(`register:${ip}`, 3, 60 * 60 * 1000) // 3 per hour per IP
if (!success) {
    return NextResponse.json({ error: 'Too many registration attempts' }, { status: 429 })
}
```

### Files to modify
- `src/app/api/auth/register/route.ts` — Add after line 7

---

## Task 5: Fix Cron Endpoint Middleware

### Problem
`src/middleware.ts:19` makes cron endpoints publicly accessible through middleware:
```typescript
if (PUBLIC_API_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.next()
}
```

The cron endpoints themselves check `CRON_SECRET` via `Authorization: Bearer` header (see `src/lib/cron.ts`), but the middleware bypass means they appear in public routing.

### Fix
Remove `/api/cron/` from `PUBLIC_API_PATHS`. The cron endpoints internally verify the bearer token, but middleware should NOT skip JWT validation for them. Since Vercel Cron sends the Authorization header, the cron endpoints should handle their own auth independently.

Instead, create a separate check:
```typescript
const PUBLIC_API_PATHS = ['/api/auth/', '/api/health', '/api/ping']  // Remove /api/cron/

// In middleware, add specific handling:
if (pathname.startsWith('/api/cron/')) {
    // Let cron endpoints handle their own auth via CRON_SECRET
    // Don't require JWT, but don't add to public paths either
    return NextResponse.next()
}
```

This is functionally the same but makes the intent clear. The cron endpoints' own `verifyCronAuth()` function handles the actual security.

### Files to modify
- `src/middleware.ts` — Lines 7, 18-21

---

## Task 6: Fix TypeScript Error in notifications.ts

### Problem
`src/lib/notifications.ts:16` has a type error:
```
Type 'Record<string, unknown>' is not assignable to type 'NullableJsonNullValueInput | InputJsonValue'
```

### Fix
Cast the metadata parameter:
```typescript
metadata: metadata ? (metadata as Prisma.InputJsonValue) : undefined,
```

Or use `Prisma.JsonValue`:
```typescript
metadata: metadata as Prisma.InputJsonValue ?? undefined,
```

### Files to modify
- `src/lib/notifications.ts` — Line 16

---

## Success Criteria

- [ ] No demo passwords visible in production login page
- [ ] Login errors return generic messages only
- [ ] Cookies use sameSite: 'strict'
- [ ] Registration rate-limited (3/hour/IP)
- [ ] Cron auth intent is explicit in middleware
- [ ] Zero TypeScript errors (`npx tsc --noEmit`)
- [ ] Build passes
- [ ] 27/27 smoke tests pass
