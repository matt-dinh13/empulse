const http = require('http');

const BASE_URL = 'http://localhost:3000';
let cookies = '';

function makeRequest(method, path, body = null) {
    return new Promise((resolve, reject) => {
        const url = new URL(path, BASE_URL);
        const options = {
            hostname: url.hostname,
            port: url.port,
            path: url.pathname + url.search,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (cookies) {
            options.headers['Cookie'] = cookies;
        }

        if (body) {
            const bodyStr = JSON.stringify(body);
            options.headers['Content-Length'] = Buffer.byteLength(bodyStr);
        }

        const req = http.request(options, (res) => {
            const setCookie = res.headers['set-cookie'];
            if (setCookie) {
                cookies = setCookie.map(c => c.split(';')[0]).join('; ');
                console.log('  Cookies: ' + cookies.substring(0, 40) + '...');
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve({ status: res.statusCode, data: json });
                } catch {
                    resolve({ status: res.statusCode, data: data });
                }
            });
        });

        req.on('error', reject);

        if (body) {
            req.write(JSON.stringify(body));
        }
        req.end();
    });
}

function get(path) { return makeRequest('GET', path); }
function post(path, body) { return makeRequest('POST', path, body); }

async function runTests() {
    const results = [];

    console.log('========================================');
    console.log('  EmPulse API Testing (Node.js)');
    console.log('========================================\n');

    // Test 1: Login
    console.log('[TEST 1] POST /api/auth/login');
    try {
        const res = await post('/api/auth/login', {
            email: 'admin@empulse.com',
            password: 'password123'
        });
        if (res.status === 200 && res.data.user) {
            console.log('  Status: PASS');
            console.log('  User: ' + res.data.user.fullName);
            console.log('  Role: ' + res.data.user.role);
            results.push({ test: 'Login', status: 'PASS' });
        } else {
            console.log('  Status: FAIL -', JSON.stringify(res.data));
            results.push({ test: 'Login', status: 'FAIL', details: JSON.stringify(res.data) });
        }
    } catch (e) {
        console.log('  Status: FAIL -', e.message);
        results.push({ test: 'Login', status: 'FAIL', details: e.message });
    }

    // Test endpoints
    const endpoints = [
        ['GET', '/api/auth/me'],
        ['GET', '/api/wallets'],
        ['GET', '/api/users'],
        ['GET', '/api/catalog'],
        ['GET', '/api/orders'],
        ['GET', '/api/votes?type=received'],
        ['GET', '/api/leaderboard'],
        ['GET', '/api/notifications'],
        ['GET', '/api/feed'],
        ['GET', '/api/value-tags'],
        ['GET', '/api/notifications/count'],
        ['GET', '/api/user/preferences'],
        ['GET', '/api/votes?type=sent'],
        ['GET', '/api/health']
    ];

    for (const [method, path] of endpoints) {
        console.log('\n[TEST] ' + method + ' ' + path);
        try {
            const res = method === 'GET' ? await get(path) : await post(path);
            if (res.status >= 200 && res.status < 300) {
                console.log('  Status: PASS (' + res.status + ')');
                if (res.data && typeof res.data === 'object') {
                    const keys = Object.keys(res.data).slice(0, 4).join(', ');
                    console.log('  Keys: ' + keys);
                }
                results.push({ test: method + ' ' + path, status: 'PASS' });
            } else {
                console.log('  Status: FAIL - ' + res.status);
                if (res.data.error) console.log('  Error: ' + res.data.error);
                results.push({ test: method + ' ' + path, status: 'FAIL', details: 'HTTP ' + res.status });
            }
        } catch (e) {
            console.log('  Status: FAIL - ' + e.message);
            results.push({ test: method + ' ' + path, status: 'FAIL', details: e.message });
        }
    }

    // Test invalid login
    console.log('\n[TEST] POST /api/auth/login (Invalid)');
    try {
        const res = await post('/api/auth/login', {
            email: 'invalid@test.com',
            password: 'wrongpassword'
        });
        if (res.status === 401) {
            console.log('  Status: PASS (401 expected)');
            results.push({ test: 'Invalid Login', status: 'PASS' });
        } else {
            console.log('  Status: FAIL - Expected 401, got ' + res.status);
            results.push({ test: 'Invalid Login', status: 'FAIL', details: 'Expected 401' });
        }
    } catch (e) {
        console.log('  Status: FAIL - ' + e.message);
        results.push({ test: 'Invalid Login', status: 'FAIL', details: e.message });
    }

    // Summary
    console.log('\n========================================');
    console.log('  TEST SUMMARY');
    console.log('========================================');

    const passed = results.filter(r => r.status === 'PASS').length;
    const failed = results.filter(r => r.status === 'FAIL').length;
    const rate = ((passed / results.length) * 100).toFixed(1);

    console.log('\n  Total: ' + results.length + ' | Passed: ' + passed + ' | Failed: ' + failed);
    console.log('  Success Rate: ' + rate + '%');

    if (failed > 0) {
        console.log('\n  Failed Tests:');
        results.filter(r => r.status === 'FAIL').forEach(r => {
            console.log('    - ' + r.test + ': ' + r.details);
        });
    }

    console.log('\n========================================');
}

runTests().catch(console.error);