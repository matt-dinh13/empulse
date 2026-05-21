# Phase 3: Engagement Features

**Priority:** P1 - High (drives user adoption)
**Status:** Pending
**Depends on:** Phase 2 (email service needed for notifications)

## Overview

These features turn EmPulse from a "form you fill out" into a social recognition platform that drives engagement.

---

## 3.1 Recognition Feed / Wall

**Problem:** No visible feed of recognitions. Voting feels transactional. This is the #1 engagement driver.

### Database Changes

No schema changes needed. The `votes` table already has sender, receiver, message, points, and timestamp. Query existing data.

### API Endpoint

**New:** `GET /api/feed`
- File: `src/app/api/feed/route.ts`
- Returns recent votes (public recognition wall)
- Paginated, newest first
- Check `enable_public_wall` system setting
- Cache with memoryCache (30s TTL)

**Response shape:**
```json
{
  "feed": [
    {
      "id": 1,
      "sender": { "id": 1, "fullName": "Alice", "team": "Engineering" },
      "receiver": { "id": 2, "fullName": "Bob", "team": "Design" },
      "message": "Great work on the redesign!",
      "pointsAwarded": 10,
      "createdAt": "2026-02-10T10:00:00Z"
    }
  ],
  "pagination": { "page": 1, "totalPages": 5 }
}
```

### Frontend Component

**New:** Recognition feed component on dashboard page
- File: Modify `src/app/dashboard/page.tsx`
- Add a "Recent Recognition" section showing latest 10 votes
- Each card: sender avatar placeholder → sender name → "recognized" → receiver name, message excerpt, timestamp
- "View All" link to a dedicated feed page (optional)

---

## 3.2 In-App Notifications

**Problem:** Users don't know when they receive votes or order updates.

### Database Changes

Add to `prisma/schema.prisma`:
```prisma
model InAppNotification {
  id        Int      @id @default(autoincrement())
  userId    Int      @map("user_id")
  type      String   @db.VarChar(50)  // VOTE_RECEIVED, ORDER_APPROVED, ORDER_REJECTED, ORDER_COMPLETED, POINTS_EXPIRING
  title     String   @db.VarChar(255)
  message   String   @db.Text
  isRead    Boolean  @default(false) @map("is_read")
  metadata  Json?    // { voteId: 1 } or { orderId: 5 }
  createdAt DateTime @default(now()) @map("created_at")

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId, isRead])
  @@index([createdAt])
  @@map("in_app_notifications")
}
```

Update User model to add relation:
```prisma
inAppNotifications InAppNotification[]
```

### API Endpoints

**New:** `src/app/api/notifications/route.ts`
- `GET /api/notifications` - Get user's notifications (unread first, paginated)
- `PATCH /api/notifications` - Mark notifications as read (body: `{ ids: [1,2,3] }` or `{ markAllRead: true }`)

**New:** `GET /api/notifications/count` - Get unread count (lightweight, for bell badge)

### Trigger Points

Create helper: `src/lib/notifications.ts`
```typescript
export async function createNotification(userId, type, title, message, metadata?)
```

Call it from:
- `POST /api/votes` → notify receiver: "Alice recognized you!"
- `POST /api/admin/orders/[id]/approve` → notify user: "Your order was approved"
- `POST /api/admin/orders/[id]/reject` → notify user: "Your order was rejected"
- `POST /api/admin/orders/[id]/complete` → notify user: "Your order is complete"
- Quarterly warning cron → notify users with expiring points

### Frontend

- Add bell icon with unread count badge to Sidebar component
- Click opens notification dropdown/panel
- Each notification links to relevant page (votes received, orders, etc.)

---

## 3.3 Value Tags on Votes

**Problem:** Can't track which company values are most recognized. Key HR metric missing.

### Database Changes

Add to `prisma/schema.prisma`:
```prisma
model ValueTag {
  id        Int      @id @default(autoincrement())
  name      String   @unique @db.VarChar(50)  // "Helpful", "Innovative", "Team Player", etc.
  icon      String   @default("⭐")
  isActive  Boolean  @default(true) @map("is_active")
  createdAt DateTime @default(now()) @map("created_at")

  votes VoteValueTag[]

  @@map("value_tags")
}

model VoteValueTag {
  voteId     Int @map("vote_id")
  valueTagId Int @map("value_tag_id")

  vote     Vote     @relation(fields: [voteId], references: [id], onDelete: Cascade)
  valueTag ValueTag @relation(fields: [valueTagId], references: [id])

  @@id([voteId, valueTagId])
  @@map("vote_value_tags")
}
```

Update Vote model:
```prisma
valueTags VoteValueTag[]
```

### Seed Default Tags

Add to `prisma/seed.js`:
```javascript
const defaultTags = [
  { name: 'Helpful', icon: '🤝' },
  { name: 'Innovative', icon: '💡' },
  { name: 'Team Player', icon: '🏆' },
  { name: 'Goes Above & Beyond', icon: '🚀' },
  { name: 'Great Communication', icon: '💬' },
]
```

### API Changes

- `POST /api/votes` - Accept optional `valueTagIds: number[]` in body
- `GET /api/feed` - Include value tags in response
- `GET /api/votes` - Include value tags in response
- **New:** `GET /api/value-tags` - List active tags (for UI dropdowns)

### Frontend Changes

- **Send Vote page:** Add tag selection (multi-select chips) before submit
- **Feed/vote cards:** Show tag badges on each recognition
- **Admin analytics:** (Phase 5) Show tag distribution chart

---

## 3.4 Enhanced Leaderboard

**Problem:** Only shows top receivers. Missing sender recognition and team competition.

### API Changes

Update `GET /api/leaderboard` to accept `type` param:
- `type=receivers` (default, existing)
- `type=senders` - Top recognizers (GROUP BY senderId)
- `type=teams` - Team aggregate points

### Frontend Changes

- Add tab navigation: "Top Recognized" | "Top Recognizers" | "Top Teams"
- Each tab fetches with different `type` param

---

## 3.5 Redemption Confirmation Dialog

**Problem:** No confirmation before redeeming points. Accidental clicks lose points.

### Frontend Only

- In catalog page, when user clicks "Redeem":
  1. Show modal: "Redeem {item name} for {points} points? Your balance: {balance}. Remaining: {balance - points}"
  2. "Confirm" / "Cancel" buttons
  3. Only call POST /api/orders on confirm

---

## Todo

- [ ] Run Prisma migration for InAppNotification, ValueTag, VoteValueTag tables
- [ ] Create `GET /api/feed` endpoint
- [ ] Add recognition feed to dashboard page
- [ ] Create notification endpoints (GET, PATCH, count)
- [ ] Create `src/lib/notifications.ts` helper
- [ ] Add notification triggers to vote, order approval/rejection/completion
- [ ] Add bell icon + notification panel to Sidebar
- [ ] Create ValueTag and VoteValueTag tables
- [ ] Seed default value tags
- [ ] Update vote API to accept/return value tags
- [ ] Add tag selection UI to send-vote page
- [ ] Update leaderboard API with type param
- [ ] Add leaderboard tabs UI
- [ ] Add redemption confirmation modal

## Risk Assessment

- **DB migration** required. Must coordinate with production deploy.
- **Notification volume** could grow. Consider cleanup job for read notifications older than 90 days.
- **Value tags** are optional on votes to avoid disrupting existing flow.
