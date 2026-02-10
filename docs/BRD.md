# Business Requirements Document (BRD)
## Project: EmPulse - P2P Reward & Recognition System
**Date:** February 10, 2026
**Version:** 2.0
**Status:** Production

## 1. Executive Summary
EmPulse is an internal Peer-to-Peer (P2P) reward and recognition platform designed to foster a culture of appreciation within distributed organizations. It allows employees to instantly recognize colleagues with points tied to company values, which can be redeemed for tangible rewards (vouchers, merch). The system includes real-time notifications, engagement analytics, and multi-region support.

## 2. Business Objectives
-   **Increase Employee Engagement:** By making recognition frequent, visible, and democratic.
-   **Boost Morale:** Tangible rewards and public acknowledgement validate employee contributions.
-   **Reinforce Core Values:** Recognition is tied to company value tags (e.g., "Helpful", "Innovative", "Team Player").
-   **Automate Rewards:** Replace manual ad-hoc rewards with a streamlined point-based catalog.
-   **Drive Adoption:** In-app notifications, social feed, and gamified leaderboards encourage daily use.

## 3. Target Audience
-   **Scale:** 50-200 employees across Vietnam (VN) and Czech Republic (CZ).
-   **Deployment:** Internal demo transitioning to production launch.

## 4. User Personas
### A. Employee (Standard User)
-   **Goal:** Recognize peers for help; Redeem points for rewards.
-   **Pain Point:** Feels unrecognized; "Kudos" in Slack gets lost.
-   **Key Features:** Send Vote with value tags, Recognition Feed, Leaderboard, Rewards Catalog, Notifications, My Orders.

### B. Manager
-   **Goal:** Monitor team engagement and recognition patterns.
-   **Key Features:** Team dashboard, recognition statistics.

### C. Admin (HR)
-   **Goal:** Manage budget, approve rewards, monitor engagement, configure system.
-   **Pain Point:** Manual tracking of gift cards/rewards is tedious.
-   **Key Features:** Order Approvals, User Management, Analytics Dashboard, CSV Exports, System Settings.

## 5. Key Features

### 5.1 Peer Recognition (Voting)
-   Users have a monthly vote quota (configurable, default 8/month).
-   Weekly vote limit (default 2/week) prevents burst voting.
-   Per-person monthly limit (default 2/person/month) with cooldown period.
-   Same-team voting cap (50%) encourages cross-team recognition.
-   Manager voting restrictions prevent upward voting.
-   Each vote awards configurable points (default 10) to the receiver.
-   Votes include a message (20-500 chars) and optional company value tags.
-   Reciprocal voting detection with audit logging.

### 5.2 Value Tags
-   Company values represented as selectable tags on votes.
-   Default tags: Helpful, Innovative, Team Player, Goes Above & Beyond, Great Communication.
-   Tags displayed as badges on feed items, vote history, and analytics.
-   Admin analytics show value tag distribution for HR insights.

### 5.3 Recognition Feed
-   Public recognition wall on the dashboard showing recent votes.
-   Displays sender, receiver, message, points, value tags, and timestamp.
-   Configurable via `enable_public_wall` system setting.
-   Cached for performance (30s TTL).

### 5.4 Leaderboard
-   Three views: Top Recognized (receivers), Top Recognizers (senders), Top Teams.
-   Period filters: This Month / All Time.
-   Gamification element driving healthy competition.

### 5.5 Rewards Catalog
-   Region-specific catalog items (VN: Grab vouchers, CZ: Alza vouchers).
-   Redemption confirmation modal prevents accidental orders.
-   Points deducted on order creation; admins approve/reject/complete.
-   Supports digital vouchers, physical items, and experiences.

### 5.6 In-App Notifications
-   Bell icon with unread count badge in sidebar.
-   Notification triggers:
    -   Vote received ("Alice recognized you!")
    -   Order approved/rejected/completed
    -   Quarterly points expiration warning
-   Dedicated notifications page with mark-read (individual + bulk).
-   Paginated, sorted by unread-first then newest.

### 5.7 Email Notifications
-   Branded email templates with em/pulse header and EmbedIT footer.
-   Per-user email notification preference (opt-in by default).
-   Settings page at `/dashboard/settings` for users to manage preference.
-   Skipped emails logged in NotificationLog with status "skipped".

### 5.8 Admin Portal
-   **Analytics Dashboard:** User count, vote trends, active voter %, regional breakdown, value tag distribution, popular catalog items.
-   **Order Management:** Approve/Reject/Complete redemption requests with notifications.
-   **User Management:** View/edit users, roles, regions, teams.
-   **Team Management:** View teams and members.
-   **System Settings:** Configurable quotas, limits, and feature flags.
-   **CSV Exports:** Votes, redemptions, and engagement data.
-   **Flagged Votes:** Review reciprocal or suspicious voting patterns.

## 6. Non-Functional Requirements
-   **Branding:** Strong "em/pulse" identity; Dark mode aesthetic with neon green (#00D264) accent.
-   **Platform:** Web-based (Responsive), mobile-friendly with viewport meta, PWA-enabled with service worker.
-   **Offline:** Service worker provides offline caching (network-first for API, cache-first for assets).
-   **Performance:** <1s load time for dashboard feed; API response caching (30s TTL).
-   **Security:** JWT authentication, role-based access control (RBAC), input validation (Zod).
-   **Multi-Region:** VN + CZ with region-specific catalogs and analytics.
-   **Hosting:** Vercel (Hobby plan) with Supabase PostgreSQL.
-   **Scheduled Jobs:** Daily cron for FIFO processing, quarterly point reset/warnings.
