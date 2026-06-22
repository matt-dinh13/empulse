# Terminate Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158935
- **Elements**: 4
- **Connectors**: 10

```mermaid
classDiagram
    class ADD_11_060_Terminate_Deal_VAS["{ADD}11.060 Terminate Deal (VAS)"]
    class Deal["Deal"]
    class ADD_TerminateDealRequest["{ADD}TerminateDealRequest"]
    class Deals["Deals"]
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals ..> ADD_11_060_Terminate_Deal_VAS : unnamed
    Deals --> Deal : unnamed
    Deals --> ADD_TerminateDealRequest : unnamed
    Deals ..> Deal : unnamed
```
