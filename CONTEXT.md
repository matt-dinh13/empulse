# EmPulse - P2P Reward & Recognition System

> **Context Document for AI Assistants**  
> **Last Updated**: 2026-02-03  
> **Status**: MVP Refined, Deployment Ready

---

## Project Overview

**EmPulse** là hệ thống P2P Reward & Recognition cho nhân viên cross-border (Vietnam & Czech Republic), nơi peer-to-peer "votes" được chuyển đổi thành real-world rewards.

### Target Users
- **Employees**: Vote appreciate đồng nghiệp, redeem rewards
- **HR Admin**: Manage catalog, approve orders (CZ), upload vouchers (VN)
- **Super Admin**: System configuration, reports

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
| Self-vote | ❌ Blocked |
| Direct manager vote | ❌ Blocked |
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

- **Channel**: Email only (MVP)
- **Warning Emails**: 14, 7, 3, 2, 1 days before quarterly reset
- **Low Stock Alert**: When stock < threshold (default 10)

### 6. Tax & Compliance

- **Policy**: Net-to-User (company covers PIT/gross-up)
- **Report**: Monthly gross-up tax report for HR/Accounting

---

## Tech Stack (Updated - Next.js Migration)

| Layer | Technology | Notes |
|-------|------------|-------|
| **Frontend** | Next.js 16 (App Router) | Full-stack React framework |
| **Backend** | Next.js API Routes | Replaced Express |
| **Database** | PostgreSQL | Hosted on **Supabase** (Transaction Pooler) |
| **ORM** | Prisma | Type-safe, migrations |
| **Auth** | JWT + bcryptjs | Standalone (POC) |
| **Email** | Resend / Nodemailer | Free tier |
| **Jobs** | Vercel Cron (planned) | Scheduled tasks |
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
- `vote_tracking` - Per user-pair monthly limits
- `weekly_vote_tracking` - Weekly limits

**Redemption:**
- `reward_catalog` - Available rewards per region
- `voucher_stock` - Digital voucher codes (VN)
- `physical_inventory` - Physical stock counts (CZ)
- `redemption_orders` - Order records with state machine

**System:**
- `system_settings` - Configurable parameters
- `notification_log` - Sent notifications tracking
- `audit_log` - Immutable action history
- `scheduled_job_log` - Cron job execution logs

---

## API Endpoints Summary

### Modules (30+ endpoints)

1. **Auth**: `/api/auth/*` - Register, login, logout, refresh
2. **Votes**: `/api/votes/*` - Submit, list sent/received, stats
3. **Wallets**: `/api/wallets/*` - Quota, reward, history
4. **Redemption**: `/api/catalog/*`, `/api/orders/*` - Browse, redeem
5. **Admin Users**: `/api/admin/users/*`, `/api/admin/teams/*`
6. **Admin Catalog**: `/api/admin/catalog/*`, `/api/admin/vouchers/*`
7. **Admin Orders**: `/api/admin/orders/*` - Approve, reject, complete
8. **Admin Settings**: `/api/admin/settings/*`, `/api/admin/reports/*`

---

## Scheduled Jobs

| Job | Schedule | Description |
|-----|----------|-------------|
| `quota_reset` | 1st of month, 00:00 UTC | Reset quota wallets |
| `quarterly_reset` | Last day of Q, 23:59 UTC | Reset reward wallets |
| `quarterly_warning` | Daily 9AM UTC | Send warning emails |
| `fifo_processor` | Every 5 mins | Process backorder queue |
| `sla_checker` | Daily 9AM UTC | Alert pending CZ orders |
| `expired_voucher_cleanup` | Daily 1AM UTC | Mark expired vouchers |

---

## Key Decisions Made

1. ✅ Quota reset: Complete reset to 0 (no rollover)
2. ✅ Timezone: UTC for all scheduled jobs
3. ✅ Voting anonymity: Public (receiver sees sender name + message)
4. ✅ Leaderboard: No (avoid unhealthy competition)
5. ✅ Org structure: Lightweight (team_id + manager_id only)
6. ✅ CZ shipping: Simple flow (no detailed tracking)
7. ✅ Auth: Standalone for POC (future: Azure SSO)

---

## Anti-Gaming Measures

1. ✅ Self-vote blocked at DB level
2. ✅ Manager vote blocked
3. ✅ Weekly limit (2 votes/week)
4. ✅ Same-person limit (2/month + cooldown)
5. ✅ Same-team limit (50%)
6. ✅ Minimum message length (20 chars)
7. ✅ Reciprocal vote flagging (for HR review)
8. ✅ Full audit logging

---

## Project Structure (Recommended)

```
EmPulse/
├── CONTEXT.md              # This file - AI context
├── README.md               # Project readme
├── vercel.json             # Vercel deployment config
├── VERCEL_ENV_SETUP.txt    # Env setup notes
│
├── empulse-next/           # Next.js full-stack app (source of truth)
│   ├── prisma/             # Schema + seed
│   ├── src/                # App Router pages + API routes
│   └── package.json
│
└── _archived/              # Legacy Express/Vite stacks (reference only)
    ├── backend/
    └── frontend/
```

---

## Next Steps

### Phase 1: Project Setup
- [ ] Initialize backend (Express + Prisma)
- [ ] Initialize frontend (Vite + React)
- [ ] Setup Supabase project
- [ ] Configure environment variables

### Phase 2: Core Implementation
- [ ] Database migrations
- [ ] Auth system
- [ ] Voting API + validation
- [ ] Wallet management
- [ ] Redemption flow

### Phase 3: Admin Features
- [ ] User management
- [ ] Catalog management
- [ ] Voucher upload
- [ ] Order approval (CZ)

### Phase 4: Polish & Deploy
- [x] Email notifications (configured)
- [x] Scheduled jobs (implemented)
- [x] Frontend UI (Landing page refined)
- [x] Testing (E2E passed)
- [x] Deployment Config (Vercel)

---

## Important Links

- **Supabase**: https://supabase.com (database)
- **Prisma**: https://prisma.io (ORM)
- **Resend**: https://resend.com (email)

---

## Notes for AI Assistants

1. **Language**: Vietnamese preferred, English for technical terms
2. **User Profile**: Senior IT BA, ADHD, INFJ - break tasks into small steps
3. **Focus**: MVP first, avoid over-engineering
4. **Output Format**: Use Mermaid diagrams, tables, bullet points
5. **Database**: Always use PostgreSQL syntax
6. **Implementation Plan**: See `.gemini/antigravity/brain/*/implementation_plan.md`

---

*This context file should be updated as the project evolves.*
