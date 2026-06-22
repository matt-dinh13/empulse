# listStatuses

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/statuses
- **Diagram ID**: 159988
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class TicketStatus["TicketStatus"]
    class n_200["200"]
    class n_400["400"]
    class statuses["/statuses"]
    statuses ..> n_400 : unnamed
    statuses ..> TicketStatus : unnamed
```
