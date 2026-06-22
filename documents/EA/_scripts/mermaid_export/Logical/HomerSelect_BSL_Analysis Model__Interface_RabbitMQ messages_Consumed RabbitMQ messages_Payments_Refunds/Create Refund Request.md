# Create Refund Request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/Refunds
- **Diagram ID**: 164590
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class RefundSourceSystemDto["RefundSourceSystemDto"]
    class RefundRecipientTypeDto["RefundRecipientTypeDto"]
    class Process_Refund_Request_with_external_identifiers["Process Refund Request with external identifiers"]
    class CreateRefundRequest["CreateRefundRequest"]
    class RefundOperationTypeDto["RefundOperationTypeDto"]
    class MoneyDto["MoneyDto"]
    CreateRefundRequest ..> RefundSourceSystemDto : unnamed
    CreateRefundRequest ..> RefundOperationTypeDto : unnamed
    CreateRefundRequest ..> Process_Refund_Request_with_external_identifiers : unnamed
    CreateRefundRequest ..> RefundRecipientTypeDto : unnamed
    CreateRefundRequest ..> MoneyDto : unnamed
    CreateRefundRequest ..> MoneyDto : unnamed
```
