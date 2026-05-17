# EmPulse - P2P Reward & Recognition System

EmPulse is a production-grade Peer-to-Peer (P2P) employee recognition and rewards platform. It allows employees to send recognition votes to their colleagues based on core value tags, driving a positive and collaborative company culture.

## System Architecture
- **Framework:** Next.js 16 (App Router, Server Actions, API Routes)
- **Database:** Supabase PostgreSQL with Prisma ORM
- **Authentication:** Custom JWT-based stateless auth strictly utilizing `HttpOnly` cookies (preventing XSS).
- **Caching & Rate Limiting:** Upstash Redis for serverless-ready multi-instance caching (with an in-memory fallback mechanism).
- **Observability:** Structured JSON Logging integrated into all API routes.
- **Deployment:** Vercel (Edge/Serverless optimized)

## Core Features
- **Role-Based Access Control (RBAC):** Super Admin, HR Admin, Manager, and Employee tiers.
- **Recognition Quotas:** Monthly/Weekly dynamic quotas restricting vote spam.
- **Rewards Catalog & Orders:** Employees can convert recognition points into physical/digital rewards.
- **Admin Analytics:** Comprehensive reporting, user management, and configuration system.
- **Leaderboards & Realtime Feeds:** Fast, cached API endpoints serving dynamic organizational data.

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

Import via barrel: `import { Card, Badge, Avatar } from '@/components/ui'`

## Sprint v2.0 — UI/UX Overhaul (May 2026)

### Phase 1: Code Quality ✅
- Service layer extraction (`lib/services/voteService.ts` — 274 lines)
- Typed error system (`lib/errors.ts` — `AppError` + `ErrorCode` enum)
- ESLint 0 errors, N+1 query fix, Prettier integration

### Phase 2: Design System & Redesign ✅
- CSS design tokens (gradients, shadows, animations, transitions)
- 9 reusable UI components
- Dashboard redesign (gradient StatCards, ProgressRing, animated Recognition feed)
- Leaderboard podium view (gold/silver/bronze top-3)
- Sidebar upgrade (active indicator, Avatar+Badge footer)
- Catalog premium cards (Modal confirmation, hover effects)
- Notifications redesign (type-colored icons, pulsing unread dots)

> **Audit Logs:** `docs/audit/SPRINT_V2_AUDIT.md` (current sprint), plus historical reports in `/docs/audit/`.

## Getting Started Locally

1. Install dependencies:
```bash
npm install
```
2. Configure `.env` (requires Supabase IPv4 Pooler URL and optionally Upstash Redis).
3. Generate Prisma client:
```bash
npx prisma generate
```
4. Run development server:
```bash
npm run dev
```

## Code Conventions
- **Thin controllers**: API routes delegate to `lib/services/` — no business logic in routes
- **Barrel exports**: UI components from `@/components/ui`
- **Animation classes**: `.animate-slide-up`, `.animate-fade-in`, `.animate-scale-in` with `.stagger-N`
- **Error handling**: All API errors use `AppError` from `lib/errors.ts`
