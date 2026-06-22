# Replace Deal Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1
- **Diagram ID**: 158938
- **Elements**: 5
- **Connectors**: 12

```mermaid
classDiagram
    class DealService["DealService"]
    class ADD_ReplaceServiceRequest["{ADD}ReplaceServiceRequest"]
    class ADD_11_030_Replace_deal_service_VAS["{ADD}11.030 Replace deal service (VAS)"]
    class Deal["Deal"]
    class Deals["Deals"]
    Deals --> Deal : unnamed
    Deal ..> DealService : unnamed
    ADD_ReplaceServiceRequest --> DealService : unnamed
    Deals --> Deal : unnamed
    Deals --> Deal : unnamed
    Deals --> ADD_ReplaceServiceRequest : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> Deal : unnamed
    Deals --> Deal : unnamed
    Deals ..> ADD_11_030_Replace_deal_service_VAS : unnamed
```
