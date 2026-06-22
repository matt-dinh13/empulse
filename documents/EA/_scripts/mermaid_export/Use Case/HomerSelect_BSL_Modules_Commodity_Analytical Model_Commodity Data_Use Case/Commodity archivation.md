# Commodity archivation

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case
- **Diagram ID**: 164433
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    ADD_Select_commodity_for_archivation["{ADD}Select commodity for archivation"]
    ADD_Archive_commodity_data["{ADD}Archive commodity data"]
    Time[/"Time"/]
    ADD_01_630_Archive_commodity(("{ADD}01.630 Archive commodity"))
    Time --- ADD_01_630_Archive_commodity
    ADD_01_630_Archive_commodity -->|unnamed| ADD_Archive_commodity_data
    ADD_01_630_Archive_commodity -->|unnamed| ADD_Select_commodity_for_archivation
```
