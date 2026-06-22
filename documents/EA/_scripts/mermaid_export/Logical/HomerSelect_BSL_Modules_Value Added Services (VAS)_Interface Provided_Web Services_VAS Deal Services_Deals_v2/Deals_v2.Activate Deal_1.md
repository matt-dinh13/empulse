# Deals_v2.Activate Deal

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class n_11_040_Activate_Deal_VAS["11.040 Activate Deal (VAS)"]
    class Deal["Deal"]
    class ADD_DealPeriodParameters["{ADD}DealPeriodParameters"]
    class Deals["Deals"]
    class ADD_ActivateDealRequest_v2["{ADD}ActivateDealRequest_v2"]
    ADD_DealPeriodParameters --> MoneyType : unnamed
    Deals --> ADD_ActivateDealRequest_v2 : unnamed
    ADD_ActivateDealRequest_v2 --> ADD_DealPeriodParameters : unnamed
    Deals --> Deal : unnamed
    Deals --> n_11_040_Activate_Deal_VAS : unnamed
```
