# Business Requirements Document (BRD)
## Project: EmPulse - P2P Reward & Recognition System
**Date:** February 2, 2026
**Version:** 1.0
**Status:** MVP Released

## 1. Executive Summary
EmPulse is an internal Peer-to-Peer (P2P) reward and recognition platform designed to foster a culture of appreciation within distributed organizations. It allows employees to instantly recognize colleagues with points, which can be redeemed for tangible rewards (vouchers, merch).

## 2. Business Objectives
-   **Increase Employee Engagement:** By making recognition frequent, visible, and democratic.
-   **Boost Morale:** Tangible rewards and public acknowledgement validate employee contributions.
-   **Reinforce Core Values:** Recognition is tied to company values/tags (e.g., "Helpful", "Innovative").
-   **Automate Rewards:** Replace manual ad-hoc rewards with a streamlined point-based catalog.

## 3. User Personas
### A. Employee (Standard User)
-   **Goal:** Recognize peers for help; Redeem points for rewards.
-   **Pain Point:** Feels unrecognized; "Kudos" in Slack gets lost.
-   **Key Features:** Send Vote, Leaderboard, My Orders.

### B. Admin (HR / Manager)
-   **Goal:** Manage budget, approve rewards, monitor engagement.
-   **Pain Point:** Manual tracking of gift cards/rewards is tedious.
-   **Key Features:** Order Approvals, User Management, Analytics.

## 4. Key Features (MVP)
### 4.1 Peer Recognition (Voting)
-   Users have a monthly point quota (e.g., 10 votes).
-   Selecting a colleague -> Writing a message -> Sending points (+10).
-   Public feed of recognitions on the Dashboard.

### 4.2 Leaderboard
-   Gamification element showing top contributors.
-   Filters: All Time / This Month.

### 4.3 Rewards Catalog
-   Redeem accumulated points for items (e.g., Grab Voucher 100k, Shopping Voucher).
-   "Out of Stock" handling (future).

### 4.4 Admin Portal
-   **Order Management:** Approve/Reject redemption requests.
-   **User Management:** Analytics on who is voting/receiving.

## 5. Non-Functional Requirements
-   **Branding:** Strong "<em/pulse>" identity; Dark mode aesthetic.
-   **Platform:** Web-based (Responsive), optimized for Desktop.
-   **Performance:** < 1s load time for Dashboard feed.
-   **Security:** Role-based access control (RBAC) into Admin Portal.
