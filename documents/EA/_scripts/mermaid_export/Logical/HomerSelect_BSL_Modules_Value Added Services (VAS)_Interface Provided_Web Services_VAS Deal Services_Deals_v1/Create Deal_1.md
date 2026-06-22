# Create Deal

```mermaid
classDiagram
    class InsuranceAmount["InsuranceAmount"]
    class DealPeriodStatusType["DealPeriodStatusType"]
    class DealStatusType["DealStatusType"]
    class DealStatusTransition["DealStatusTransition"]
    class DealPeriod["DealPeriod"]
    class n_11_010_Create_deal_VAS["11.010 Create deal (VAS)"]
    class DealType["DealType"]
    class RelatedSubject["RelatedSubject"]
    class InsuranceDeal["InsuranceDeal"]
    class DealCustomData["DealCustomData"]
    class DealService["DealService"]
    class Schema_definitions_Deal_structures["Schema definitions : Deal structures"]
    class Deal["Deal"]
    class Deals["Deals"]
    class CreateDealRequest["CreateDealRequest"]
    CreateDealRequest --> DealCustomData : unnamed
    DealPeriod --> DealPeriodStatusType : unnamed
    Deal --> DealStatusType : unnamed
    DealStatusTransition --> DealStatusType : unnamed
    Deal --> DealStatusTransition : unnamed
    Deal --> DealPeriod : unnamed
    Deal --> DealType : unnamed
    CreateDealRequest --> DealType : unnamed
    Deal --> RelatedSubject : unnamed
    CreateDealRequest --> RelatedSubject : unnamed
    DealPeriod --> InsuranceAmount : unnamed
    Deal --> DealCustomData : unnamed
    CreateDealRequest --> DealService : unnamed
    Deal --> DealService : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deal --> InsuranceDeal : unnamed
    Deals --> Deal : unnamed
    Deals --> CreateDealRequest : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> n_11_010_Create_deal_VAS : unnamed
    Deals --> Deal : unnamed
```
