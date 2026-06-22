# Contract Service Notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/COS/Contract Service Notification
- **Diagram ID**: 164420
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Process_ContractServiceNotification["Process ContractServiceNotification"]
    class ContractServiceReplacedRollbackNotification["ContractServiceReplacedRollbackNotification "]
    class ContractServiceReplacedNotification["ContractServiceReplacedNotification"]
    class ContractServiceCanceledNotification["ContractServiceCanceledNotification"]
    class ContractServiceNotification["ContractServiceNotification"]
    ContractServiceNotification <|-- ContractServiceReplacedRollbackNotification : unnamed
    ContractServiceNotification <|-- ContractServiceReplacedNotification : unnamed
    ContractServiceNotification <|-- ContractServiceCanceledNotification : unnamed
```
