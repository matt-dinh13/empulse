# {DEL}GetCommodityCategoryData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Interface Provided
- **Diagram ID**: 150992
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Commodity_CommodityWS["Commodity : CommodityWS"]
    class Use_Case_Synchronization["Use Case : Synchronization"]
    class DEL_GetCommodityCategoryDataResponse["{DEL}GetCommodityCategoryDataResponse"]
    class DEL_GetCommodityCategoryDataRequest["{DEL}GetCommodityCategoryDataRequest"]
    class DEL_02_480_Provide_Commodity_Category_Data["{DEL}02.480 Provide Commodity Category Data"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    DEL_02_480_Provide_Commodity_Category_Data <|.. DEL_CommodityWS : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityCategoryDataRequest : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityCategoryDataResponse : unnamed
    DEL_CommodityWS --> Commodity_CommodityWS : unnamed
    DEL_02_480_Provide_Commodity_Category_Data --> Use_Case_Synchronization : unnamed
```
