# TicketChangedNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedNotification
- **Diagram ID**: 156041
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Ticket["Ticket"]
    class ADD_TicketEvent["{ADD}TicketEvent"]
    class ADD_TicketChangedNotification["{ADD}TicketChangedNotification"]
    ADD_TicketChangedNotification ..> ADD_TicketEvent : unnamed
```
