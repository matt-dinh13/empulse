# Salesrooms

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API/Salesrooms
- **Diagram ID**: 132240
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class commodities["commodities"]
    class DisbursementChannelApiTO["DisbursementChannelApiTO"]
    class SalesroomResponseTO["SalesroomResponseTO"]
    class salesrooms["salesrooms"]
    class HomeSIS_API["HomeSIS API"]
    salesrooms ..> commodities : /commodities
    SalesroomResponseTO ..> DisbursementChannelApiTO : unnamed
    salesrooms ..> SalesroomResponseTO : unnamed
    HomeSIS_API ..> salesrooms : /salesrooms
```
