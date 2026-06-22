# {DEL}GetCommodityTypeData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Interface Provided
- **Diagram ID**: 150993
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class DEL_CommodityFieldSetting["{DEL}CommodityFieldSetting"]
    class Commodity_CommodityWS["Commodity : CommodityWS"]
    class Use_Case_Synchronization["Use Case : Synchronization"]
    class DEL_GetCommodityTypeDataResponse["{DEL}GetCommodityTypeDataResponse"]
    class DEL_02_470_Provide_Commodity_Type_Data["{DEL}02.470 Provide Commodity Type Data"]
    class DEL_GetCommodityTypeDataRequest["{DEL}GetCommodityTypeDataRequest"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    DEL_CommodityWS ..> DEL_GetCommodityTypeDataRequest : unnamed
    DEL_02_470_Provide_Commodity_Type_Data <|.. DEL_CommodityWS : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityTypeDataResponse : unnamed
    DEL_CommodityWS --> Commodity_CommodityWS : unnamed
    DEL_GetCommodityTypeDataResponse ..> DEL_CommodityFieldSetting : unnamed
    DEL_02_470_Provide_Commodity_Type_Data --> Use_Case_Synchronization : unnamed
```
