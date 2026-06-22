# Generation REST

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/OTP - One Time Password/{ADD}Verification REST
- **Diagram ID**: 133309
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Parameter["Parameter"]
    class Parameters["Parameters"]
    class OTP["OTP"]
    class VerificationAttempt["VerificationAttempt"]
    class Verification["Verification"]
    class GenerateVerification["GenerateVerification"]
    class GenerateCode["GenerateCode"]
    GenerateCode ..> GenerateVerification : unnamed
    GenerateCode ..> Verification : unnamed
    OTP o-- GenerateCode : /generate
    GenerateVerification --> Parameters : unnamed
    Verification --> VerificationAttempt : unnamed
    Parameters --> Parameter : unnamed
```
