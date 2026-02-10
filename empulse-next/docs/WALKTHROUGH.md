# EmPulse Walkthrough
**Date:** February 10, 2026
**Version:** 2.0
**Status:** Production

## 1. Overview
EmPulse is a P2P employee recognition and rewards platform deployed at [empulse-delta.vercel.app](https://empulse-delta.vercel.app). This walkthrough covers the complete feature set available to employees and administrators.

## 2. Employee Features

### A. Dashboard & Recognition Feed
- Landing page after login shows key stats: quota remaining, points balance, pending orders.
- Recognition feed displays recent votes with sender, receiver, message, value tags, and timestamps.
- Value tag badges (e.g., "Helpful", "Team Player") appear as green pill badges on each recognition.

### B. Send Vote
- Select a colleague from the user list (excludes self and direct manager).
- Write a recognition message (20-500 characters).
- Select one or more company value tags (optional): Helpful, Innovative, Team Player, Goes Above & Beyond, Great Communication.
- System enforces: weekly cap (2/week), per-person cap (2/month), same-team limit (50%), quota balance.

### C. Leaderboard
- Three tabs: **Top Recognized** (most points received), **Top Recognizers** (most votes sent), **Top Teams** (team aggregates).
- Period toggle: This Month / All Time.

### D. Rewards Catalog
- Browse region-specific rewards (VN: Grab vouchers, CZ: Alza vouchers).
- Click "Redeem" opens a confirmation modal showing item cost, current balance, and remaining balance.
- Orders go to PENDING_APPROVAL for admin review.

### E. Notifications
- Bell icon in sidebar shows unread notification count (red badge).
- Dedicated notifications page at `/dashboard/notifications`.
- Notification types: vote received, order approved/rejected/completed, points expiring.
- Click to mark individual notifications as read, or "Mark all read" button.

### F. Vote History
- **Votes Received:** All recognitions received, with sender name, points, value tag badges, and date.
- **Votes Sent:** All recognitions given, with recipient name, points, value tag badges, and date.

### G. My Orders
- Order history with status tracking (Pending, Approved, Rejected, Completed).

## 3. Admin Features

### A. Analytics Dashboard
- Key metrics: total users, total votes, votes this month, vote trend %, active voter %, pending orders, points redeemed.
- Leaderboard of top 5 receivers.
- Value tag distribution showing which company values are most recognized.
- Regional breakdown of votes and redemptions.
- Popular catalog items by order count.

### B. User Management
- List all users with role, region, team, and active status.
- Edit user details.

### C. Order Management
- View all redemption orders across the organization.
- Approve, reject, or complete orders (with automatic notification to the user).

### D. Catalog Management
- Create, edit, and manage reward catalog items.
- Per-region catalog support.

### E. System Settings
- Configure: quota per month, max votes per week, max votes per person per month, cooldown days, same-team limit %, points per vote, and feature flags.

### F. Teams
- View all teams and their members.

### G. Flagged Votes
- Review votes flagged for reciprocal patterns or other suspicious activity.

### H. CSV Exports
- Export data as CSV: votes, redemptions, or engagement metrics.

## 4. Pages

| Path | Description |
|------|-------------|
| /login | Authentication page |
| /dashboard | Main dashboard with feed + stats |
| /dashboard/send-vote | Send recognition with value tags |
| /dashboard/leaderboard | Three-tab leaderboard |
| /dashboard/catalog | Rewards catalog with confirmation modal |
| /dashboard/notifications | Notification center |
| /dashboard/votes/received | Vote history (received) |
| /dashboard/votes/sent | Vote history (sent) |
| /dashboard/orders | Personal order history |
| /dashboard/my-team | Manager team view |
| /dashboard/admin/* | Admin portal (7 sub-pages) |
| /whitepaper | Public blueprint page |

## 5. Verification
- [x] All employee features functional and tested
- [x] All admin features functional and tested
- [x] Value tags displayed on feed, vote history, and send-vote pages
- [x] Notifications system working (bell badge, notifications page, mark-read)
- [x] Leaderboard tabs (receivers/senders/teams) operational
- [x] Redemption confirmation modal prevents accidental orders
- [x] CSV exports working for all three types
- [x] 23/23 API endpoints passing smoke test
