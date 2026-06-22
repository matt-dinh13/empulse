# TicketType extension - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model
- **Diagram ID**: 156033
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Ticket["Ticket"]
    class TicketType2Specification["TicketType2Specification"]
    class TicketTypeSpecification["TicketTypeSpecification"]
    class TicketCategory["TicketCategory"]
    class TicketType["TicketType"]
    Ticket --> TicketType : unnamed
    TicketType --> TicketCategory : unnamed
    Ticket ..> TicketTypeSpecification : unnamed
    TicketType --> TicketTypeSpecification : unnamed
```
