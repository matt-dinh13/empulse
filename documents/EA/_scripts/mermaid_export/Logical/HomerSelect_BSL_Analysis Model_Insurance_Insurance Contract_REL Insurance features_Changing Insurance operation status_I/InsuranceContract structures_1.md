# InsuranceContract structures

```mermaid
classDiagram
    class InsuranceCustomData["InsuranceCustomData"]
    class InsuranceContractStatusType["InsuranceContractStatusType"]
    class InsuranceContractStatusTransition["InsuranceContractStatusTransition"]
    class InsuranceContractType["InsuranceContractType"]
    class InsurancePeriodStatusType["InsurancePeriodStatusType"]
    class InsurancePeriod["InsurancePeriod"]
    class InsuranceOperationStatusType["InsuranceOperationStatusType"]
    class InsuranceOperationStatus["InsuranceOperationStatus"]
    class InsuranceProgram["InsuranceProgram"]
    class InsuranceService["InsuranceService"]
    class InsuranceContract["InsuranceContract"]
    InsuranceContract --> InsuranceService : unnamed
    InsuranceContract --> InsuranceProgram : unnamed
    InsuranceContract --> InsuranceOperationStatus : unnamed
    InsuranceOperationStatus --> InsuranceOperationStatusType : unnamed
    InsuranceContract --> InsurancePeriod : unnamed
    InsurancePeriod --> InsurancePeriodStatusType : unnamed
    InsuranceContract --> InsuranceContractType : unnamed
    InsuranceContract --> InsuranceContractStatusTransition : unnamed
    InsuranceContractStatusTransition --> InsuranceContractStatusType : unnamed
    InsuranceContract --> InsuranceContractStatusType : unnamed
    InsuranceContract --> InsuranceCustomData : unnamed
```
