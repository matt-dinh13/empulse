# ContractServiceNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Interface consumed/RMQ/COS
- **Diagram ID**: 164699
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ContractServiceNotification["ContractServiceNotification"]
    class ContractServiceReplacedRollbackNotification["ContractServiceReplacedRollbackNotification "]
    class ContractServiceReplacedNotification["ContractServiceReplacedNotification"]
    ContractServiceNotification <|-- ContractServiceReplacedNotification : unnamed
    ContractServiceNotification <|-- ContractServiceReplacedRollbackNotification : unnamed
```
