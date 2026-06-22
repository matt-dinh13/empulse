# listTypes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/types/listTypes
- **Diagram ID**: 159966
- **Elements**: 6
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_TypeTickets["{ADD}TypeTickets"]
    class ADD_TypeWithTickets["{ADD}TypeWithTickets"]
    class ADD_TicketType["{ADD}TicketType"]
    class n_400["400"]
    class n_200["200"]
    class types["/types"]
    types ..> n_400 : unnamed
    ADD_TypeWithTickets ..> ADD_TypeTickets : unnamed
```
