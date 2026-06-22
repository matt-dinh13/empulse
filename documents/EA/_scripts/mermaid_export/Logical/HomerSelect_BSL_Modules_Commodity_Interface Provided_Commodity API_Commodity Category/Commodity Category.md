# Commodity Category

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Category
- **Diagram ID**: 138987
- **Elements**: 8
- **Connectors**: 9

```mermaid
classDiagram
    class Commodity_API["Commodity API"]
    class active["active"]
    class ValidationError["ValidationError"]
    class commodityCategoryResult["commodityCategoryResult"]
    class LocalizedString["LocalizedString"]
    class Commodity_API_Commodity_REST_API["Commodity API :Commodity REST API"]
    class commodity_categories["commodity-categories"]
    class CommodityCategory["CommodityCategory"]
    active ..> CommodityCategory : unnamed
    commodity_categories ..> CommodityCategory : unnamed
    commodityCategoryResult ..> CommodityCategory : unnamed
    commodity_categories ..> CommodityCategory : unnamed
    commodity_categories ..> commodityCategoryResult : unnamed
    commodity_categories ..> commodityCategoryResult : unnamed
    commodityCategoryResult ..> ValidationError : unnamed
    commodity_categories ..> active : /active
    Commodity_API ..> commodity_categories : /commodity-categories
```
