# EmPulse - P2P Reward & Recognition System

> **Context Document for AI Assistants**
> **Last Updated**: 2026-02-10
> **Status**: Production-Ready, Next.js Single App

---

## Project Overview

**EmPulse** là hệ thống P2P Reward & Recognition cho nhân viên cross-border (Vietnam & Czech Republic), nơi peer-to-peer "votes" được chuyển đổi thành real-world rewards.

### Target Users
- **Employees**: Vote appreciate đồng nghiệp, redeem rewards
- **HR Admin**: Manage catalog, approve orders (CZ), upload vouchers (VN)
- **Super Admin**: System configuration, reports
- **Legacy Admin**: Treated as Super Admin for backward compatibility

---

## Core Business Logic

### 1. Wallet System (Unidirectional Flow)

| Wallet | Purpose | Reset |
|--------|---------|-------|
| **Quota Wallet** | Votes để CHO người khác | Monthly (1st of month, 00:00 UTC) |
| **Reward Wallet** | Points NHẬN từ người khác | Quarterly (last day, 23:59 UTC) |

**Conversion**: 1 Vote received = 10 Points

### 2. Voting Rules

| Rule | Value |
|------|-------|
| Monthly quota | 8 votes (configurable) |
| Weekly limit | Max 2 votes/week |
| Per-person limit | Max 2 votes/person/month |
| Cooldown | 2 weeks after reaching max to same person |
| Same-team limit | Max 50% of monthly quota |
| Self-vote | Blocked |
| Direct manager vote | Blocked |
| Message | Required, min 20 characters |
| Reciprocal detection | Flag for HR (không block) |

### 3. Redemption - VN Region (Automated)

**Tiered System:**
- 50 points → 100,000 VND
- 100 points → 200,000 VND
- 200 points → 500,000 VND (bonus incentive)

**Flow:**
- Stock available → Auto-assign voucher → COMPLETED
- Out of stock → FIFO Queue → PROCESSING → Auto-fulfill when restocked

### 4. Redemption - CZ Region (Manual)

**Items**: Physical goods (hoodies, merch) + E-vouchers

**Flow:**
```
PENDING_APPROVAL → HR Approve → APPROVED → Deliver → COMPLETED
                → HR Reject → CANCELLED (points refunded)
```

HR sets expected delivery date when approving.

### 5. Notifications

- **In-App**: Real-time notification panel with unread badge (sidebar)
- **Email**: Via Resend (vote received, order updates)
- **Slack**: Incoming webhook for vote notifications (configurable via `SLACK_WEBHOOK_URL`)
- **Warning Emails**: 14, 7, 3, 2, 1 days before quarterly reset
- **Low Stock Alert**: When stock < threshold (default 10)

### 6. Tax & Compliance

- **Policy**: Net-to-User (company covers PIT/gross-up)
- **Report**: Monthly gross-up tax report for HR/Accounting

---

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Frontend** | Next.js 16 (App Router) | Full-stack React framework |
| **Backend** | Next.js API Routes | Server-side logic |
| **Database** | PostgreSQL | Hosted on **Supabase** (Transaction Pooler) |
| **ORM** | Prisma | Type-safe, migrations |
| **Auth** | JWT (httpOnly cookies) | bcryptjs, middleware-protected routes |
| **Validation** | Zod | Schema-based API input validation |
| **Email** | Resend | Transactional emails |
| **Jobs** | Vercel Cron | Quota reset, quarterly reset, FIFO, SLA, warnings |
| **Caching** | In-memory (TTL) | Analytics, leaderboard, catalog |
| **Rate Limiting** | In-memory token bucket | Login, votes, API endpoints |
| **Slack** | Incoming Webhook | Vote notifications (fire-and-forget) |
| **Deployment** | Vercel | Single Next.js app |

---

## Design System

### Theme Colors (Brand)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#006ED2` | Primary blue (brand) |
| `--color-accent` | `#00D264` | Green - CTAs, success |
| `--color-black` | `#000000` | Dark backgrounds, main text |
| `--color-white` | `#FFFFFF` | Light backgrounds |
| `--color-accent-hover` | `#00B856` | Hover states |
| `--color-background` | `#F4F6F8` | Dashboard background |
| `--color-surface` | `#FFFFFF` | Cards, containers |
| `--color-text` | `#1A1A1A` | Primary text |
| `--color-text-muted` | `#64748B` | Secondary text |
| `--color-error` | `#EF4444` | Error states |
| `--color-warning` | `#F59E0B` | Warning states |

### Logo
- **Location**: `/public/logo.svg`
- **Usage**: Dark background version for landing/login, auto for dashboard

---

## Database Schema Summary

### Core Tables (15+ tables)

**User Management:**
- `regions` - VN/CZ configuration
- `teams` - Department/team structure
- `users` - Employee accounts with team/manager relationships

**Wallet System:**
- `quota_wallets` - Monthly voting quota
- `reward_wallets` - Accumulated points

**Voting:**
- `votes` - Vote transactions with messages
- `vote_value_tags` - Value tag associations per vote
- `value_tags` - Company value tags (configurable)
- `vote_tracking` - Per user-pair monthly limits
- `weekly_vote_tracking` - Weekly limits

**Redemption:**
- `reward_catalog` - Available rewards per region
- `voucher_stock` - Digital voucher codes (VN)
- `physical_inventory` - Physical stock counts (CZ)
- `redemption_orders` - Order records with state machine

**Notifications:**
- `in_app_notifications` - In-app notification records with read/unread state
- `notification_log` - Sent email notifications tracking

**System:**
- `system_settings` - Configurable parameters
- `audit_log` - Immutable action history (includes reciprocal vote flagging)
- `scheduled_job_log` - Cron job execution logs

---

## API Endpoints Summary

### Auth & User
- `POST /api/auth/login` - Login (sets httpOnly cookie)
- `POST /api/auth/register` - Registration
- `GET /api/auth/me` - Current user profile
- `POST /api/auth/logout` - Logout (clears cookie)

### Employee Features
- `GET/POST /api/votes` - List votes / send vote
- `GET /api/wallets` - Quota + reward balances
- `GET /api/catalog` - Browse rewards
- `GET/POST /api/orders` - List / place orders
- `GET /api/users` - User list (for vote recipient search)
- `GET /api/leaderboard` - Top vote receivers
- `GET /api/feed` - Recognition feed
- `GET /api/notifications` - In-app notifications
- `GET /api/notifications/count` - Unread count
- `PATCH /api/notifications/[id]/read` - Mark as read

### Manager Features
- `GET /api/manager/team` - Team members, stats, and feed

### Admin Features
- `GET/POST /api/admin/users` - User management
- `GET/POST /api/admin/teams` - Team management
- `GET/POST /api/admin/catalog` - Catalog CRUD
- `GET /api/admin/orders` - Order management
- `POST /api/admin/orders/[id]/approve|reject|complete` - Order actions
- `GET/PUT /api/admin/settings` - System settings
- `GET /api/admin/analytics/dashboard` - Analytics dashboard (cached)
- `GET /api/admin/export/[type]` - CSV export (votes, redemptions, engagement)
- `GET /api/admin/flagged-votes` - Reciprocal vote flags

### System
- `GET /api/health` - Health check
- `GET /api/cron/quota-reset` - Monthly quota reset
- `GET /api/cron/quarterly-reset` - Quarterly reward reset
- `GET /api/cron/quarterly-warning` - Expiry warning emails
- `GET /api/cron/fifo-processor` - FIFO queue processor
- `GET /api/cron/sla-checker` - SLA breach alerts
- `GET /api/cron/expired-voucher-cleanup` - Expired voucher cleanup

---

## Scheduled Jobs (Implemented)

| Job | Schedule | Endpoint |
|-----|----------|----------|
| `quota_reset` | 1st of month, 00:00 UTC | `/api/cron/quota-reset` |
| `quarterly_reset` | Last day of Q, 23:59 UTC | `/api/cron/quarterly-reset` |
| `quarterly_warning` | Daily 9AM UTC | `/api/cron/quarterly-warning` |
| `fifo_processor` | Every 5 mins | `/api/cron/fifo-processor` |
| `sla_checker` | Daily 9AM UTC | `/api/cron/sla-checker` |
| `expired_voucher_cleanup` | Daily 1AM UTC | `/api/cron/expired-voucher-cleanup` |

All cron endpoints are protected by `CRON_SECRET` authorization header.

---

## Key Decisions Made

1. Quota reset: Complete reset to 0 (no rollover)
2. Timezone: UTC for all scheduled jobs
3. Voting anonymity: Public (receiver sees sender name + message)
4. Leaderboard: Enabled (can be disabled later)
5. Org structure: Lightweight (team_id + manager_id only)
6. CZ shipping: Simple flow (no detailed tracking)
7. Auth: JWT with httpOnly cookies (future: Azure SSO)
8. Legacy role: `admin` treated as `super_admin` for backward compatibility
9. Validation: Zod schemas for all API inputs
10. Email: Resend free tier (covers 50-200 users)
11. Cron: Vercel Cron Jobs with CRON_SECRET auth

---

## Security Features (Implemented)

1. **httpOnly cookies** for JWT tokens (no localStorage)
2. **Next.js middleware** for route protection
3. **Zod validation** on all API inputs
4. **Rate limiting** (login: 5/15min, votes: 10/min, API: 100/15min)
5. **CRON_SECRET** for scheduled job endpoints
6. **Debug endpoints removed** from production
7. **Input sanitization** (XSS prevention)
8. **CORS** restricted to known origins

## Anti-Gaming Measures

1. Self-vote blocked at DB level
2. Manager vote blocked
3. Weekly limit (2 votes/week)
4. Same-person limit (2/month + cooldown)
5. Same-team limit (50%)
6. Minimum message length (20 chars)
7. Reciprocal vote flagging (for HR review, admin UI available)
8. Full audit logging

---

## UX Features (Implemented)

1. **Toast notifications** (success/error/info) replacing alerts
2. **Skeleton loading** screens for all routes
3. **Error boundaries** (global, dashboard, admin)
4. **404 page** (branded not-found)
5. **Mobile responsive** sidebar (hamburger menu on < 768px)
6. **PWA manifest** (standalone mode, installable)
7. **Confirmation modals** for destructive actions (catalog redemption)
8. **CSV export** (votes, redemptions, engagement data)

---

## Project Structure

```
EmPulse/
├── CONTEXT.md              # This file - AI context
├── README.md               # Project readme
├── auditlog.md             # Development audit log
├── plans/                  # Implementation plans
│
├── empulse-next/           # Next.js full-stack app (source of truth)
│   ├── prisma/             # Schema + seed
│   ├── public/             # Static assets + manifest.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/        # API routes (auth, votes, admin, cron, etc.)
│   │   │   ├── dashboard/  # Employee dashboard pages
│   │   │   │   ├── admin/  # Admin portal (analytics, users, orders, catalog, settings, flagged-votes)
│   │   │   │   ├── my-team/ # Manager team view
│   │   │   │   └── ...    # votes, catalog, orders, leaderboard, notifications
│   │   │   ├── login/
│   │   │   ├── page.tsx    # Landing page
│   │   │   ├── layout.tsx  # Root layout (Providers, manifest, fonts)
│   │   │   └── globals.css # Design system + responsive styles
│   │   ├── components/     # Sidebar, Toast, Providers
│   │   └── lib/            # prisma, auth, validations, rateLimit, slack, etc.
│   ├── vercel.json         # Cron job configuration
│   └── package.json
│
├── _archived/              # Legacy Express/Vite stacks (reference only)
└── _trash/                 # Moved redundant root artifacts
```

---

## Production Readiness (Completed 2026-02-10)

All 6 phases of the production readiness plan have been implemented:

| Phase | Focus | Commit |
|-------|-------|--------|
| 1 | Security & Stability (httpOnly cookies, middleware, Zod, rate limiting) | `0f1f895` |
| 2 | Core Business Logic (6 Vercel cron jobs) | `c5d7f15` |
| 3 | Engagement Features (feed, notifications, email, value tags) | `af208b7` |
| 4 | UX Polish (toast, skeletons, error boundaries, 404) | `0e91694` |
| 5 | Analytics & Reporting (dashboard, CSV export, manager team view) | `656aebb` |
| 6 | Integrations (Slack webhook, PWA, mobile sidebar, flagged votes) | `9561614` |

---

## Notes for AI Assistants

1. **Language**: Vietnamese preferred, English for technical terms
2. **User Profile**: Senior IT BA, ADHD, INFJ - break tasks into small steps
3. **Focus**: Production-ready, avoid over-engineering
4. **Output Format**: Use Mermaid diagrams, tables, bullet points
5. **Database**: Always use PostgreSQL syntax
6. **Active Codebase**: `empulse-next/` only (legacy stacks archived)

---

*This context file should be updated as the project evolves.*
