# Ticket notification setting - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model
- **Diagram ID**: 156034
- **Elements**: 4
- **Connectors**: 5

```mermaid
classDiagram
    class TicketCategory["TicketCategory"]
    class TicketType["TicketType"]
    class TicketStatus["TicketStatus"]
    class NotificationRule["NotificationRule"]
    TicketType --> TicketStatus : unnamed
    NotificationRule ..> TicketStatus : unnamed
    NotificationRule ..> TicketType : unnamed
    TicketType --> TicketCategory : unnamed
    NotificationRule ..> TicketCategory : unnamed
```
