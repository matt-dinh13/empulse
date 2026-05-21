# Phase 4: UX Polish & Error Handling

**Priority:** P2 - Medium
**Status:** Pending
**Depends on:** Phase 1 (middleware in place)

## Overview

Make the app resilient and give users visual feedback during loading, errors, and transitions.

---

## 4.1 Error Boundaries

**Problem:** No `error.tsx` files. App crashes show white screen.

### Files to Create

1. **`src/app/global-error.tsx`** - Catches root layout errors
   - Show "Something went wrong" with refresh button
   - Log error to console (or future error service)

2. **`src/app/dashboard/error.tsx`** - Dashboard-level errors
   - Show error message with "Go to Dashboard" button
   - Keep sidebar visible

3. **`src/app/dashboard/admin/error.tsx`** - Admin-level errors
   - Similar to dashboard error

### Pattern for all error boundaries:
```tsx
'use client'
export default function Error({ error, reset }) {
  return (
    <div className="error-container">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  )
}
```

---

## 4.2 Loading States

**Problem:** No `loading.tsx` files. Users see nothing while pages load.

### Files to Create

1. **`src/app/dashboard/loading.tsx`** - Dashboard skeleton
2. **`src/app/dashboard/leaderboard/loading.tsx`**
3. **`src/app/dashboard/send-vote/loading.tsx`**
4. **`src/app/dashboard/votes/received/loading.tsx`**
5. **`src/app/dashboard/votes/sent/loading.tsx`**
6. **`src/app/dashboard/catalog/loading.tsx`**
7. **`src/app/dashboard/orders/loading.tsx`**
8. **`src/app/dashboard/admin/loading.tsx`**

### Approach:
- Simple skeleton UI with pulsing placeholder boxes
- Use CSS animations (no library needed)
- Match the layout of the actual page content

### Add to `globals.css`:
```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}
@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 4.3 Not Found Page

### Files to Create

1. **`src/app/not-found.tsx`** - Global 404 page
   - "Page not found" with link to dashboard
   - Branded with em/pulse styling

---

## 4.4 Client-Side Fetch Error Handling

**Problem:** Pages likely show generic errors or crash on API failures.

### Pattern to apply across all dashboard pages:

```typescript
const [error, setError] = useState<string | null>(null)

// In fetch:
if (!res.ok) {
  if (res.status === 401) { handleUnauthorized(); return }
  const data = await res.json().catch(() => ({}))
  setError(data.error || 'Something went wrong')
  return
}
```

### Pages to audit and update:
- `src/app/dashboard/page.tsx`
- `src/app/dashboard/send-vote/page.tsx`
- `src/app/dashboard/leaderboard/page.tsx`
- `src/app/dashboard/catalog/page.tsx`
- `src/app/dashboard/orders/page.tsx`
- All admin pages

---

## 4.5 Toast/Feedback for Actions

### Simple approach (no library):
Create a lightweight toast component in `src/components/Toast.tsx`:
- Success (green), Error (red), Info (blue)
- Auto-dismiss after 3s
- Position: bottom-right

### Apply to:
- Vote sent → "Vote sent successfully!"
- Order placed → "Order placed! Awaiting approval."
- Admin actions → "Order approved" / "Order rejected"
- Settings saved → "Settings updated"

---

## Todo

- [ ] Create `src/app/global-error.tsx`
- [ ] Create `src/app/dashboard/error.tsx`
- [ ] Create `src/app/dashboard/admin/error.tsx`
- [ ] Create loading.tsx for all dashboard routes
- [ ] Add skeleton CSS to globals.css
- [ ] Create `src/app/not-found.tsx`
- [ ] Audit all pages for error handling consistency
- [ ] Create `src/components/Toast.tsx`
- [ ] Add toast feedback to all user actions
