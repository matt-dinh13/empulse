# Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/Data streaming/Deal
- **Diagram ID**: 147092
- **Elements**: 12
- **Connectors**: 12

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
    Deal ..> DealService : unnamed
    Deal ..> DealCustomData : unnamed
    Deal ..> InsuranceDeal : unnamed
    Deal ..> RelatedSubject : unnamed
    Deal ..> DealType : unnamed
    Deal ..> DealPeriod : unnamed
    Deal ..> DealStatusTransition : unnamed
    DealStatusTransition ..> DealStatusType : unnamed
    Deal ..> DealStatusType : unnamed
    DealPeriod ..> InsuranceAmount : unnamed
    Deal ..> DealOperationStatusType : unnamed
    DealPeriod ..> DealPeriodStatusType : unnamed
```
