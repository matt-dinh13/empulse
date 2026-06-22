# getQueue

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/getQueue
- **Diagram ID**: 159965
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_10_017_Get_queue["10.017 Get queue"]
    class queues_queueCode["/queues/{queueCode}"]
    class ADD_QueueExtendedUser["{ADD}QueueExtendedUser"]
    class ADD_QueueExtendedTickets["{ADD}QueueExtendedTickets"]
    class ADD_QueueExtended["{ADD}QueueExtended"]
    queues_queueCode ..> ADD_QueueExtended : unnamed
    queues_queueCode ..> n_10_017_Get_queue : unnamed
    ADD_QueueExtended ..> ADD_QueueExtendedTickets : unnamed
    ADD_QueueExtended ..> ADD_QueueExtendedUser : unnamed
```
