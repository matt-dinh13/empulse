# Cancel Deal

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158937
- **Elements**: 4
- **Connectors**: 11

```mermaid
classDiagram
    class ADD_11_080_Cancel_Deal_VAS["{ADD}11.080 Cancel Deal (VAS)"]
    class ADD_CancelDealRequest["{ADD}CancelDealRequest"]
    class Deal["Deal"]
    class Deals["Deals"]
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> ADD_11_080_Cancel_Deal_VAS : unnamed
    Deals ..> Deal : unnamed
    Deals --> ADD_CancelDealRequest : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals --> Deal : unnamed
```
