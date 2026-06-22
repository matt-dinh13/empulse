# Contract Service Notification v5

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification/Contract Service Notification v5
- **Diagram ID**: 164564
- **Elements**: 16
- **Connectors**: 15

```mermaid
classDiagram
    class External_Reference["External Reference"]
    class ADD_ContractServiceReplacedRollbackNotification["{ADD}ContractServiceReplacedRollbackNotification "]
    class OperationStatusType["OperationStatusType"]
    class ContractInsuranceServiceOperStatusChangedNotification["ContractInsuranceServiceOperStatusChangedNotification"]
    class ContractServiceOperStatusChangedNotification["ContractServiceOperStatusChangedNotification"]
    class RelatedTransaction["RelatedTransaction"]
    class ContractInsuranceServiceCreatedNotification["ContractInsuranceServiceCreatedNotification "]
    class ContractServiceReplacedNotification["ContractServiceReplacedNotification"]
    class ContractInsuranceServiceNotification["ContractInsuranceServiceNotification"]
    class ContractServiceCanceledNotification["ContractServiceCanceledNotification"]
    class ContractInsuranceServiceCanceledNotification["ContractInsuranceServiceCanceledNotification"]
    class ContractServiceTerminatedNotification["ContractServiceTerminatedNotification"]
    class ContractInsuranceServiceTerminatedNotification["ContractInsuranceServiceTerminatedNotification"]
    class ContractServiceActivatedNotification["ContractServiceActivatedNotification"]
    class ContractInsuranceServiceActivatedNotification["ContractInsuranceServiceActivatedNotification"]
    class ContractServiceNotification["ContractServiceNotification"]
    ContractServiceNotification ..> RelatedTransaction : unnamed
    ContractServiceNotification ..> OperationStatusType : unnamed
    ContractInsuranceServiceNotification <|-- ContractInsuranceServiceActivatedNotification : unnamed
    ContractServiceNotification <|-- ContractServiceActivatedNotification : unnamed
    ContractInsuranceServiceNotification <|-- ContractInsuranceServiceTerminatedNotification : unnamed
    ContractServiceNotification <|-- ContractServiceTerminatedNotification : unnamed
    ContractInsuranceServiceNotification <|-- ContractInsuranceServiceCanceledNotification : unnamed
    ContractServiceNotification <|-- ContractServiceCanceledNotification : unnamed
    ContractServiceNotification <|-- ContractInsuranceServiceNotification : unnamed
    ContractServiceNotification <|-- ContractServiceReplacedNotification : unnamed
    ContractInsuranceServiceNotification <|-- ContractInsuranceServiceCreatedNotification : unnamed
    ContractServiceNotification <|-- ContractServiceOperStatusChangedNotification : unnamed
    ContractInsuranceServiceNotification <|-- ContractInsuranceServiceOperStatusChangedNotification : unnamed
    ContractServiceNotification <|-- ADD_ContractServiceReplacedRollbackNotification : unnamed
```
