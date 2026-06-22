# Get Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158931
- **Elements**: 16
- **Connectors**: 23

```mermaid
classDiagram
    class DealOperationStatusType["DealOperationStatusType"]
    class n_11_001_Get_deal_VAS["11.001 Get deal (VAS)"]
    class GetDealRequest["GetDealRequest"]
    class InsuranceAmount["InsuranceAmount"]
    class DealPeriodStatusType["DealPeriodStatusType"]
    class DealStatusType["DealStatusType"]
    class DealStatusTransition["DealStatusTransition"]
    class DealPeriod["DealPeriod"]
    class DealType["DealType"]
    class RelatedSubject["RelatedSubject"]
    class InsuranceDeal["InsuranceDeal"]
    class DealCustomData["DealCustomData"]
    class DealService["DealService"]
    class Schema_definitions_Deal_structures["Schema definitions : Deal structures"]
    class Deal["Deal"]
    class Deals["Deals"]
    Deal ..> DealCustomData : unnamed
    DealPeriod ..> InsuranceAmount : unnamed
    DealPeriod ..> DealPeriodStatusType : unnamed
    DealStatusTransition ..> DealStatusType : unnamed
    Deal ..> DealStatusType : unnamed
    Deal ..> DealStatusTransition : unnamed
    Deal ..> DealPeriod : unnamed
    Deal ..> DealType : unnamed
    Deal ..> DealOperationStatusType : unnamed
    Deal ..> InsuranceDeal : unnamed
    Deal ..> DealService : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deal ..> RelatedSubject : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> n_11_001_Get_deal_VAS : unnamed
    Deals ..> Deal : unnamed
    Deals ..> GetDealRequest : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
```
