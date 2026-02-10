# Phase 2: Core Business Logic - Scheduled Jobs

**Priority:** P0 - Critical (business logic breaks without these)
**Status:** Pending
**Depends on:** Phase 1 (middleware must be in place for cron endpoint auth)

## Overview

Implement all 6 scheduled jobs defined in CONTEXT.md. Without these, quota never resets, points never expire, FIFO queue never processes, and SLA never gets checked.

---

## 2.1 Cron Infrastructure Setup

**Approach:** Vercel Cron Jobs via `vercel.json` + API route handlers

### Create: `vercel.json` (project root)
```json
{
  "crons": [
    { "path": "/api/cron/quota-reset", "schedule": "0 0 1 * *" },
    { "path": "/api/cron/quarterly-reset", "schedule": "0 23 28-31 3,6,9,12 *" },
    { "path": "/api/cron/quarterly-warning", "schedule": "0 9 * * *" },
    { "path": "/api/cron/fifo-processor", "schedule": "*/5 * * * *" },
    { "path": "/api/cron/sla-checker", "schedule": "0 9 * * *" },
    { "path": "/api/cron/voucher-cleanup", "schedule": "0 1 * * *" }
  ]
}
```

### Security:
- All cron endpoints verify `Authorization: Bearer <CRON_SECRET>` header
- Vercel automatically sends this for cron invocations
- Add `CRON_SECRET` env var in Vercel dashboard

### Shared utility: `src/lib/cron.ts`
```typescript
export function verifyCronAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  return authHeader === `Bearer ${process.env.CRON_SECRET}`
}

export async function logJobExecution(jobName, status, recordsProcessed?, error?) {
  // Insert into scheduled_job_log table
}
```

### Update middleware:
- Exempt `/api/cron/*` from user auth (they use CRON_SECRET instead)

---

## 2.2 Quota Reset (Monthly)

**Schedule:** 1st of month, 00:00 UTC
**File:** `src/app/api/cron/quota-reset/route.ts`

**Logic:**
1. Verify cron auth
2. Get `quota_per_month` from system_settings (default 8)
3. Calculate new period boundaries (1st to last day of current month)
4. `UPDATE quota_wallets SET balance = {quota}, period_start = {start}, period_end = {end}`
5. Clear `weekly_vote_tracking` for previous month's weeks
6. Clear `vote_tracking` for previous month
7. Log to `scheduled_job_log`

---

## 2.3 Quarterly Reset

**Schedule:** Last day of quarter, 23:59 UTC
**File:** `src/app/api/cron/quarterly-reset/route.ts`

**Logic:**
1. Verify cron auth
2. Get all reward_wallets with balance > 0
3. Log expiring balances to audit_log (for HR reporting)
4. `UPDATE reward_wallets SET balance = 0, quarter_start = {new}, quarter_end = {new}`
5. Cancel any PENDING_APPROVAL orders (refund not needed since wallet is reset)
6. Log to `scheduled_job_log`

**Edge case:** The cron schedule `0 23 28-31 3,6,9,12 *` fires on March 28-31, June 28-31, etc. Add logic to check if today is actually the last day of the quarter.

---

## 2.4 Quarterly Warning Emails

**Schedule:** Daily 9AM UTC
**File:** `src/app/api/cron/quarterly-warning/route.ts`

**Dependencies:** Email service must be configured (see below)

**Logic:**
1. Calculate days until quarter end
2. If days in [14, 7, 3, 2, 1]:
   - Query all users with reward_wallet balance > min_points_to_redeem
   - Send warning email: "Your {balance} points expire in {days} days. Redeem now!"
   - Log to notification_log

### Email Service Setup

**Install:** `resend` package

**Create:** `src/lib/email.ts`
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(to, subject, html) {
  // Send via Resend
  // Log to notification_log
}
```

**Env vars needed:**
- `RESEND_API_KEY`
- `EMAIL_FROM` (e.g., `noreply@empulse.embedit.com`)

---

## 2.5 FIFO Processor

**Schedule:** Every 5 minutes
**File:** `src/app/api/cron/fifo-processor/route.ts`

**Logic:**
1. Query redemption_orders WHERE status = 'PROCESSING' ORDER BY queue_position ASC
2. For each order:
   - Check if voucher_stock has `status = 'available'` for that catalog item
   - If available: assign voucher, update order to COMPLETED, send email
   - If not: skip (stays in queue)
3. Log processed count to scheduled_job_log

---

## 2.6 SLA Checker

**Schedule:** Daily 9AM UTC
**File:** `src/app/api/cron/sla-checker/route.ts`

**Logic:**
1. Query CZ region orders WHERE status = 'APPROVED' AND expected_date < NOW()
2. For each overdue order: send alert email to HR admins of CZ region
3. Query orders WHERE status = 'PENDING_APPROVAL' AND created_at < (NOW - 7 days)
4. Alert HR admins about stale pending orders
5. Log to scheduled_job_log

---

## 2.7 Voucher Cleanup

**Schedule:** Daily 1AM UTC
**File:** `src/app/api/cron/voucher-cleanup/route.ts`

**Logic:**
1. Query voucher_stock WHERE expiry_date < NOW() AND status = 'available'
2. Update status to 'expired'
3. If any catalog items now have 0 available vouchers, send low-stock alert to VN HR admins
4. Log to scheduled_job_log

---

## Files to Create

- `vercel.json`
- `src/lib/cron.ts`
- `src/lib/email.ts`
- `src/app/api/cron/quota-reset/route.ts`
- `src/app/api/cron/quarterly-reset/route.ts`
- `src/app/api/cron/quarterly-warning/route.ts`
- `src/app/api/cron/fifo-processor/route.ts`
- `src/app/api/cron/sla-checker/route.ts`
- `src/app/api/cron/voucher-cleanup/route.ts`

## Files to Modify

- `src/middleware.ts` (exempt /api/cron/* from user auth)
- `package.json` (add `resend`)

## Todo

- [ ] Install `resend` package
- [ ] Create `vercel.json` with cron schedules
- [ ] Create `src/lib/cron.ts` (auth + logging helpers)
- [ ] Create `src/lib/email.ts` (Resend wrapper)
- [ ] Implement quota-reset cron
- [ ] Implement quarterly-reset cron
- [ ] Implement quarterly-warning cron
- [ ] Implement fifo-processor cron
- [ ] Implement sla-checker cron
- [ ] Implement voucher-cleanup cron
- [ ] Create email templates (plain HTML)
- [ ] Test each job locally with manual trigger
- [ ] Add CRON_SECRET and RESEND_API_KEY to Vercel env

## Risk Assessment

- **Quarterly reset schedule** is tricky. The cron pattern fires multiple days. Must add "is this actually the last day of the quarter" check.
- **FIFO processor** at 5-min intervals on Vercel free tier may hit invocation limits. Monitor usage.
- **Email deliverability** - use verified domain for from address.
