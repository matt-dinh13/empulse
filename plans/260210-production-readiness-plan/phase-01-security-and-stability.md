# Phase 1: Security & Stability

**Priority:** P0 - Critical (must complete before production)
**Status:** Pending

## Overview

Fix security vulnerabilities that could compromise the system in production. These are non-negotiable before any real users touch the app.

---

## 1.1 Move Auth Tokens to httpOnly Cookies

**Problem:** Tokens in `localStorage` are vulnerable to XSS. Any injected script steals all tokens.

**Current state:**
- `src/lib/clientAuth.ts` stores tokens in `localStorage`
- `src/lib/auth.ts` reads from `Authorization: Bearer` header
- `src/app/api/auth/login/route.ts` returns tokens in JSON body

**Changes needed:**

### Server-side (`src/lib/auth.ts`)
- Add `setAuthCookies(response, tokens)` - sets `accessToken` and `refreshToken` as httpOnly, Secure, SameSite=Lax cookies
- Add `getTokenFromCookies(request)` - reads token from cookie
- Update `getTokenFromRequest()` to check cookies first, then fallback to Bearer header (backward compat during migration)

### Login route (`src/app/api/auth/login/route.ts`)
- After generating tokens, call `setAuthCookies()` on response
- Still return user object (but not tokens) in JSON body

### Logout route (NEW: `src/app/api/auth/logout/route.ts`)
- Clear httpOnly cookies by setting `Max-Age=0`

### Client-side (`src/lib/clientAuth.ts`)
- Remove `localStorage` token storage
- `buildAuthHeaders()` becomes unnecessary (cookies auto-sent)
- Keep `clearAuthStorage()` for user data only
- `handleUnauthorized()` just redirects, no storage clearing needed

### Files to modify:
- `src/lib/auth.ts`
- `src/lib/clientAuth.ts`
- `src/app/api/auth/login/route.ts`
- `src/app/api/auth/register/route.ts` (if it also returns tokens)
- All client pages that use `buildAuthHeaders()` - remove header passing from `fetch()` calls since cookies are automatic

---

## 1.2 Add Next.js Middleware for Route Protection

**Problem:** Every API route and page manually checks auth. Easy to forget, leads to unprotected routes.

**Changes needed:**

### New file: `src/middleware.ts`
```
Protect:
  /dashboard/* → redirect to /login if no valid cookie
  /api/* (except /api/auth/*, /api/health, /api/ping) → return 401 if no valid cookie

Skip:
  /, /login, /whitepaper, /api/auth/*, /api/health, /api/ping
```

### Logic:
1. Read `accessToken` cookie
2. Verify JWT (use `jose` library instead of `jsonwebtoken` - jose works in Edge Runtime, jsonwebtoken doesn't)
3. For `/dashboard/admin/*` → additionally check role from JWT payload (add role to JWT claims)
4. Set `x-user-id` header for downstream API routes

### Dependencies:
- Install `jose` package (Edge-compatible JWT library)
- Update `generateTokens()` to include `role` in JWT payload

### Files to create:
- `src/middleware.ts`

### Files to modify:
- `src/lib/auth.ts` (add role to JWT payload)
- `package.json` (add `jose`)

---

## 1.3 Secure Debug Endpoints

**Problem:** `/api/debug/promote` and `/api/debug/seed` exist. They have env guards (`NODE_ENV === 'production'`) but rely on `ENABLE_DEBUG_ENDPOINTS` env var.

**Current state:** Already partially protected (line 10-12 in both files check `process.env.NODE_ENV === 'production'`). This is acceptable.

**Action:** Verify `ENABLE_DEBUG_ENDPOINTS` is NOT set in Vercel production environment. Document in deployment checklist.

**Optional hardening:** Remove these endpoints entirely before production deploy and use `prisma/seed.js` for seeding instead.

---

## 1.4 Add Input Validation with Zod

**Problem:** API routes do ad-hoc validation. No schema validation.

**Changes needed:**

### Install:
- `zod` package

### Create validation schemas: `src/lib/validations.ts`
```typescript
// Vote schema
voteSchema = z.object({
  receiverId: z.number().int().positive(),
  message: z.string().min(20).max(500)
})

// Order schema
orderSchema = z.object({
  catalogId: z.number().int().positive()
})

// Catalog schema (admin)
catalogSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  pointsRequired: z.number().int().min(10).multipleOf(10),
  rewardType: z.enum(['digital_voucher', 'physical_item']),
  regionId: z.number().int().positive(),
  // ... optional fields
})

// Settings schema (admin)
settingsSchema = z.object({
  settings: z.array(z.object({
    key: z.string(),
    value: z.union([z.string(), z.number(), z.boolean()])
  }))
})
```

### Apply to routes:
- `src/app/api/votes/route.ts` POST
- `src/app/api/orders/route.ts` POST
- `src/app/api/admin/catalog/route.ts` POST
- `src/app/api/admin/settings/route.ts` PUT
- `src/app/api/admin/users/[id]/route.ts` PUT

---

## 1.5 Add Rate Limiting

**Problem:** No rate limiting on login or API endpoints.

**Approach:** Use in-memory rate limiting (simple, works for Vercel serverless with caveats). For production scale, consider Vercel Edge middleware or Upstash Redis.

### Simple approach for MVP:
Use existing `memoryCache.ts` pattern for a lightweight rate limiter.

### Create: `src/lib/rateLimit.ts`
- `rateLimit(key: string, limit: number, windowMs: number)` → returns `{ success: boolean, remaining: number }`
- Uses in-memory Map with TTL

### Apply to:
- `/api/auth/login` → 5 attempts per email per 15min
- `/api/votes` POST → 10 requests per user per minute
- `/api/orders` POST → 5 requests per user per minute

---

## Todo

- [ ] Install `jose` and `zod` packages
- [ ] Implement httpOnly cookie auth
- [ ] Create `src/middleware.ts`
- [ ] Add role to JWT payload
- [ ] Create `src/lib/validations.ts` with zod schemas
- [ ] Apply zod validation to all POST/PUT API routes
- [ ] Create `src/lib/rateLimit.ts`
- [ ] Apply rate limiting to login and vote endpoints
- [ ] Update all client-side fetch calls to remove manual auth headers
- [ ] Create logout API route
- [ ] Test auth flow end-to-end
- [ ] Document deployment checklist (ensure ENABLE_DEBUG_ENDPOINTS is not set)

## Risk Assessment

- **Cookie auth migration** will break existing sessions. All users must re-login after deploy.
- **Middleware** must be tested with all routes. Misconfiguration blocks the entire app.
- **Rate limiting** in serverless is per-instance. Distributed rate limiting needs Redis (not MVP critical).
