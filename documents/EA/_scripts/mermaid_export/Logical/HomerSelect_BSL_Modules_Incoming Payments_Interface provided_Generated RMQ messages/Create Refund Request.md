# Create Refund Request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Generated RMQ messages
- **Diagram ID**: 164605
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class RefundRecipientTypeDto["RefundRecipientTypeDto"]
    class n_05_505_Create_refund_from_incoming_payment["05.505 Create refund from incoming payment"]
    class RefundOperationTypeDto["RefundOperationTypeDto"]
    class RefundSrourceSystemDto["RefundSrourceSystemDto"]
    class MoneyDto["MoneyDto"]
    class CreateRefundRequest["CreateRefundRequest"]
    CreateRefundRequest ..> n_05_505_Create_refund_from_incoming_payment : unnamed
    CreateRefundRequest ..> MoneyDto : unnamed
    CreateRefundRequest ..> MoneyDto : unnamed
    CreateRefundRequest ..> RefundSrourceSystemDto : unnamed
    CreateRefundRequest ..> RefundOperationTypeDto : unnamed
    CreateRefundRequest ..> RefundRecipientTypeDto : unnamed
```
