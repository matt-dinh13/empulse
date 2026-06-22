# LoanAgreementFailureNotification - Common

```mermaid
classDiagram
    class MessageAttributes["MessageAttributes"]
    class ValidationErrors["ValidationErrors"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class KeyValueType["KeyValueType"]
    class LoanAgreementFailureNotification["LoanAgreementFailureNotification"]
    LoanAgreementFailureNotification --> ValidationErrors : unnamed
    MessageAttribute --> KeyValueType : unnamed
    MessageAttributes --> MessageAttribute : unnamed
    ValidationError --> MessageAttributes : unnamed
    ValidationErrors --> ValidationError : unnamed
```
