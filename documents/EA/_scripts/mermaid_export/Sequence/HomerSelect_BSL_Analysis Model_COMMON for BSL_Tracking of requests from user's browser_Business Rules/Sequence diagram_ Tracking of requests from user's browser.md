# Sequence diagram: Tracking of requests from user's browser

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Tracking of requests from user's browser/Business Rules
- **Diagram ID**: 63475
- **Elements**: 9
- **Connectors**: 23

```mermaid
sequenceDiagram
    participant Web_server_BSL as Web server (BSL)
    participant Client_s_browser as Client's browser
    participant OpenAM as OpenAM
    participant Audit_log_BSL as Audit log (BSL)
    Web_server_BSL->>+Client_s_browser: response
    Client_s_browser->>+Web_server_BSL: followingRequest
    Client_s_browser->>+Web_server_BSL: followingRequest
    Client_s_browser->>+Web_server_BSL: firstRequest
    Client_s_browser->>+OpenAM: login
    Web_server_BSL->>+Web_server_BSL: generateTokenForBrowserTab
    Web_server_BSL->>+Web_server_BSL: generateCookie
    Client_s_browser->>+Web_server_BSL: initialRequest
    Web_server_BSL->>+Client_s_browser: response
    Client_s_browser->>+Web_server_BSL: initialRequest
    Web_server_BSL->>+Web_server_BSL: generateTokenForBrowserTab
    Web_server_BSL->>+Audit_log_BSL: storeSessionInformation
    OpenAM->>+Client_s_browser: assignSSOToken
    Web_server_BSL->>+Audit_log_BSL: storeSessionInformation
    Web_server_BSL->>+Audit_log_BSL: storeSessionInformation
    Web_server_BSL->>+Audit_log_BSL: storeSessionInformation
    Web_server_BSL->>+Web_server_BSL: generateTokenForBrowserTab
    Web_server_BSL->>+Client_s_browser: response
    Client_s_browser->>+Client_s_browser: generateFingerprint
    Client_s_browser->>+Client_s_browser: updateCookie
    Web_server_BSL->>+Client_s_browser: redirectToOpenAM
    Web_server_BSL->>+Client_s_browser: response
    Web_server_BSL->>+Web_server_BSL: verifySessionInformation
```
