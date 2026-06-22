# Generated JMS messages - Manual payment pairing

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments
- **Diagram ID**: 97713
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class MoneyDto["MoneyDto"]
    class IncomingPaymentSourceSystemDto["IncomingPaymentSourceSystemDto"]
    class ManualIncomingPaymentPairngInfoRequest["ManualIncomingPaymentPairngInfoRequest"]
    ManualIncomingPaymentPairngInfoRequest ..> IncomingPaymentSourceSystemDto : unnamed
    ManualIncomingPaymentPairngInfoRequest ..> MoneyDto : unnamed
    ManualIncomingPaymentPairngInfoRequest --> unnamed : unnamed
```
