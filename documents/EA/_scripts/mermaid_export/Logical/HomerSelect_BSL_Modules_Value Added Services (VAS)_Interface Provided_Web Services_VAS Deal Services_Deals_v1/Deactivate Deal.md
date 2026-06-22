# Deactivate Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158934
- **Elements**: 4
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_11_050_Deactivate_Deal_VAS["{ADD}11.050 Deactivate Deal (VAS)"]
    class Deal["Deal"]
    class ADD_DeactivateDealRequest["{ADD}DeactivateDealRequest"]
    class Deals["Deals"]
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> ADD_DeactivateDealRequest : unnamed
    Deals ..> ADD_11_050_Deactivate_Deal_VAS : unnamed
    Deals --> Deal : unnamed
```
