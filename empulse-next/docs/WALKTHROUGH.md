# EmPulse Walkthrough
**Date:** May 17, 2026
**Version:** 2.0 (Sprint Day 5)
**Status:** Production
**URL:** https://empulse-delta.vercel.app

## 1. Overview
EmPulse is a P2P employee recognition and rewards platform deployed at [empulse-delta.vercel.app](https://empulse-delta.vercel.app). This walkthrough covers the complete feature set available to employees and administrators.

## 2. Employee Features

### A. Dashboard & Recognition Feed
- Time-based greeting ("Good morning/afternoon/evening, [Name]! 👋")
- 4 gradient stat cards: Voting Quota (with ProgressRing), Reward Points (with trend), Role, Status
- Quick Actions bar: Send Recognition, Browse Rewards, Leaderboard
- Animated Recognition feed with Avatar initials, value tag Badges, relative timestamps
- Staggered entrance animations on page load

### B. Send Vote
- Select a colleague from the user list (excludes self and direct manager).
- Write a recognition message (20-400 characters with live counter).
- Select one or more company value tags (optional): Helpful, Innovative, Team Player, Goes Above & Beyond, Great Communication.
- System enforces: weekly cap (2/week), per-person cap (2/month), same-team limit (50%), quota balance.

### C. Leaderboard
- **Podium view**: Top 3 displayed as classic 2nd-1st-3rd layout with gradient columns, crown/star/fire emojis
- Three tabs: **🏅 Top Recognized**, **💪 Top Recognizers**, **👥 Top Teams**
- Period toggle: This Month / All Time
- Avatar initials + Badge points for each entry
- Row hover effects on rank table
- EmptyState fallback when no data

### D. Rewards Catalog
- Gradient balance widget showing current points
- Reward type icons (🎟️ voucher, 🎁 gift, 🌟 experience, ❤️ donation)
- Premium card hover effects (lift + border glow + shadow)
- "Redeem 🎉" button (grayed out if insufficient points)
- Modal confirmation dialog showing cost breakdown and remaining balance
- PageTransition skeleton loading

### E. Notifications
- 🔔 icon with unread count Badge in header ("N unread")
- Type-colored icon boxes: 🎉 vote (green), ✅ approved (green), ❌ rejected (red), ⏰ warning (amber)
- Pulsing green dot on unread notifications
- Staggered slide-in animations
- Click to mark individual as read, or "✓ Mark all read" button
- EmptyState ("All caught up!") when no notifications
- PageTransition skeleton loading

### F. Vote History
- **Votes Received:** All recognitions received, with sender name, points, value tag badges, and date.
- **Votes Sent:** All recognitions given, with recipient name, points, value tag badges, and date.

### G. My Orders
- Order history with status tracking (Pending, Approved, Rejected, Completed).

### H. Settings
- Email notification preference toggle (opt-in/opt-out).

### I. Sidebar Navigation
- Green active route indicator (left border)
- Section dividers grouping related nav items
- Pulsing red badge for unread notification count
- User footer with Avatar (colored initials) + Role Badge
- Logout button with icon and red hover effect
- Responsive mobile drawer with overlay

## 3. Admin Features

### A. Analytics Dashboard
- Key metrics: total users, total votes, votes this month, vote trend %, active voter %, pending orders, points redeemed.
- Leaderboard of top 5 receivers.
- Value tag distribution showing which company values are most recognized.
- Regional breakdown of votes and redemptions.
- Popular catalog items by order count.

### B. User Management
- List all users with role, region, team, and active status. Edit user details.

### C. Order Management
- View all redemption orders. Approve, reject, or complete (with automatic notification).

### D. Catalog Management
- Create, edit, and manage reward catalog items. Per-region support.

### E. System Settings
- Configure: quota per month, max votes per week, per-person cap, cooldown days, same-team limit %, points per vote, feature flags.

### F. Teams, Flagged Votes, CSV Exports
- View teams and members. Review reciprocal vote patterns. Export data as CSV.

## 4. Pages

| Path | Description |
|------|-------------|
| /login | Authentication page with quick demo buttons |
| /dashboard | Main dashboard with gradient stats + recognition feed |
| /dashboard/send-vote | Send recognition with value tags |
| /dashboard/leaderboard | Podium + table leaderboard |
| /dashboard/catalog | Rewards catalog with Modal confirmation |
| /dashboard/notifications | Notification center with type icons |
| /dashboard/votes/received | Vote history (received) |
| /dashboard/votes/sent | Vote history (sent) |
| /dashboard/orders | Personal order history |
| /dashboard/settings | Email notification preferences |
| /dashboard/my-team | Manager team view |
| /dashboard/admin/* | Admin portal (7 sub-pages) |
| /whitepaper | Public blueprint page |

## 5. UI Component Library

| Component | Import | Usage |
|-----------|--------|-------|
| `Card` | `@/components/ui` | Wrap content sections (glass, elevated, interactive) |
| `Badge` | `@/components/ui` | Status labels (success, warning, error, info, accent) |
| `Avatar` | `@/components/ui` | User initials with color + optional image |
| `StatCard` | `@/components/ui` | Dashboard stats with gradient + trend |
| `ProgressRing` | `@/components/ui` | Circular SVG progress (quota) |
| `Modal` | `@/components/ui` | Dialog with backdrop blur + keyboard dismiss |
| `EmptyState` | `@/components/ui` | Empty view with icon + action CTA |
| `SearchInput` | `@/components/ui` | Debounced search field |
| `PageTransition` | `@/components/ui` | Loading skeleton wrapper with fade-in |

## 6. Verification
- [x] All employee features functional and tested
- [x] All admin features functional and tested
- [x] Dashboard redesigned with gradient StatCards + ProgressRing
- [x] Leaderboard podium view operational
- [x] Sidebar upgraded with Avatar+Badge footer
- [x] Catalog Modal confirmation operational
- [x] Notifications redesigned with type-colored icons
- [x] 9 reusable UI components built and integrated
- [x] PageTransition loading states on 3 pages
- [x] 0 TypeScript errors, 0 ESLint errors
- [x] Production build: 31/31 pages compiled
