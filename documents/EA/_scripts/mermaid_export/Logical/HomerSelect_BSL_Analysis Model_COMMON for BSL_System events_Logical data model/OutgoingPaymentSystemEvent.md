# OutgoingPaymentSystemEvent

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164614
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class CreateOutgoingPaymentOrderResendEvent["CreateOutgoingPaymentOrderResendEvent"]
    class CreateOutgoingPaymentOrderEvent["CreateOutgoingPaymentOrderEvent"]
    class ADD_JFSAccountOpenedSE["{ADD}JFSAccountOpenedSE"]
    class ADD_OutgoingPaymentCreatedSE["{ADD}OutgoingPaymentCreatedSE"]
    class Outgoing_Payment_Order["Outgoing Payment Order"]
    class Outgoing_Payment["Outgoing Payment"]
    class DEL_PaymentOrderCreatedSE["{DEL}PaymentOrderCreatedSE"]
    class OutgoingPaymentSystemEvent["OutgoingPaymentSystemEvent"]
    class OutgoingPaymentCanceledSE["OutgoingPaymentCanceledSE"]
    class SystemEvent["SystemEvent"]
    ADD_OutgoingPaymentCreatedSE --> Outgoing_Payment : unnamed
    OutgoingPaymentCanceledSE --> Outgoing_Payment : unnamed
    Outgoing_Payment_Order o-- Outgoing_Payment : unnamed
    CreateOutgoingPaymentOrderEvent --> Outgoing_Payment_Order : unnamed
    CreateOutgoingPaymentOrderResendEvent --> Outgoing_Payment_Order : unnamed
    SystemEvent <|-- OutgoingPaymentSystemEvent : unnamed
    OutgoingPaymentSystemEvent <|-- OutgoingPaymentCanceledSE : unnamed
    OutgoingPaymentSystemEvent <|-- CreateOutgoingPaymentOrderEvent : unnamed
    OutgoingPaymentSystemEvent <|-- ADD_JFSAccountOpenedSE : unnamed
    OutgoingPaymentSystemEvent <|-- ADD_OutgoingPaymentCreatedSE : unnamed
```
