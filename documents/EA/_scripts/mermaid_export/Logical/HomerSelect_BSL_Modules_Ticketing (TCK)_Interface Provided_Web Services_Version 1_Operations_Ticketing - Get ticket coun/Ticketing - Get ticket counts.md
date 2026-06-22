# Ticketing - Get ticket counts

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Get ticket counts
- **Diagram ID**: 160004
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class RelatedSubject["RelatedSubject"]
    class TicketCounts["TicketCounts"]
    class n_10_035_Get_ticket_counts_service["10.035 Get ticket counts service"]
    class TicketCounts["TicketCounts"]
    TicketCounts ..> n_10_035_Get_ticket_counts_service : unnamed
    TicketCounts ..> TicketCounts : unnamed
    TicketCounts ..> RelatedSubject : unnamed
```
