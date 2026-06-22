# Generated JMS messages - Set incoming payment (response)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments
- **Diagram ID**: 97709
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class UseCase_Model_Processing_incoming_payments_from_a_banking_sy["UseCase Model : Processing incoming payments from a banking system"]
    class IncomingPaymentResponse["IncomingPaymentResponse"]
    class IncomingPaymentResultTypeDto["IncomingPaymentResultTypeDto"]
    UseCase_Model_Processing_incoming_payments_from_a_banking_sy --> IncomingPaymentResponse : unnamed
    unnamed --> IncomingPaymentResponse : unnamed
    IncomingPaymentResponse ..> IncomingPaymentResultTypeDto : unnamed
```
