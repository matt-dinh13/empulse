# Create and Update Deal Period

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deal Periods_v1
- **Diagram ID**: 154736
- **Elements**: 16
- **Connectors**: 22

```mermaid
classDiagram
    class DealPeriodStatusType["DealPeriodStatusType"]
    class n_11_022_Update_deal_period["11.022 Update deal period"]
    class n_11_020_Create_deal_period["11.020 Create deal period"]
    class UpdatePeriodRequest["UpdatePeriodRequest"]
    class DealPeriod["DealPeriod"]
    class DealType["DealType"]
    class RelatedSubject["RelatedSubject"]
    class Schema_definitions_Deal_structures["Schema definitions : Deal structures"]
    class InsuranceDeal["InsuranceDeal"]
    class DealCustomData["DealCustomData"]
    class Deal["Deal"]
    class DealService["DealService"]
    class InsuranceAmount["InsuranceAmount"]
    class Deals["Deals"]
    class CreatePeriodRequest["CreatePeriodRequest"]
    class Periods["Periods"]
    UpdatePeriodRequest ..> DealPeriodStatusType : unnamed
    UpdatePeriodRequest ..> InsuranceAmount : unnamed
    CreatePeriodRequest ..> InsuranceAmount : unnamed
    Deal ..> DealType : unnamed
    Deal ..> InsuranceDeal : unnamed
    Deal ..> RelatedSubject : unnamed
    DealPeriod ..> InsuranceAmount : unnamed
    Deal ..> DealPeriod : unnamed
    DealPeriod ..> DealPeriodStatusType : unnamed
    Deal ..> DealCustomData : unnamed
    Deal ..> DealService : unnamed
    Periods ..> Deal : unnamed
    Deals ..> Periods : /{dealUuid}/
    Periods ..> CreatePeriodRequest : unnamed
    Periods ..> UpdatePeriodRequest : unnamed
    Periods ..> n_11_020_Create_deal_period : unnamed
    Periods ..> n_11_022_Update_deal_period : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
```
