# Ticketing - Get mistake tickets count on contracts

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Get mistake tickets count on contracts
- **Diagram ID**: 160003
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_MistakeTicketsCounts["{ADD}MistakeTicketsCounts"]
    class TicketCounts["TicketCounts"]
    class ADD_QueryParameters["{ADD}QueryParameters"]
    class n_10_039_Get_Mistake_Tickets_Count_on_Contracts["10.039 Get Mistake Tickets Count on Contracts"]
    class ADD_MistakeTicketsCounts["{ADD}MistakeTicketsCounts"]
    ADD_MistakeTicketsCounts ..> n_10_039_Get_Mistake_Tickets_Count_on_Contracts : unnamed
    ADD_MistakeTicketsCounts ..> ADD_QueryParameters : unnamed
    ADD_MistakeTicketsCounts ..> TicketCounts : unnamed
    ADD_MistakeTicketsCounts ..> ADD_MistakeTicketsCounts : unnamed
```
