# Search REST

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/OTP - One Time Password/{ADD}Verification REST
- **Diagram ID**: 133310
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class OTP["OTP"]
    class VerificationAttempt["VerificationAttempt"]
    class Verification["Verification"]
    class Verifications["Verifications"]
    class Request["Request"]
    Request --> Verifications : unnamed
    OTP o-- Request : /generate
    Verifications --> Verification : unnamed
    Verification --> VerificationAttempt : unnamed
```
