# Disbursement confirmation request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/OutgoingPayments
- **Diagram ID**: 163540
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_KeyValueType["{ADD}KeyValueType"]
    class ADD_ExtendedProperty["{ADD}ExtendedProperty"]
    class Legend["Legend"]
    class OutgoingPaymentDeliveryStatusDto["OutgoingPaymentDeliveryStatusDto"]
    class DisbursementConfirmationRequest["DisbursementConfirmationRequest"]
    ADD_KeyValueType <|-- ADD_ExtendedProperty : unnamed
    DisbursementConfirmationRequest ..> ADD_ExtendedProperty : unnamed
    DisbursementConfirmationRequest ..> OutgoingPaymentDeliveryStatusDto : unnamed
```
