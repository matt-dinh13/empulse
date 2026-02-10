# EmPulse Operational Blueprint

> **Last Updated**: 2026-02-10
> **Status**: Production-Ready
> **Primary Reference**: See [CONTEXT.md](./CONTEXT.md) for full system documentation

---

## System Overview

EmPulse is a P2P employee recognition & reward platform for 50-200 employees across Vietnam and Czech Republic. Employees send votes with messages, earn points, and redeem real rewards (digital vouchers in VN, physical items in CZ).

**Stack**: Next.js 16 (App Router) + Prisma + PostgreSQL (Supabase) + Vercel

---

## Quick Start (Local Development)

```bash
cd empulse-next
npm install
npm run dev          # Starts at http://localhost:3000
```

### Database Setup
```bash
npx prisma generate          # Generate Prisma client
npx prisma db push            # Push schema to database
npx prisma db seed             # Seed demo data
```

### Demo Accounts (Seeded)

| Role | Email | Password |
|------|-------|----------|
| Super Admin | admin@empulse.com | password123 |
| HR Admin (VN) | hr.vn@empulse.com | password123 |
| HR Admin (CZ) | hr.cz@empulse.com | password123 |
| Employee (VN) | nguyen.van.a@empulse.com | password123 |
| Employee (CZ) | jan.novak@empulse.com | password123 |
| HR Admin | hr.admin@empulse.com | password123 |

---

## Environment Variables

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string (session pooler) | `postgresql://...` |
| `DIRECT_URL` | Direct PostgreSQL connection (for migrations) | `postgresql://...` |
| `JWT_SECRET` | Secret for JWT signing (min 32 chars) | `your-secure-random-string` |
| `CRON_SECRET` | Auth token for Vercel cron endpoints | `your-cron-secret` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend email service API key | *(emails disabled if not set)* |
| `EMAIL_FROM` | Sender email address | `noreply@empulse.embedit.com` |
| `SLACK_WEBHOOK_URL` | Slack incoming webhook for vote notifications | *(Slack disabled if not set)* |
| `ENABLE_DEBUG_ENDPOINTS` | Enable debug API routes (set to `true`) | `false` |
| `NODE_ENV` | Runtime environment | `development` |

### Production Requirements
- `JWT_SECRET` must be set (app throws error if using fallback in production)
- `CRON_SECRET` must be set for cron job authentication
- `DATABASE_URL` should use Supabase session pooler (port 5432), NOT transaction pooler (port 6543) — Prisma interactive transactions require session mode

---

## Deployment (Vercel)

### Initial Setup
1. Connect `matt-dinh13/empulse` repo to Vercel
2. Set root directory to `empulse-next`
3. Add all required environment variables in Vercel project settings
4. Deploy

### Cron Jobs (Vercel Cron)

Configured in `empulse-next/vercel.json`. All endpoints require `Authorization: Bearer <CRON_SECRET>`.

| Job | Schedule | Endpoint | Description |
|-----|----------|----------|-------------|
| Quota Reset | `0 0 1 * *` | `/api/cron/quota-reset` | Reset monthly voting quotas |
| Quarterly Reset | `0 23 28-31 3,6,9,12 *` | `/api/cron/quarterly-reset` | Reset reward wallets end of quarter |
| Quarterly Warning | `0 9 * * *` | `/api/cron/quarterly-warning` | Email warnings before expiry |
| FIFO Processor | `*/5 * * * *` | `/api/cron/fifo-processor` | Process backorder queue |
| SLA Checker | `0 9 * * *` | `/api/cron/sla-checker` | Alert on overdue CZ orders |
| Voucher Cleanup | `0 1 * * *` | `/api/cron/voucher-cleanup` | Mark expired vouchers |

### Manual Cron Trigger (for testing)
```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" https://your-app.vercel.app/api/cron/quota-reset
```

---

## Key Operational Procedures

### Adding New Users
1. Admin Portal → Users & Teams → use the admin UI
2. Or bulk via `prisma/seed.js` for initial setup

### Managing Rewards Catalog
- **VN (Digital Vouchers)**: Admin Portal → Reward Catalog → Add items with `digital_voucher` type. Upload voucher codes via the catalog management UI.
- **CZ (Physical Items)**: Admin Portal → Reward Catalog → Add items with `physical_item` type. Set stock quantities.

### Order Approval Flow (CZ)
1. Employee redeems item → status: `PENDING_APPROVAL`
2. HR Admin → Admin Portal → Order Approvals → Approve/Reject
3. Approved orders → status: `APPROVED` → mark `COMPLETED` after delivery
4. Rejected orders → points automatically refunded

### Reviewing Flagged Votes
- Admin Portal → Flagged Votes
- Shows reciprocal voting patterns (A votes B, B votes A in same month)
- Review and investigate as needed

### CSV Data Export
- Admin Portal → Analytics → Export buttons
- Available exports: Votes, Redemptions, Engagement
- Supports date range filtering via query parameters

---

## Smoke Test Checklist

After deployment or major changes, verify:

1. **Landing page** loads at `/` with all sections
2. **Login** works with demo accounts
3. **Employee flow**:
   - Dashboard shows wallets and recognition feed
   - Send Vote form works (select user, message, value tags)
   - Votes Received/Sent pages load with data
   - Leaderboard shows rankings
   - Catalog loads and redemption modal works
   - My Orders shows order history
   - Notifications panel shows unread count
   - Settings page allows email preference toggle
4. **Manager flow**:
   - My Team page loads (only for users with subordinates)
5. **Admin flow**:
   - Analytics dashboard loads with stats, charts, regional breakdown
   - Users & Teams management works
   - Order Approvals shows pending orders
   - Reward Catalog CRUD works
   - Flagged Votes page loads
   - System Settings loads (super_admin only)
   - CSV exports download correctly
6. **Mobile**: Hamburger menu opens/closes sidebar on small screens
7. **Health check**: `GET /api/health` returns 200

---

## Architecture Quick Reference

```
empulse-next/
├── prisma/schema.prisma          # Database schema (source of truth)
├── vercel.json                   # Cron job configuration
├── public/manifest.json          # PWA manifest
├── public/sw.js                  # Service worker (offline caching)
├── src/
│   ├── middleware.ts              # Route protection (JWT from cookies)
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/             # Login, register, me, logout
│   │   │   ├── votes/            # Send/list votes
│   │   │   ├── feed/             # Recognition feed
│   │   │   ├── notifications/    # In-app notifications
│   │   │   ├── user/preferences/ # Email notification preferences
│   │   │   ├── manager/team/     # Manager team view
│   │   │   ├── admin/            # Admin APIs (analytics, users, orders, catalog, settings, flagged-votes, export)
│   │   │   └── cron/             # 6 scheduled job endpoints
│   │   ├── dashboard/            # Employee pages (+ settings for email preferences)
│   │   │   ├── admin/            # Admin portal (nested layout with own sidebar)
│   │   │   └── my-team/          # Manager team page
│   │   └── login/                # Login page
│   ├── components/               # Sidebar, Toast, Providers
│   └── lib/                      # prisma, auth, validations, rateLimit, email, slack, cron, logger, memoryCache
```

### Security Layers
1. **Middleware** (`middleware.ts`): Validates JWT from httpOnly cookies on all `/dashboard` and `/api` routes
2. **Rate Limiting** (`lib/rateLimit.ts`): Token bucket per endpoint (login: 5/15min, votes: 10/min)
3. **Zod Validation** (`lib/validations.ts`): Schema validation on all API inputs
4. **Cron Auth** (`lib/cron.ts`): Bearer token check for scheduled job endpoints

---

## Troubleshooting

### Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| 500 on all API routes | Missing `DATABASE_URL` | Set env var in Vercel |
| 500 on vote send | PgBouncer transaction mode (port 6543) | Use session pooler (port 5432) instead |
| Login returns 401 | JWT_SECRET mismatch between deploys | Ensure same `JWT_SECRET` across all environments |
| Cron jobs return 401 | Missing/wrong `CRON_SECRET` | Check Vercel env vars match `vercel.json` |
| Emails not sending | Missing `RESEND_API_KEY` | Add key from Resend dashboard |
| Slack notifications silent | Missing `SLACK_WEBHOOK_URL` | Optional — add webhook URL from Slack app |
| Prisma errors after schema change | Client out of sync | Run `npx prisma generate` then redeploy |

### Logs
- **Vercel**: Function logs in Vercel dashboard → Deployments → Functions tab
- **Structured logs**: All API errors log via `lib/logger.ts` with `userId`, `action`, and stack traces in development

---

## Services & Dependencies

| Service | Purpose | Dashboard |
|---------|---------|-----------|
| **Vercel** | Hosting + cron jobs | vercel.com |
| **Supabase** | PostgreSQL database | supabase.com |
| **Resend** | Transactional emails | resend.com |
| **Slack** | Vote notifications (optional) | Incoming webhook config |

---

*For full system documentation, business logic, and API reference, see [CONTEXT.md](./CONTEXT.md).*
*For development history, see [auditlog.md](./auditlog.md).*
