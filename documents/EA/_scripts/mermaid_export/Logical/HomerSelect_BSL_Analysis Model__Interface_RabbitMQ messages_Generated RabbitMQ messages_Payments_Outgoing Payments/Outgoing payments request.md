# Outgoing payments request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments
- **Diagram ID**: 163537
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class OutgoingPaymentTransactionSubtype["OutgoingPaymentTransactionSubtype"]
    class PaymentOrderRequest["PaymentOrderRequest"]
    class CancelOugoingPaymentRequest["CancelOugoingPaymentRequest"]
    class Legend["Legend"]
    class OutgoingPaymentTypeDto["OutgoingPaymentTypeDto"]
    class OutgoingPaymentChannelDto["OutgoingPaymentChannelDto"]
    class BankAccountDto["BankAccountDto"]
    class OutgoingPaymentDto["OutgoingPaymentDto"]
    PaymentOrderRequest --> OutgoingPaymentDto : unnamed
    CancelOugoingPaymentRequest ..> OutgoingPaymentDto : unnamed
    OutgoingPaymentDto ..> BankAccountDto : unnamed
    OutgoingPaymentDto ..> BankAccountDto : unnamed
    OutgoingPaymentDto ..> OutgoingPaymentChannelDto : unnamed
    OutgoingPaymentDto ..> OutgoingPaymentTypeDto : unnamed
    OutgoingPaymentDto ..> OutgoingPaymentTransactionSubtype : unnamed
```
