# Contract Card Service Notifications

```mermaid
classDiagram
    class ADD_ContractServiceRole["{ADD}ContractServiceRole"]
    class OperationStatusType["OperationStatusType"]
    class RelatedTransaction["RelatedTransaction"]
    class ContractCardServiceReplacedNotification["ContractCardServiceReplacedNotification"]
    class ContractCardServiceReplacedRollbackNotification["ContractCardServiceReplacedRollbackNotification"]
    class ContractCardServiceCreatedNotification["ContractCardServiceCreatedNotification"]
    class ContractCardServiceCanceledNotification["ContractCardServiceCanceledNotification"]
    class ContractCardServiceTerminatedNotification["ContractCardServiceTerminatedNotification"]
    class ContractCardServiceActivatedNotification["ContractCardServiceActivatedNotification"]
    class ContractServiceNotification["ContractServiceNotification"]
    class ContractCardServiceNotification["ContractCardServiceNotification"]
    ContractServiceNotification --> ADD_ContractServiceRole : unnamed
    ContractServiceNotification --> OperationStatusType : unnamed
    ContractServiceNotification --> RelatedTransaction : unnamed
    ContractCardServiceReplacedNotification --> ContractCardServiceNotification : unnamed
    ContractCardServiceReplacedRollbackNotification --> ContractCardServiceNotification : unnamed
    ContractCardServiceCreatedNotification --> ContractCardServiceNotification : unnamed
    ContractCardServiceCanceledNotification --> ContractCardServiceNotification : unnamed
    ContractCardServiceTerminatedNotification --> ContractCardServiceNotification : unnamed
    ContractCardServiceActivatedNotification --> ContractCardServiceNotification : unnamed
    ContractCardServiceNotification --> ContractServiceNotification : unnamed
```
