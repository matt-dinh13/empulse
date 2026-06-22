# IncomingPaymentSystemEvent schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164616
- **Elements**: 8
- **Connectors**: 8

```mermaid
classDiagram
    class IncomingPaymentPairingNotificationSE["IncomingPaymentPairingNotificationSE"]
    class IncomingPaymentManualPairingCELSE["IncomingPaymentManualPairingCELSE"]
    class Incoming_Payment_Pairing["Incoming Payment Pairing"]
    class Incoming_Payment["Incoming Payment"]
    class IncomingPaymentPairingChangedCELSE["IncomingPaymentPairingChangedCELSE"]
    class IncomingPaymentSystemEvent["IncomingPaymentSystemEvent"]
    class InternalIncomingPaymentSE["InternalIncomingPaymentSE"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- IncomingPaymentSystemEvent : unnamed
    IncomingPaymentSystemEvent <|-- InternalIncomingPaymentSE : unnamed
    IncomingPaymentSystemEvent <|-- IncomingPaymentManualPairingCELSE : unnamed
    IncomingPaymentSystemEvent <|-- IncomingPaymentPairingNotificationSE : unnamed
    IncomingPaymentSystemEvent <|-- IncomingPaymentPairingChangedCELSE : unnamed
    IncomingPaymentSystemEvent --> Incoming_Payment : unnamed
    Incoming_Payment_Pairing --> Incoming_Payment : unnamed
    IncomingPaymentPairingChangedCELSE --> Incoming_Payment_Pairing : unnamed
```
