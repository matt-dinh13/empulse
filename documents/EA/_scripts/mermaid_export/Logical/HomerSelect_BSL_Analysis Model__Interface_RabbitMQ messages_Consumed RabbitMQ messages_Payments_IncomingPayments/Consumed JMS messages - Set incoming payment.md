# Consumed JMS messages - Set incoming payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/IncomingPayments
- **Diagram ID**: 55025
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class IncomingPaymentSourceSystemDto["IncomingPaymentSourceSystemDto"]
    class IncomingPaymentOperationTypeDto["IncomingPaymentOperationTypeDto"]
    class UseCase_Model_Processing_incoming_payments_message["UseCase Model :Processing incoming payments message"]
    class IncomingPaymentTypeDto["IncomingPaymentTypeDto"]
    class MoneyDto["MoneyDto"]
    class IncomingPaymentRequest["IncomingPaymentRequest"]
    IncomingPaymentRequest ..> IncomingPaymentSourceSystemDto : unnamed
    IncomingPaymentRequest ..> IncomingPaymentOperationTypeDto : unnamed
    unnamed --> IncomingPaymentRequest : unnamed
    IncomingPaymentRequest ..> MoneyDto : unnamed
    IncomingPaymentRequest ..> IncomingPaymentTypeDto : unnamed
    IncomingPaymentRequest --> UseCase_Model_Processing_incoming_payments_message : unnamed
```
