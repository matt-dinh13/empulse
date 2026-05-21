# 🧪 EmPulse - Frontend Testing Checklist

> NOTE (2026-02-03): This checklist was created for the legacy Vite frontend.
> The active UI now lives in `empulse-next` (Next.js App Router).

**URL:** http://localhost:5173  
**Backend URL:** http://localhost:3001  

---

## 📋 Test Cases Checklist

### 1. LOGIN PAGE

#### TC-FE-01: Login Page Display
- [ ] Logo hiển thị đúng (Embedit logo cho dark background)
- [ ] Subtitle "P2P Reward & Recognition System" hiển thị
- [ ] Form có 2 fields: Email và Password
- [ ] Button "Sign in" hiển thị
- [ ] Demo accounts hiển thị bên dưới form

#### TC-FE-02: Login với Valid Credentials
**Steps:**
1. Nhập email: `nguyen.van.a@empulse.com`
2. Nhập password: `password123`
3. Click "Sign in"

**Expected Result:**
- [ ] Loading spinner hiển thị trong button
- [ ] Redirect tới `/dashboard` trong 1-2 giây
- [ ] Không có error message

#### TC-FE-03: Login với Invalid Password
**Steps:**
1. Nhập email: `nguyen.van.a@empulse.com`
2. Nhập password: `wrongpassword`
3. Click "Sign in"

**Expected Result:**
- [ ] Error message hiển thị màu đỏ
- [ ] Không redirect đi đâu

---

### 2. DASHBOARD PAGE

#### TC-FE-04: Dashboard Display
**Precondition:** Đã login thành công

**Expected Result:**
- [ ] Sidebar hiển thị với logo Embedit
- [ ] Navigation menu có các items: Dashboard, Send Vote, Received, Sent, Catalog, My Orders
- [ ] User info hiển thị ở bottom sidebar (name, role, region)
- [ ] "Welcome, [Name]!" hiển thị
- [ ] 2 Wallet cards hiển thị (Quota và Reward)
- [ ] 4 stat cards hiển thị
- [ ] Recent Recognition section hiển thị

#### TC-FE-05: Wallet Cards
**Expected Result:**
- [ ] Quota Wallet hiển thị balance (8 cho user mới)
- [ ] "X days remaining" hiển thị
- [ ] Button "Send Vote" hoạt động
- [ ] Reward Wallet hiển thị balance
- [ ] Button "Redeem" hoạt động

---

### 3. SEND VOTE PAGE

#### TC-FE-06: Send Vote Display
**Steps:** Click "Send Vote" ở sidebar

**Expected Result:**
- [ ] Page title "Send Recognition 🎉" hiển thị
- [ ] Quota banner hiển thị "Voting Quota: X remaining this month"
- [ ] Search input hiển thị
- [ ] User list hiển thị sau khi load

#### TC-FE-07: Search and Select User
**Steps:**
1. Nhập "tran" vào search box

**Expected Result:**
- [ ] User list được filter
- [ ] Tran Thi B hiển thị trong danh sách
- [ ] Click vào user → user được highlight
- [ ] "Sending vote to: [Name]" banner hiển thị

#### TC-FE-08: Send Vote Successfully
**Steps:**
1. Chọn một user khác (không phải mình)
2. Nhập message > 20 ký tự
3. Click "🎉 Send Recognition"

**Expected Result:**
- [ ] Success message hiển thị màu xanh
- [ ] Quota giảm 1
- [ ] Redirect về dashboard sau 2 giây

#### TC-FE-09: Send Vote Validation
**Steps:**
1. Nhập message < 20 ký tự
2. Try to click send button

**Expected Result:**
- [ ] Button disabled khi message < 20 chars
- [ ] Character count hiển thị "X / 20 min"

---

### 4. VOTES PAGES

#### TC-FE-10: Votes Received Page
**Steps:** Click "Received" ở sidebar

**Expected Result:**
- [ ] Page title "Votes Received 📥" hiển thị
- [ ] Danh sách votes hiển thị (hoặc empty state nếu chưa có)
- [ ] Mỗi vote card có: avatar, sender name, team, message, points, date

#### TC-FE-11: Votes Sent Page
**Steps:** Click "Sent" ở sidebar

**Expected Result:**
- [ ] Page title "Votes Sent 📤" hiển thị
- [ ] Danh sách votes đã gửi hiển thị
- [ ] Mỗi card có: receiver info, message, date

---

### 5. CATALOG PAGE

#### TC-FE-12: Catalog Display
**Steps:** Click "Catalog" ở sidebar

**Expected Result:**
- [ ] Page title "Reward Catalog 🎁" hiển thị
- [ ] Points banner hiển thị "Your Balance: X points"
- [ ] Grid của catalog items hiển thị
- [ ] Mỗi card có: icon, type, name, description, value, points, Redeem button

#### TC-FE-13: Redeem Reward
**Precondition:** User có đủ points

**Steps:**
1. Click "Redeem" trên một item có đủ points

**Expected Result:**
- [ ] Success message hiển thị
- [ ] Points balance giảm
- [ ] Item có thể chuyển sang "Out of Stock" nếu hết voucher

#### TC-FE-14: Insufficient Points
**Expected Result:**
- [ ] Items với points > user balance có button màu mờ
- [ ] Button hiển thị "Not enough"

---

### 6. ORDERS PAGE

#### TC-FE-15: Orders Display
**Steps:** Click "My Orders" ở sidebar

**Expected Result:**
- [ ] Page title "My Orders 📦" hiển thị
- [ ] Filter buttons: All, Completed, In Queue, Pending
- [ ] Danh sách orders hiển thị (nếu có)

#### TC-FE-16: Order Details
**Expected Result:**
- [ ] Mỗi order card có: icon, name, value, points, status badge
- [ ] Digital voucher: hiển thị voucher code
- [ ] Physical item: hiển thị expected date nếu approved

---

### 7. ADMIN PAGES (login với admin@empulse.com)

#### TC-FE-17: Admin Access
**Precondition:** Login với `admin@empulse.com` / `password123`

**Expected Result:**
- [ ] Sidebar có thêm "Admin" section
- [ ] "Users" và "All Orders" links hiển thị

#### TC-FE-18: Admin Users Page
**Steps:** Click "Users" trong Admin section

**Expected Result:**
- [ ] Page title "User Management 👥" hiển thị
- [ ] Search input hiển thị
- [ ] Users table hiển thị với columns: Name, Email, Team, Region, Role, Status, Actions
- [ ] Role badges có màu khác nhau

#### TC-FE-19: Admin Orders Page
**Steps:** Click "All Orders" trong Admin section

**Expected Result:**
- [ ] Page title "Order Management 📋" hiển thị
- [ ] Filter buttons hiển thị
- [ ] Orders table hiển thị tất cả orders từ mọi users

---

### 8. RESPONSIVE & UI

#### TC-FE-20: Mobile Responsive (Optional)
**Steps:** Resize browser window < 768px

**Expected Result:**
- [ ] Layout adapts cho mobile
- [ ] Sidebar collapse hoặc thành menu

#### TC-FE-21: Dark Theme
**Expected Result:**
- [ ] Background colors đúng (dark theme)
- [ ] Logo hiển thị rõ trên nền tối
- [ ] Text colors có contrast đủ đọc

---

### 9. LOGOUT

#### TC-FE-22: Logout Function
**Steps:** Click "Logout" button ở bottom sidebar

**Expected Result:**
- [ ] Redirect về `/login`
- [ ] Token bị xóa (không thể access dashboard khi refresh)

---

## ✅ Test Summary

| Category | Total | Passed | Failed |
|----------|-------|--------|--------|
| Login | 3 | | |
| Dashboard | 2 | | |
| Send Vote | 4 | | |
| Votes | 2 | | |
| Catalog | 3 | | |
| Orders | 2 | | |
| Admin | 3 | | |
| Responsive | 2 | | |
| Logout | 1 | | |
| **TOTAL** | **22** | | |

---

**Tester:** _______________  
**Date:** _______________  
**Signature:** _______________

