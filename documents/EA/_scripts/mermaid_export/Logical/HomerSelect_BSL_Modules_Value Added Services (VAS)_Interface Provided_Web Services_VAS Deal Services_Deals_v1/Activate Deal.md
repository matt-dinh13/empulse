# Activate Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158933
- **Elements**: 4
- **Connectors**: 11

```mermaid
classDiagram
    class Deal["Deal"]
    class ActivateDealRequest["ActivateDealRequest"]
    class n_11_040_Activate_Deal_VAS["11.040 Activate Deal (VAS)"]
    class Deals["Deals"]
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals ..> n_11_040_Activate_Deal_VAS : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> ActivateDealRequest : unnamed
```
