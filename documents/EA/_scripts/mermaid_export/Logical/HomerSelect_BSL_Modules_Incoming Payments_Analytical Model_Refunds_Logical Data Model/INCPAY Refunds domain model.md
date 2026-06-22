# INCPAY Refunds domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Logical Data Model
- **Diagram ID**: 164302
- **Elements**: 3
- **Connectors**: 4

```mermaid
classDiagram
    class Incoming_Payment["Incoming Payment"]
    class Contract["Contract"]
    class Refund_Item["Refund Item"]
    Refund_Item ..> Incoming_Payment : unnamed
    Refund_Item ..> Contract : unnamed
    Incoming_Payment --> Incoming_Payment : unnamed
    Incoming_Payment --> Incoming_Payment : unnamed
```
