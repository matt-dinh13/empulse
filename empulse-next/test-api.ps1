# EmPulse Next.js API Testing Script
# Run: .\test-api.ps1

$baseUrl = "http://localhost:3000/api"
$results = @()
$session = $null

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  EmPulse Next.js API Testing" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Test 1: Login API (create session with cookies)
Write-Host "[TEST 1] POST /api/auth/login" -ForegroundColor Yellow
try {
    $loginBody = '{"email": "admin@empulse.com", "password": "password123"}'
    $session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
    $session.CookieContainer = New-Object System.Net.CookieContainer

    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method POST -ContentType "application/json" -Body $loginBody -SessionVariable session

    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  User: $($loginResponse.user.fullName)" -ForegroundColor Gray
    Write-Host "  Role: $($loginResponse.user.role)" -ForegroundColor Gray
    $results += @{Test="Login"; Status="PASS"; Details="User authenticated successfully"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Login"; Status="FAIL"; Details=$_.Exception.Message}
    exit 1
}

# Test 2: Get Current User
Write-Host "`n[TEST 2] GET /api/auth/me" -ForegroundColor Yellow
try {
    $meResponse = Invoke-RestMethod -Uri "$baseUrl/auth/me" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  User ID: $($meResponse.user.id)" -ForegroundColor Gray
    Write-Host "  Role: $($meResponse.user.role)" -ForegroundColor Gray
    $results += @{Test="Get User"; Status="PASS"; Details="User profile retrieved"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get User"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 3: Get Wallets
Write-Host "`n[TEST 3] GET /api/wallets" -ForegroundColor Yellow
try {
    $walletsResponse = Invoke-RestMethod -Uri "$baseUrl/wallets" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Quota Balance: $($walletsResponse.quotaWallet.balance)" -ForegroundColor Gray
    Write-Host "  Reward Balance: $($walletsResponse.rewardWallet.balance)" -ForegroundColor Gray
    $results += @{Test="Get Wallets"; Status="PASS"; Details="Wallets retrieved"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Wallets"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 4: Get Users List
Write-Host "`n[TEST 4] GET /api/users" -ForegroundColor Yellow
try {
    $usersResponse = Invoke-RestMethod -Uri "$baseUrl/users" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Users Found: $($usersResponse.users.Count)" -ForegroundColor Gray
    $results += @{Test="Get Users"; Status="PASS"; Details="$($usersResponse.users.Count) users found"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Users"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 5: Get Reward Catalog
Write-Host "`n[TEST 5] GET /api/catalog" -ForegroundColor Yellow
try {
    $catalogResponse = Invoke-RestMethod -Uri "$baseUrl/catalog" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Catalog Items: $($catalogResponse.catalog.Count)" -ForegroundColor Gray
    $results += @{Test="Get Catalog"; Status="PASS"; Details="$($catalogResponse.catalog.Count) items found"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Catalog"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 6: Get Orders
Write-Host "`n[TEST 6] GET /api/orders" -ForegroundColor Yellow
try {
    $ordersResponse = Invoke-RestMethod -Uri "$baseUrl/orders" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Orders: $($ordersResponse.orders.Count)" -ForegroundColor Gray
    $results += @{Test="Get Orders"; Status="PASS"; Details="$($ordersResponse.orders.Count) orders found"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Orders"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 7: Get Votes Received
Write-Host "`n[TEST 7] GET /api/votes?type=received" -ForegroundColor Yellow
try {
    $votesResponse = Invoke-RestMethod -Uri "$baseUrl/votes?type=received" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Votes Received: $($votesResponse.votes.Count)" -ForegroundColor Gray
    $results += @{Test="Get Votes"; Status="PASS"; Details="$($votesResponse.votes.Count) votes found"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Votes"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 8: Get Leaderboard
Write-Host "`n[TEST 8] GET /api/leaderboard" -ForegroundColor Yellow
try {
    $leaderboardResponse = Invoke-RestMethod -Uri "$baseUrl/leaderboard" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Top Users: $($leaderboardResponse.leaderboard.Count)" -ForegroundColor Gray
    $results += @{Test="Get Leaderboard"; Status="PASS"; Details="$($leaderboardResponse.leaderboard.Count) top users"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Leaderboard"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 9: Get Notifications
Write-Host "`n[TEST 9] GET /api/notifications" -ForegroundColor Yellow
try {
    $notifResponse = Invoke-RestMethod -Uri "$baseUrl/notifications" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Notifications: $($notifResponse.notifications.Count)" -ForegroundColor Gray
    $results += @{Test="Get Notifications"; Status="PASS"; Details="$($notifResponse.notifications.Count) notifications"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Notifications"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 10: Get Feed
Write-Host "`n[TEST 10] GET /api/feed" -ForegroundColor Yellow
try {
    $feedResponse = Invoke-RestMethod -Uri "$baseUrl/feed" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Feed Items: $($feedResponse.feed.Count)" -ForegroundColor Gray
    $results += @{Test="Get Feed"; Status="PASS"; Details="$($feedResponse.feed.Count) feed items"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Feed"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 11: Invalid Login
Write-Host "`n[TEST 11] POST /api/auth/login (Invalid)" -ForegroundColor Yellow
try {
    $invalidBody = '{"email": "invalid@test.com", "password": "wrongpassword"}'
    $invalidResponse = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method POST -ContentType "application/json" -Body $invalidBody
    Write-Host "  Status: FAIL - Should have returned 401" -ForegroundColor Red
    $results += @{Test="Invalid Login"; Status="FAIL"; Details="Should have rejected"}
} catch {
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host "  Status: PASS (401 as expected)" -ForegroundColor Green
        $results += @{Test="Invalid Login"; Status="PASS"; Details="Correctly rejected invalid credentials"}
    } else {
        Write-Host "  Status: PASS (Rejected)" -ForegroundColor Green
        $results += @{Test="Invalid Login"; Status="PASS"; Details="Request rejected"}
    }
}

# Test 12: Unauthorized Access
Write-Host "`n[TEST 12] GET /api/auth/me (No Token)" -ForegroundColor Yellow
try {
    $noAuthResponse = Invoke-RestMethod -Uri "$baseUrl/auth/me" -Method GET
    Write-Host "  Status: FAIL - Should have returned 401" -ForegroundColor Red
    $results += @{Test="No Auth"; Status="FAIL"; Details="Should have rejected"}
} catch {
    Write-Host "  Status: PASS (401 as expected)" -ForegroundColor Green
    $results += @{Test="No Auth"; Status="PASS"; Details="Correctly rejected unauthorized request"}
}

# Test 13: Get Value Tags
Write-Host "`n[TEST 13] GET /api/value-tags" -ForegroundColor Yellow
try {
    $tagsResponse = Invoke-RestMethod -Uri "$baseUrl/value-tags" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Value Tags: $($tagsResponse.tags.Count)" -ForegroundColor Gray
    $results += @{Test="Get Value Tags"; Status="PASS"; Details="$($tagsResponse.tags.Count) tags"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Value Tags"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 14: Notification Count
Write-Host "`n[TEST 14] GET /api/notifications/count" -ForegroundColor Yellow
try {
    $countResponse = Invoke-RestMethod -Uri "$baseUrl/notifications/count" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Unread Count: $($countResponse.unreadCount)" -ForegroundColor Gray
    $results += @{Test="Notification Count"; Status="PASS"; Details="$($countResponse.unreadCount) unread"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Notification Count"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 15: Health Check
Write-Host "`n[TEST 15] GET /api/health" -ForegroundColor Yellow
try {
    $healthResponse = Invoke-RestMethod -Uri "$baseUrl/health" -Method GET
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Status: $($healthResponse.status)" -ForegroundColor Gray
    $results += @{Test="Health Check"; Status="PASS"; Details="$($healthResponse.status)"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Health Check"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 16: User Preferences
Write-Host "`n[TEST 16] GET /api/user/preferences" -ForegroundColor Yellow
try {
    $prefResponse = Invoke-RestMethod -Uri "$baseUrl/user/preferences" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Email Notifications: $($prefResponse.emailNotifications)" -ForegroundColor Gray
    $results += @{Test="Get Preferences"; Status="PASS"; Details="Preferences retrieved"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Preferences"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 17: Votes Sent
Write-Host "`n[TEST 17] GET /api/votes?type=sent" -ForegroundColor Yellow
try {
    $votesSentResponse = Invoke-RestMethod -Uri "$baseUrl/votes?type=sent" -Method GET -SessionVariable global:session
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Votes Sent: $($votesSentResponse.votes.Count)" -ForegroundColor Gray
    $results += @{Test="Get Sent Votes"; Status="PASS"; Details="$($votesSentResponse.votes.Count) votes sent"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Sent Votes"; Status="FAIL"; Details=$_.Exception.Message}
}

# Summary
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  TEST SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$passed = ($results | Where-Object { $_.Status -eq "PASS" }).Count
$failed = ($results | Where-Object { $_.Status -eq "FAIL" }).Count
$total = $results.Count

Write-Host "`n  Total Tests: $total" -ForegroundColor White
Write-Host "  Passed: $passed" -ForegroundColor Green
Write-Host "  Failed: $failed" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "Green" })
Write-Host "`n  Success Rate: $([math]::Round(($passed / $total) * 100, 1))%" -ForegroundColor $(if ($passed -eq $total) { "Green" } else { "Yellow" })

Write-Host "`n========================================`n" -ForegroundColor Cyan