# LoanAgreementFailureNotification - Common

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Loan Agreement/Loan Agreement Notification
- **Diagram ID**: 139144
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class MessageAttributes["MessageAttributes"]
    class ValidationErrors["ValidationErrors"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class KeyValueType["KeyValueType"]
    class LoanAgreementFailureNotification["LoanAgreementFailureNotification"]
    LoanAgreementFailureNotification ..> ValidationErrors : unnamed
    KeyValueType <|-- MessageAttribute : unnamed
    MessageAttributes ..> MessageAttribute : unnamed
    ValidationError ..> MessageAttributes : unnamed
    ValidationErrors ..> ValidationError : unnamed
```
