# Notification system event schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164622
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Incoming_Payment_Pairing["Incoming Payment Pairing"]
    class Incoming_Payment["Incoming Payment"]
    class ADD_ReversalPaymentNotificationSE["{ADD}ReversalPaymentNotificationSE"]
    class SystemEvent["SystemEvent"]
    class ADD_NotificationSystemEvent["{ADD}NotificationSystemEvent"]
    ADD_NotificationSystemEvent <|-- ADD_ReversalPaymentNotificationSE : unnamed
    SystemEvent <|-- ADD_NotificationSystemEvent : unnamed
    Incoming_Payment_Pairing --> Incoming_Payment : unnamed
    ADD_ReversalPaymentNotificationSE --> Incoming_Payment : unnamed
```
