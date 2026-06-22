# Generated JMS messages - Pair payment batch

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments
- **Diagram ID**: 97712
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class PaymentTypeDto["PaymentTypeDto"]
    class PaymentDto["PaymentDto"]
    class PairPaymentBatchRequest["PairPaymentBatchRequest"]
    PaymentDto ..> PaymentTypeDto : unnamed
    PairPaymentBatchRequest ..> PaymentDto : unnamed
```
