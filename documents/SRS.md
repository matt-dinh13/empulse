# Software Requirements Specification (SRS)
**Project Name:** EmPulse
**Version:** 1.0

## 1. Technology Stack
-   **Frontend:** Next.js 14 (App Router), React, CSS Modules/Vanilla CSS.
-   **Backend:** Next.js Server Actions / API Routes.
-   **Database:** PostgreSQL (via Prisma ORM).
-   **Hosting:** Vercel (Frontend/Serverless), Nen (Database - Recommended).
-   **Styling:** Global CSS with CSS Variables for theming.

## 2. Functional Requirements

### 2.1 Authentication & Users
-   **FR-01:** Users must log in via Email/Password (Proof of Concept) or SSO (Future).
-   **FR-02:** System must distinguish between 'Employee' and 'Admin' roles.
-   **FR-03:** User profile must display Name, Avatar, Department, and Wallet Balances.

### 2.2 Core Features (Employee)
-   **FR-04 Send Vote:** Users can select a colleague, attach a message, and send points (deducted from Quota).
-   **FR-05 View Feed:** Users can see a list of recent votes/recognitions.
-   **FR-06 Leaderboard:** System aggregates `pointsAwarded` to display Top 10 rankings.
-   **FR-07 Redeem:** Users can exchange `RewardWallet` points for items in the Catalog.

### 2.3 Admin Modules
-   **FR-08 Product Management:** Admin can CRUD reward items (Name, Cost, Image, Stock).
-   **FR-09 Order Management:** Admin can View, Approve, or Reject redemption requests.
-   **FR-10 Settings:** Admin can configure monthly vote quotas and reset cycles.

## 3. Non-Functional Requirements
-   **NFR-01 Performance:** Pages should load (LCP) in under 1.5s.
-   **NFR-02 Security:** All API endpoints must verify JWT/Session token.
-   **NFR-03 Reliability:** Vote transactions must be atomic (Prisma Transaction).
-   **NFR-04 Scalability:** Support up to 1000 concurrent users.

## 4. Data Model Summary (See Diagram)
-   `User`: Core entity.
-   `Vote`: Transaction record (`senderId`, `receiverId`, `points`).
-   `RewardCatalog`: Items available for redemption.
-   `RedemptionOrder`: Order history.
