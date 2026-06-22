# REL Payment Pairing - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages
- **Diagram ID**: 72425
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class AccountTypeDto["AccountTypeDto"]
    class ReconciliationTypeDto["ReconciliationTypeDto"]
    class BillingSystemType["BillingSystemType"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class Legend["Legend"]
    class PaidInstallmentMessageDto["PaidInstallmentMessageDto"]
    PaidInstallmentMessageDto ..> TransactionSourceIdDto : unnamed
    PaidInstallmentMessageDto ..> BillingSystemType : unnamed
    PaidInstallmentMessageDto ..> ReconciliationTypeDto : unnamed
    PaidInstallmentMessageDto ..> AccountTypeDto : unnamed
```
