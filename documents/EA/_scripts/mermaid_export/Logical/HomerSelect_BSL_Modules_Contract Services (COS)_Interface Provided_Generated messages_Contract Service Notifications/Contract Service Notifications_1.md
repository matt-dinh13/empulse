# Contract Service Notifications

```mermaid
classDiagram
    class ADD_ContractServiceRole["{ADD}ContractServiceRole"]
    class ContractServiceReplacedRollbackNotification["ContractServiceReplacedRollbackNotification "]
    class OperationStatusType["OperationStatusType"]
    class ContractInsuranceServiceOperStatusChangedNotification["ContractInsuranceServiceOperStatusChangedNotification"]
    class ContractServiceOperStatusChangedNotification["ContractServiceOperStatusChangedNotification"]
    class RelatedTransaction["RelatedTransaction"]
    class ContractInsuranceServiceCreatedNotification["ContractInsuranceServiceCreatedNotification "]
    class ContractServiceCreatedNotification["ContractServiceCreatedNotification"]
    class ContractServiceReplacedNotification["ContractServiceReplacedNotification"]
    class ContractInsuranceServiceNotification["ContractInsuranceServiceNotification"]
    class ContractServiceCanceledNotification["ContractServiceCanceledNotification"]
    class ContractInsuranceServiceCanceledNotification["ContractInsuranceServiceCanceledNotification"]
    class ContractServiceTerminatedNotification["ContractServiceTerminatedNotification"]
    class ContractInsuranceServiceTerminatedNotification["ContractInsuranceServiceTerminatedNotification"]
    class ContractServiceActivatedNotification["ContractServiceActivatedNotification"]
    class ContractInsuranceServiceActivatedNotification["ContractInsuranceServiceActivatedNotification"]
    class ContractServiceNotification["ContractServiceNotification"]
    ContractServiceOperStatusChangedNotification --> ContractServiceNotification : unnamed
    ContractServiceNotification --> RelatedTransaction : unnamed
    ContractInsuranceServiceTerminatedNotification --> ContractInsuranceServiceNotification : unnamed
    ContractInsuranceServiceActivatedNotification --> ContractInsuranceServiceNotification : unnamed
    ContractInsuranceServiceCreatedNotification --> ContractInsuranceServiceNotification : unnamed
    ContractInsuranceServiceOperStatusChangedNotification --> ContractInsuranceServiceNotification : unnamed
    ContractServiceNotification --> OperationStatusType : unnamed
    ContractServiceCanceledNotification --> ContractServiceNotification : unnamed
    ContractServiceNotification --> ADD_ContractServiceRole : unnamed
    ContractServiceCreatedNotification --> ContractServiceNotification : unnamed
    ContractServiceReplacedNotification --> ContractServiceNotification : unnamed
    ContractServiceReplacedRollbackNotification --> ContractServiceNotification : unnamed
    ContractInsuranceServiceNotification --> ContractServiceNotification : unnamed
    ContractServiceTerminatedNotification --> ContractServiceNotification : unnamed
    ContractServiceActivatedNotification --> ContractServiceNotification : unnamed
    ContractInsuranceServiceCanceledNotification --> ContractInsuranceServiceNotification : unnamed
```
