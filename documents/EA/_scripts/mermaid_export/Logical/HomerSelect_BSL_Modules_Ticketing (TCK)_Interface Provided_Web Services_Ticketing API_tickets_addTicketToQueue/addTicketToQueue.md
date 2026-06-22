# addTicketToQueue

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTicketToQueue
- **Diagram ID**: 159997
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_Queue["{ADD}Queue"]
    class n_400["400"]
    class n_200["200"]
    class ADD_ErrorMessageRestApi["{ADD}ErrorMessageRestApi"]
    class tickets_ticketCode_queues_queueCode["/tickets/{ticketCode}/queues/{queueCode}"]
    tickets_ticketCode_queues_queueCode ..> ADD_ErrorMessageRestApi : unnamed
    tickets_ticketCode_queues_queueCode ..> ADD_ErrorMessageRestApi : unnamed
    tickets_ticketCode_queues_queueCode ..> n_200 : unnamed
    tickets_ticketCode_queues_queueCode ..> ADD_Queue : unnamed
```
