# {DEL}GetCommodityTypeCriterion

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Interface Provided
- **Diagram ID**: 150994
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Use_Case_Manage_Commodity_Types_and_Categories_from_external["Use Case : Manage Commodity Types and Categories from external system"]
    class Commodity_Type_Criterion_Type["Commodity Type Criterion Type"]
    class DEL_CommodityTypeCriterionResult["{DEL}CommodityTypeCriterionResult"]
    class DEL_02_490_Provide_Commodity_Type_Criterion["{DEL}02.490 Provide Commodity Type Criterion"]
    class DEL_GetCommodityTypeCriterionResponse["{DEL}GetCommodityTypeCriterionResponse"]
    class Interface_Provided_CommodityWS["Interface Provided : CommodityWS"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    Interface_Provided_CommodityWS --> DEL_CommodityWS : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityTypeCriterionResponse : unnamed
    DEL_GetCommodityTypeCriterionResponse ..> DEL_CommodityTypeCriterionResult : unnamed
    DEL_CommodityTypeCriterionResult ..> Commodity_Type_Criterion_Type : unnamed
    DEL_CommodityWS ..> DEL_02_490_Provide_Commodity_Type_Criterion : unnamed
    DEL_02_490_Provide_Commodity_Type_Criterion --> Use_Case_Manage_Commodity_Types_and_Categories_from_external : unnamed
```
