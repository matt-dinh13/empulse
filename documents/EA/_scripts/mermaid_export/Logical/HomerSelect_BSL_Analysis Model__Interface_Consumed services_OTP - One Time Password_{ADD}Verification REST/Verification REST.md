# Verification REST

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/OTP - One Time Password/{ADD}Verification REST
- **Diagram ID**: 133311
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class OTP["OTP"]
    class InvalidateVerificationCode["InvalidateVerificationCode"]
    class Invalidation["Invalidation"]
    class ValidationResult["ValidationResult"]
    class ValidateVerificationCode["ValidateVerificationCode"]
    class Verification["Verification"]
    Verification --> ValidateVerificationCode : unnamed
    Verification --> ValidationResult : unnamed
    OTP o-- Verification : /generate
    Invalidation --> InvalidateVerificationCode : unnamed
    OTP o-- Invalidation : /generate
```
