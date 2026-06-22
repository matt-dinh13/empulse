# COMMON for system events

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164611
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_NotificationSystemEvent["{ADD}NotificationSystemEvent"]
    class ApplicationSystemEvent["ApplicationSystemEvent"]
    class SNMSystemEvent["SNMSystemEvent"]
    class IncomingPaymentSystemEvent["IncomingPaymentSystemEvent"]
    class DDSSystemEvent["DDSSystemEvent"]
    class OutgoingPaymentSystemEvent["OutgoingPaymentSystemEvent"]
    class InstallmentScheduleSystemEvent["InstallmentScheduleSystemEvent"]
    class External_Reference["External Reference"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- OutgoingPaymentSystemEvent : unnamed
    External_Reference ..> SystemEvent : External Reference
    SystemEvent <|-- InstallmentScheduleSystemEvent : unnamed
    SystemEvent <|-- ADD_NotificationSystemEvent : unnamed
    SystemEvent <|-- IncomingPaymentSystemEvent : unnamed
    SystemEvent <|-- SNMSystemEvent : unnamed
    SystemEvent <|-- ApplicationSystemEvent : unnamed
    SystemEvent <|-- DDSSystemEvent : unnamed
```
