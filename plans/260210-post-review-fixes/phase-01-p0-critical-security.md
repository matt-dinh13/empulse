# Phase 1 — P0 Critical Security

> **Priority**: P0 — Must fix before any user-facing launch
> **Status**: Pending
> **Estimated Files**: 4

---

## Context

Code review found 2 critical security vulnerabilities and 1 production exposure that could lead to data loss, unauthorized access, or financial harm.

---

## Task 1: Fix Race Conditions in Votes + Orders

### Problem
Balance/quota checks happen OUTSIDE the `$transaction` block. Concurrent requests can bypass limits.

**Votes** (`src/app/api/votes/route.ts:209-212`):
```typescript
// VULNERABLE: Check is outside transaction
if (quotaWallet.balance < 1) {
    return NextResponse.json({ error: 'No votes remaining' }, { status: 400 })
}
// ... gap where concurrent request can pass ...
await prisma.$transaction(async (tx) => {
    await tx.quotaWallet.update({ where: { userId }, data: { balance: { decrement: 1 } } })
```

**Orders** (`src/app/api/orders/route.ts:63-76`):
```typescript
// VULNERABLE: Check is outside transaction
if (rewardWallet.balance < catalogItem.pointsRequired) {
    return NextResponse.json({ error: 'Insufficient points' }, { status: 400 })
}
// ... gap ...
await prisma.$transaction(async (tx) => {
    await tx.rewardWallet.update({ ... data: { balance: { decrement: catalogItem.pointsRequired } } })
```

### Fix

Move ALL reads and checks inside the transaction. Use Prisma's interactive transaction with row-level reads.

**votes/route.ts** — Move the quota wallet fetch + check inside `$transaction`:
```typescript
const result = await prisma.$transaction(async (tx) => {
    // Read inside transaction
    const quotaWallet = await tx.quotaWallet.findUnique({ where: { userId } })
    if (!quotaWallet || quotaWallet.balance < 1) {
        throw new Error('NO_QUOTA')
    }

    // All existing operations stay inside tx...
    await tx.quotaWallet.update({ where: { userId }, data: { balance: { decrement: 1 } } })
    // ... rest of transaction
    return { vote, notification }
})
```

Wrap the `$transaction` call in try/catch, check for `'NO_QUOTA'` error message, return 400.

**orders/route.ts** — Same pattern: move wallet + catalog item reads inside transaction:
```typescript
const result = await prisma.$transaction(async (tx) => {
    const rewardWallet = await tx.rewardWallet.findUnique({ where: { userId } })
    const catalogItem = await tx.rewardCatalog.findUnique({ where: { id: catalogId } })

    if (!rewardWallet || !catalogItem || rewardWallet.balance < catalogItem.pointsRequired) {
        throw new Error('INSUFFICIENT_BALANCE')
    }

    await tx.rewardWallet.update({ ... data: { balance: { decrement: catalogItem.pointsRequired } } })
    // ... order creation inside tx
    return order
})
```

### Files to modify
- `src/app/api/votes/route.ts` — Lines 190-330 (restructure POST handler)
- `src/app/api/orders/route.ts` — Lines 50-107 (restructure POST handler)

### Validation
- Concurrent request test: Use two simultaneous POST requests with 1 remaining quota — only one should succeed
- Existing smoke tests should still pass

---

## Task 2: Block Role Escalation in Registration

### Problem
`src/app/api/auth/register/route.ts:66` accepts `role` from request body:
```typescript
const { email, password, fullName, regionId, teamId, role } = await request.json()
// ...
role: role || 'employee',  // User can set role to 'super_admin'
```

### Fix
Remove `role` from destructured body. Hardcode `'employee'`:
```typescript
const { email, password, fullName, regionId, teamId } = await request.json()
// Do NOT accept role from user input
// ...
role: 'employee',  // Always employee on self-registration
```

### Files to modify
- `src/app/api/auth/register/route.ts` — Line 9 and line 66

### Validation
- POST `/api/auth/register` with `{ role: 'super_admin' }` in body — should create user with `role: 'employee'`

---

## Task 3: Remove Debug Endpoints and UI

### Problem
1. Dashboard shows "Debug Tools" section with "Enable Admin Mode" and "Seed Data" buttons to ALL users (`src/app/dashboard/page.tsx:222-266`)
2. Debug API endpoints (`/api/debug/promote`, `/api/debug/seed`) may exist in production

### Fix

**Option A (Recommended)**: Remove the debug section entirely from `dashboard/page.tsx`. Delete lines 215-259 (the entire debug card).

**Option B**: Gate behind `ENABLE_DEBUG_ENDPOINTS` env var:
```typescript
{process.env.NEXT_PUBLIC_ENABLE_DEBUG === 'true' && (
    // debug section
)}
```

Option A is simpler and safer. Debug endpoints should also be deleted or gated server-side.

### Files to modify
- `src/app/dashboard/page.tsx` — Delete lines 215-259 (debug card)
- Check for and delete `src/app/api/debug/` directory if it exists

### Validation
- Dashboard page loads without debug section
- `/api/debug/promote` returns 404
- Build succeeds

---

## Success Criteria

- [ ] No balance/quota checks outside transactions
- [ ] Registration always creates `role: 'employee'`
- [ ] No debug UI or endpoints accessible
- [ ] Build passes
- [ ] 27/27 smoke tests pass
