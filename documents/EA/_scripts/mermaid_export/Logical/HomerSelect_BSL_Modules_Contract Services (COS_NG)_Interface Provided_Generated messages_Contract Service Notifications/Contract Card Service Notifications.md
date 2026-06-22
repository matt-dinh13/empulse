# Contract Card Service Notifications

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Generated messages/Contract Service Notifications v1
- **Diagram ID**: 160498
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class ContractServiceRole["ContractServiceRole"]
    class OperationStatusType["OperationStatusType"]
    class RelatedContractSupplement["RelatedContractSupplement"]
    class ContractCardServiceReplacedNotification["ContractCardServiceReplacedNotification"]
    class ContractCardServiceReplacedRollbackNotification["ContractCardServiceReplacedRollbackNotification"]
    class ContractCardServiceCreatedNotification["ContractCardServiceCreatedNotification"]
    class ContractCardServiceCanceledNotification["ContractCardServiceCanceledNotification"]
    class ContractCardServiceTerminatedNotification["ContractCardServiceTerminatedNotification"]
    class ContractCardServiceActivatedNotification["ContractCardServiceActivatedNotification"]
    class ContractServiceNotification["ContractServiceNotification"]
    class ContractCardServiceNotification["ContractCardServiceNotification"]
    ContractServiceNotification <|-- ContractCardServiceNotification : unnamed
    ContractCardServiceNotification <|-- ContractCardServiceActivatedNotification : unnamed
    ContractCardServiceNotification <|-- ContractCardServiceReplacedNotification : unnamed
    ContractCardServiceNotification <|-- ContractCardServiceCanceledNotification : unnamed
    ContractCardServiceNotification <|-- ContractCardServiceReplacedRollbackNotification : unnamed
    ContractCardServiceNotification <|-- ContractCardServiceTerminatedNotification : unnamed
    ContractCardServiceNotification <|-- ContractCardServiceCreatedNotification : unnamed
    ContractServiceNotification ..> RelatedContractSupplement : unnamed
    ContractServiceNotification ..> OperationStatusType : unnamed
    ContractServiceNotification ..> ContractServiceRole : unnamed
```
