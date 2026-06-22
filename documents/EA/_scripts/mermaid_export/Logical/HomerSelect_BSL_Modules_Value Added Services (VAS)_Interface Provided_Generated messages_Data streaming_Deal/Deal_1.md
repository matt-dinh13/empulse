# Deal

```mermaid
classDiagram
    class DealPeriodStatusType["DealPeriodStatusType"]
    class DealOperationStatusType["DealOperationStatusType"]
    class InsuranceAmount["InsuranceAmount"]
    class DealStatusType["DealStatusType"]
    class DealStatusTransition["DealStatusTransition"]
    class DealPeriod["DealPeriod"]
    class DealType["DealType"]
    class RelatedSubject["RelatedSubject"]
    class InsuranceDeal["InsuranceDeal"]
    class DealCustomData["DealCustomData"]
    class DealService["DealService"]
    class Deal["Deal"]
    Deal --> DealService : unnamed
    Deal --> DealCustomData : unnamed
    Deal --> InsuranceDeal : unnamed
    Deal --> RelatedSubject : unnamed
    Deal --> DealType : unnamed
    Deal --> DealPeriod : unnamed
    Deal --> DealStatusTransition : unnamed
    DealStatusTransition --> DealStatusType : unnamed
    Deal --> DealStatusType : unnamed
    DealPeriod --> InsuranceAmount : unnamed
    Deal --> DealOperationStatusType : unnamed
    DealPeriod --> DealPeriodStatusType : unnamed
```
