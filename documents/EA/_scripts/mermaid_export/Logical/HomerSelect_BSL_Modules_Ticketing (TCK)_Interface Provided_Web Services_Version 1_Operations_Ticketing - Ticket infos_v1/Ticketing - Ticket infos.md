# Ticketing - Ticket infos

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Ticket infos/v1.0
- **Diagram ID**: 160008
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_10_010_Search_for_tickets["10.010 Search for tickets"]
    class MOD_GetTicketInfoRequest["{MOD}GetTicketInfoRequest"]
    class TicketInfo["TicketInfo"]
    class Rule["Rule"]
    class TicketInfos["TicketInfos"]
    TicketInfo --> Rule : unnamed
    TicketInfos ..> TicketInfo : unnamed
    TicketInfos --> MOD_GetTicketInfoRequest : unnamed
    n_10_010_Search_for_tickets ..> TicketInfos : unnamed
```
