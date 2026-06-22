# Prolong Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158936
- **Elements**: 5
- **Connectors**: 11

```mermaid
classDiagram
    class ADD_11_070_Prolong_Deal_Period_VAS["{ADD}11.070 Prolong Deal Period (VAS)"]
    class InsuranceAmount["InsuranceAmount"]
    class Deal["Deal"]
    class ADD_ProlongDealPeriodRequest["{ADD}ProlongDealPeriodRequest"]
    class Deals["Deals"]
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    ADD_ProlongDealPeriodRequest --> InsuranceAmount : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals ..> ADD_11_070_Prolong_Deal_Period_VAS : unnamed
    Deals --> ADD_ProlongDealPeriodRequest : unnamed
```
