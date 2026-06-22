# Types

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions/Types
- **Diagram ID**: 93148
- **Elements**: 18
- **Connectors**: 4

```mermaid
classDiagram
    class Types_Types["Types : Types"]
    class AccountItemDto["AccountItemDto"]
    class PaymentTypeDto["PaymentTypeDto"]
    class TransactionNotificationDto["TransactionNotificationDto"]
    class NotificationResultDto["NotificationResultDto"]
    class CardNotificationDto["CardNotificationDto"]
    class BillingSessionSearchDto["BillingSessionSearchDto"]
    class BillingSessionDto["BillingSessionDto"]
    class AccountClosureResultDto["AccountClosureResultDto"]
    class BillingPeriodFilterDto["BillingPeriodFilterDto"]
    class BillingPeriodBalanceSearchDto["BillingPeriodBalanceSearchDto"]
    class AuthorizeAndConfirmTxDto["AuthorizeAndConfirmTxDto"]
    class AttributesDto["AttributesDto"]
    class InstalmentDto["InstalmentDto"]
    class AccountItemAmountDirectionDto["AccountItemAmountDirectionDto"]
    class TransactionTypeDto["TransactionTypeDto"]
    class PaymentDto["PaymentDto"]
    class AmountRangeDto["AmountRangeDto"]
    PaymentDto ..> TransactionTypeDto : unnamed
    PaymentDto ..> AttributesDto : unnamed
    PaymentDto ..> PaymentTypeDto : unnamed
    AttributesDto --> Types_Types : unnamed
```
