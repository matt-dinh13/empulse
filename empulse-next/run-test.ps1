$baseUrl = "http://localhost:3000/api"
$results = @()

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  EmPulse API Testing" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Login
Write-Host "`n[TEST 1] POST /api/auth/login" -ForegroundColor Yellow
try {
    $loginBody = '{"email": "admin@empulse.com", "password": "password123"}'
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method POST -ContentType "application/json" -Body $loginBody -SessionVariable empulseSession
    $session = Get-Variable -Name empulseSession -Value
    Write-Host "  Status: PASS" -ForegroundColor Green
    $userName = $loginResponse.user.fullName
    $userRole = $loginResponse.user.role
    Write-Host "  User: $userName" -ForegroundColor Gray
    Write-Host "  Role: $userRole" -ForegroundColor Gray
    $results += @{Test="Login"; Status="PASS"; Details="User authenticated"}
} catch {
    Write-Host "  Status: FAIL - $($_.Exception.Message)" -ForegroundColor Red
    $results += @{Test="Login"; Status="FAIL"; Details=$_.Exception.Message}
    exit 1
}

# Helper function
function Test-API {
    param([string]$Name, [string]$Endpoint, [string]$Method='GET')
    Write-Host "`n[TEST] $Name" -ForegroundColor Yellow
    try {
        $resp = Invoke-RestMethod -Uri "$baseUrl$Endpoint" -Method $Method -SessionVariable empulseSession
        Write-Host "  Status: PASS" -ForegroundColor Green
        if ($resp.PSObject.Properties.Count -gt 0) {
            $props = $resp.PSObject.Properties.Name | Select-Object -First 3
            $propsStr = $props -join ", "
            Write-Host "  Response keys: $propsStr" -ForegroundColor Gray
        }
        $script:results += @{Test=$Name; Status='PASS'; Details='OK'}
    } catch {
        $errMsg = $_.Exception.Message
        Write-Host "  Status: FAIL - $errMsg" -ForegroundColor Red
        $script:results += @{Test=$Name; Status='FAIL'; Details=$errMsg}
    }
}

# Test routes
Test-API -Name "GET /auth/me" -Endpoint "/auth/me"
Test-API -Name "GET /wallets" -Endpoint "/wallets"
Test-API -Name "GET /users" -Endpoint "/users"
Test-API -Name "GET /catalog" -Endpoint "/catalog"
Test-API -Name "GET /orders" -Endpoint "/orders"
Test-API -Name "GET /votes?type=received" -Endpoint "/votes?type=received"
Test-API -Name "GET /leaderboard" -Endpoint "/leaderboard"
Test-API -Name "GET /notifications" -Endpoint "/notifications"
Test-API -Name "GET /feed" -Endpoint "/feed"
Test-API -Name "GET /value-tags" -Endpoint "/value-tags"
Test-API -Name "GET /notifications/count" -Endpoint "/notifications/count"
Test-API -Name "GET /user/preferences" -Endpoint "/user/preferences"
Test-API -Name "GET /votes?type=sent" -Endpoint "/votes?type=sent"
Test-API -Name "GET /health" -Endpoint "/health"

# Test invalid login
Write-Host "`n[TEST] POST /auth/login (Invalid)" -ForegroundColor Yellow
try {
    $body = '{"email": "invalid@test.com", "password": "wrong"}'
    $r = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method POST -ContentType "application/json" -Body $body
    Write-Host "  Status: FAIL" -ForegroundColor Red
    $results += @{Test='Invalid Login'; Status='FAIL'; Details='Should reject'}
} catch {
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host "  Status: PASS (401 expected)" -ForegroundColor Green
        $results += @{Test='Invalid Login'; Status='PASS'; Details='Rejected'}
    } else {
        $errMsg = $_.Exception.Message
        Write-Host "  Status: FAIL - $errMsg" -ForegroundColor Red
        $results += @{Test='Invalid Login'; Status='FAIL'; Details=$errMsg}
    }
}

# Test no auth
Write-Host "`n[TEST] GET /auth/me (No Auth)" -ForegroundColor Yellow
try {
    $r = Invoke-RestMethod -Uri "$baseUrl/auth/me" -Method GET
    Write-Host "  Status: FAIL" -ForegroundColor Red
    $results += @{Test='No Auth'; Status='FAIL'; Details='Should reject'}
} catch {
    Write-Host "  Status: PASS (401 expected)" -ForegroundColor Green
    $results += @{Test='No Auth'; Status='PASS'; Details='Rejected'}
}

# Summary
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  TEST SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
$passed = ($results | Where-Object { $_.Status -eq 'PASS' }).Count
$failed = ($results | Where-Object { $_.Status -eq 'FAIL' }).Count
Write-Host ""
Write-Host "  Total: $($results.Count) | Passed: $passed | Failed: $failed" -ForegroundColor White
$rate = [math]::Round(($passed / $results.Count) * 100, 1)
Write-Host "  Success Rate: $rate%" -ForegroundColor $(if ($passed -eq $results.Count) { 'Green' } else { 'Yellow' })

# Failed details
if ($failed -gt 0) {
    Write-Host "`n  Failed Tests:" -ForegroundColor Red
    $results | Where-Object { $_.Status -eq 'FAIL' } | ForEach-Object {
        Write-Host "    - $($_.Test): $($_.Details)" -ForegroundColor Red
    }
}