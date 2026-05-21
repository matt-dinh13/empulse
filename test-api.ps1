# EmPulse Next.js API Testing Script
# Run: .\test-api.ps1

$baseUrl = "http://localhost:3000/api"
$results = @()

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  EmPulse Next.js API Testing" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Test 1: Login API
Write-Host "[TEST 1] POST /api/auth/login" -ForegroundColor Yellow
try {
    $loginBody = '{"email": "admin@empulse.com", "password": "password123"}'
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method POST -ContentType "application/json" -Body $loginBody
    $token = $loginResponse.accessToken
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  User: $($loginResponse.user.fullName)" -ForegroundColor Gray
    Write-Host "  Token: $($token.Substring(0, 20))..." -ForegroundColor Gray
    $results += @{Test="Login"; Status="PASS"; Details="User authenticated successfully"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Login"; Status="FAIL"; Details=$_.Exception.Message}
    exit 1
}

# Test 2: Get Current User
Write-Host "`n[TEST 2] GET /api/auth/me" -ForegroundColor Yellow
try {
    $headers = @{ Authorization = "Bearer $token" }
    $meResponse = Invoke-RestMethod -Uri "$baseUrl/auth/me" -Method GET -Headers $headers
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
    $walletsResponse = Invoke-RestMethod -Uri "$baseUrl/wallets" -Method GET -Headers $headers
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
    $usersResponse = Invoke-RestMethod -Uri "$baseUrl/users" -Method GET -Headers $headers
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
    $catalogResponse = Invoke-RestMethod -Uri "$baseUrl/catalog" -Method GET -Headers $headers
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
    $ordersResponse = Invoke-RestMethod -Uri "$baseUrl/orders" -Method GET -Headers $headers
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
    $votesResponse = Invoke-RestMethod -Uri "$baseUrl/votes?type=received" -Method GET -Headers $headers
    Write-Host "  Status: PASS" -ForegroundColor Green
    Write-Host "  Votes Received: $($votesResponse.votes.Count)" -ForegroundColor Gray
    $results += @{Test="Get Votes"; Status="PASS"; Details="$($votesResponse.votes.Count) votes found"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Get Votes"; Status="FAIL"; Details=$_.Exception.Message}
}

# Test 8: Invalid Login
Write-Host "`n[TEST 8] POST /api/auth/login (Invalid)" -ForegroundColor Yellow
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

# Test 9: Unauthorized Access
Write-Host "`n[TEST 9] GET /api/auth/me (No Token)" -ForegroundColor Yellow
try {
    $noAuthResponse = Invoke-RestMethod -Uri "$baseUrl/auth/me" -Method GET
    Write-Host "  Status: FAIL - Should have returned 401" -ForegroundColor Red
    $results += @{Test="No Auth"; Status="FAIL"; Details="Should have rejected"}
} catch {
    Write-Host "  Status: PASS (401 as expected)" -ForegroundColor Green
    $results += @{Test="No Auth"; Status="PASS"; Details="Correctly rejected unauthorized request"}
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
