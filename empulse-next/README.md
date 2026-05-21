# EmPulse — P2P Reward & Recognition Platform

> **Status**: Production-Ready v2.0  
> **Production URL**: [empulse-delta.vercel.app](https://empulse-delta.vercel.app/)  
> **Target**: 50–200 employees across Vietnam & Czech Republic

---

## What is EmPulse?

EmPulse is a **Peer-to-Peer Employee Recognition & Reward System** designed for cross-border teams. Employees send recognition votes to their colleagues based on core company values. Votes are converted into **real-world rewards** — digital vouchers (VN) and physical items (CZ).

### Key Highlights
- 🎯 **Anti-gaming voting rules** — weekly limits, same-team caps, reciprocal detection, manager-vote blocking
- 💰 **Dual-wallet system** — Quota Wallet (votes to give) + Reward Wallet (points earned)
- 🛒 **Region-aware rewards** — automated voucher delivery (VN), manual approval flow (CZ)
- 📊 **Admin analytics** — dashboards, CSV exports, flagged vote review
- 🔔 **Multi-channel notifications** — in-app, email (Resend), Slack webhooks
- 📱 **PWA-ready** — installable, offline-capable with service worker

---

## Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Framework** | Next.js 16 | App Router, Server Actions, API Routes |
| **Language** | TypeScript | Full-stack type safety |
| **Database** | PostgreSQL | Hosted on Supabase (Session Pooler) |
| **ORM** | Prisma | Type-safe queries, migrations, seeding |
| **Auth** | JWT + httpOnly Cookies | bcryptjs, Edge middleware route protection |
| **Validation** | Zod | Schema-based API input validation |
| **Caching** | Upstash Redis | In-memory fallback for local dev |
| **Rate Limiting** | Token Bucket | Login: 5/15min, Votes: 10/min, API: 100/15min |
| **Email** | Resend | Branded HTML transactional emails |
| **Notifications** | Slack Webhooks | Real-time vote alerts (optional) |
| **Scheduled Jobs** | Vercel Cron | 6 automated jobs (quota reset, FIFO, SLA, etc.) |
| **Logging** | Structured JSON | `lib/logger.ts` with userId, action, stack traces |
| **Deployment** | Vercel | Edge/Serverless optimized |

---

## Core Features

### 👥 Role-Based Access Control (RBAC)

| Role | Capabilities |
|------|-------------|
| **Employee** | Send votes, redeem rewards, view leaderboard, manage notifications |
| **Manager** | Employee features + team view with subordinate stats |
| **HR Admin** | Manager features + catalog management, order approvals, CSV exports |
| **Super Admin** | Full access — system settings, analytics, user management |

### 🗳️ Voting System

- **Monthly quota**: 8 votes (configurable)
- **Weekly limit**: Max 2 votes/week
- **Per-person limit**: Max 2 votes/person/month with cooldown
- **Same-team cap**: Max 50% of monthly quota
- **Self-vote & manager-vote**: Blocked
- **Reciprocal detection**: Flagged for HR review
- **Message**: Required, min 20 characters

### 🎁 Redemption

| Region | Type | Flow |
|--------|------|------|
| **Vietnam** | Digital Vouchers | Auto-assign on order → COMPLETED (FIFO queue if out of stock) |
| **Czech Republic** | Physical Items | PENDING → HR Approve → APPROVED → Deliver → COMPLETED |

**Point Conversion**: 1 Vote received = 10 Points

### 📈 Analytics & Reporting

- Real-time admin dashboard with regional breakdown
- Leaderboard with podium view (gold/silver/bronze)
- CSV exports: votes, redemptions, engagement data
- Reciprocal vote flagging for anti-gaming review

---

## UI Component Library

Custom-built reusable components in `src/components/ui/`:

| Component | Description |
|-----------|-------------|
| `Card` | 4 variants: default, glass, elevated, interactive |
| `Badge` | 6 variants: default, success, warning, error, info, accent |
| `Avatar` | Image + colored initials fallback + status dot |
| `StatCard` | Gradient stat with label, value, trend, icon |
| `ProgressRing` | SVG circular progress (animated) |
| `Modal` | Animated backdrop blur, keyboard dismiss, focus trap |
| `EmptyState` | Animated icon, title, description, action CTA |
| `SearchInput` | Debounced search with icon |
| `PageTransition` | Loading skeleton wrapper with fade-in animation |

```tsx
import { Card, Badge, Avatar, StatCard } from '@/components/ui';
```

---

## Getting Started

### Prerequisites
- Node.js ≥ 20.x
- PostgreSQL database (or [Supabase](https://supabase.com) free tier)

### Local Development

```bash
cd empulse-next
npm install
```

**Configure environment** — copy `.env.example` to `.env` and fill in:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection (session pooler) |
| `DIRECT_URL` | ✅ | Direct PostgreSQL connection (migrations) |
| `JWT_SECRET` | ✅ | Min 32 chars for JWT signing |
| `CRON_SECRET` | ✅ | Auth token for cron endpoints |
| `RESEND_API_KEY` | ❌ | Email service (disabled if not set) |
| `SLACK_WEBHOOK_URL` | ❌ | Slack notifications (disabled if not set) |

**Set up database:**

```bash
npx prisma generate        # Generate Prisma client
npx prisma db push         # Push schema to database
npx prisma db seed         # Seed demo data
```

**Start dev server:**

```bash
npm run dev                # → http://localhost:3000
```

### Demo Accounts (After Seeding)

| Role | Email | Password |
|------|-------|----------|
| Super Admin | admin@empulse.com | password123 |
| HR Admin (VN) | hr.vn@empulse.com | password123 |
| HR Admin (CZ) | hr.cz@empulse.com | password123 |
| Employee (VN) | nguyen.van.a@empulse.com | password123 |
| Employee (CZ) | jan.novak@empulse.com | password123 |

---

## Project Structure

```
empulse-next/
├── prisma/
│   ├── schema.prisma          # Database schema (source of truth)
│   └── seed.js                # Demo data seeder
├── vercel.json                # Cron job configuration
├── public/                    # Static assets + PWA manifest + service worker
├── src/
│   ├── middleware.ts           # JWT route protection (Edge-compatible)
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # Login, register, me, logout
│   │   │   ├── votes/         # Send/list votes (→ voteService)
│   │   │   ├── feed/          # Recognition feed
│   │   │   ├── notifications/ # In-app notifications
│   │   │   ├── admin/         # Analytics, users, orders, catalog, settings
│   │   │   └── cron/          # 6 scheduled job endpoints
│   │   ├── dashboard/         # Employee pages
│   │   │   ├── admin/         # Admin portal (nested layout)
│   │   │   └── my-team/       # Manager team view
│   │   └── login/             # Login page
│   ├── components/
│   │   ├── ui/                # ⭐ Reusable component library (9 components)
│   │   ├── Sidebar.tsx        # Main navigation
│   │   └── Toast.tsx          # Toast notifications
│   └── lib/
│       ├── services/          # Business logic (voteService.ts)
│       ├── errors.ts          # AppError + ErrorCode enum
│       ├── prisma.ts          # Database client
│       ├── auth.ts            # JWT utilities
│       ├── validations.ts     # Zod schemas
│       ├── rateLimit.ts       # Token bucket rate limiter
│       ├── logger.ts          # Structured JSON logging
│       └── ...                # email, slack, cron utilities
```

---

## Deployment (Vercel)

1. Connect repo to Vercel
2. Set root directory to `empulse-next`
3. Add all required environment variables
4. Deploy

### Cron Jobs

Configured in `vercel.json` — all endpoints require `Authorization: Bearer <CRON_SECRET>`:

| Job | Schedule | Description |
|-----|----------|-------------|
| Quota Reset | 1st of month | Reset monthly voting quotas |
| Quarterly Reset | End of quarter | Reset reward wallets |
| Quarterly Warning | Daily 9AM | Email warnings before expiry |
| FIFO Processor | Every 5 min | Process backorder queue |
| SLA Checker | Daily 9AM | Alert on overdue CZ orders |
| Voucher Cleanup | Daily 1AM | Mark expired vouchers |

---

## Security

- **httpOnly cookies** — JWT tokens never exposed to JavaScript
- **Edge middleware** — route protection before request hits API
- **Zod validation** — schema-based input validation on all endpoints
- **Rate limiting** — token bucket per endpoint category
- **CRON_SECRET** — bearer token auth for scheduled jobs
- **Input sanitization** — XSS prevention
- **Audit logging** — immutable action history with reciprocal vote flagging

---

## Code Conventions

- **Thin controllers** — API routes delegate to `lib/services/`, no business logic in routes
- **Barrel exports** — UI components via `@/components/ui`
- **Typed errors** — all API errors use `AppError` from `lib/errors.ts`
- **Animation classes** — `.animate-slide-up`, `.animate-fade-in`, `.animate-scale-in` with `.stagger-N`

---

## Development History

| Version | Focus | Date |
|---------|-------|------|
| v1.0 | Production-ready (6 phases: security → integrations) | Feb 2026 |
| v2.0 | UI/UX overhaul — design system, component library, page redesigns | May 2026 |

> **Detailed logs**: See [`docs/audit/`](./docs/audit/) for sprint-specific audit reports.

---

## License

Internal project — EmbedIT Vietnam © 2026
