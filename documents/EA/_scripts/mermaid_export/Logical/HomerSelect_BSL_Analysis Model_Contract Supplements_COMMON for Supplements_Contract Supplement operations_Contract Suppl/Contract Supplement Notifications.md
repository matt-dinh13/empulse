# Contract Supplement Notifications

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications
- **Diagram ID**: 162751
- **Elements**: 16
- **Connectors**: 15

```mermaid
classDiagram
    class RequestSourceIdDto["RequestSourceIdDto"]
    class AccountTransaction["AccountTransaction"]
    class SupplementDocument["SupplementDocument"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class SupplementTypeSpecificData["SupplementTypeSpecificData"]
    class TransactionSupplement["TransactionSupplement"]
    class CreditLimitChangeSupplement["CreditLimitChangeSupplement"]
    class SupplementData["SupplementData"]
    class SupplementEventType["SupplementEventType"]
    class SupplementNotification["SupplementNotification"]
    class CreditLimitChangeType["CreditLimitChangeType"]
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    SupplementNotification --> SupplementData : unnamed
    SupplementNotification --> SupplementEventType : unnamed
    SupplementData --> CustomData : unnamed
    SupplementData --> RequestSourceIdDto : unnamed
    SupplementData --> SupplementDocument : unnamed
    SupplementData --> ContractSupplementStatusTransition : unnamed
    SupplementData --> RelatedSubject : unnamed
    SupplementData --> SupplementTypeSpecificData : unnamed
    CreditLimitChangeSupplement --> CreditLimitChangeType : unnamed
    SupplementTypeSpecificData <|-- CreditLimitChangeSupplement : unnamed
    SupplementTypeSpecificData <|-- TransactionSupplement : unnamed
    TransactionSupplement --> AccountTransaction : unnamed
    unnamed --> RelatedSubject : unnamed
    unnamed --> CustomData : unnamed
    unnamed --> SupplementEventType : unnamed
```
