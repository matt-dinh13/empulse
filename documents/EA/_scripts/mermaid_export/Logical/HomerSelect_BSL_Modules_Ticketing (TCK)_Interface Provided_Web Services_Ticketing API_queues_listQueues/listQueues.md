# listQueues

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/listQueues
- **Diagram ID**: 159947
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class ProxyConnector["ProxyConnector"]
    class ADD_QueueExtended["{ADD}QueueExtended"]
    class n_403["403"]
    class n_10_017_Get_available_queues["10.017 Get available queues"]
    class n_400["400"]
    class queues["/queues"]
    class n_200["200"]
    queues ..> n_400 : unnamed
    queues ..> n_403 : unnamed
    queues ..> ADD_QueueExtended : unnamed
    n_200 ..> ProxyConnector : unnamed
    queues <|.. n_10_017_Get_available_queues : unnamed
```
