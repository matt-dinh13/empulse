# HomeSIS API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/HomeSIS API
- **Diagram ID**: 163835
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_Partner_detail["{ADD}Partner detail"]
    class ADD_Search_salesroom_in_HomeSIS["{ADD}Search salesroom in HomeSIS"]
    class ADD_Salesrooms_search["{ADD}Salesrooms search"]
    class salesrooms["salesrooms"]
    class commodities["commodities"]
    class partners["partners"]
    class HomeSIS_API["HomeSIS API"]
    HomeSIS_API ..> ADD_Partner_detail : /partners/search
    ADD_Salesrooms_search ..> ADD_Search_salesroom_in_HomeSIS : External Reference
    HomeSIS_API ..> ADD_Salesrooms_search : /salesrooms/search
    HomeSIS_API ..> partners : /partners
    salesrooms ..> commodities : /commodities
    HomeSIS_API ..> salesrooms : /salesrooms
```
