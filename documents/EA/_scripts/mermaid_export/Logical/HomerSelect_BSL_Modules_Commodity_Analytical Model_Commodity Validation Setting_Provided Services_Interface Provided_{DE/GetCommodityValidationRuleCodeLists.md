# GetCommodityValidationRuleCodeLists

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRuleCodeLists
- **Diagram ID**: 150979
- **Elements**: 19
- **Connectors**: 15

```mermaid
classDiagram
    class DEL_CommodityCategory["{DEL}CommodityCategory"]
    class DEL_CommodityType["{DEL}CommodityType"]
    class DEL_CommodityValidationExternalType["{DEL}CommodityValidationExternalType"]
    class DEL_CommodityValidationEventType["{DEL}CommodityValidationEventType"]
    class DEL_CommodityValidationRuleType["{DEL}CommodityValidationRuleType"]
    class MOD_Commodity_Validation_Event_Type["{MOD}Commodity Validation Event Type"]
    class MOD_Commodity_Validation_Type["{MOD}Commodity Validation Type"]
    class Commodity_Validation_External_Type["Commodity Validation External Type"]
    class MOD_Commodity_Validation_Criteria_Type["{MOD}Commodity Validation Criteria Type"]
    class DEL_CommodityValidationRuleCriterionType["{DEL}CommodityValidationRuleCriterionType"]
    class DEL_ErrorCodeGetCommodityValidationRuleCodeLists["{DEL}ErrorCodeGetCommodityValidationRuleCodeLists"]
    class DEL_GetCommodityValidationRuleCodeListsResponse["{DEL}GetCommodityValidationRuleCodeListsResponse"]
    class DEL_01_603_Get_Commodity_Validation_Rule_Code_Lists["{DEL}01.603 Get Commodity Validation Rule Code Lists"]
    class Use_Case_Commodity_Validation_Setting_UC["Use Case : Commodity Validation Setting UC"]
    class Interface_Provided_CommodityWS["Interface Provided : CommodityWS"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    class Commodity_Category["Commodity Category"]
    class Commodity_Type["Commodity Type"]
    DEL_CommodityValidationRuleCriterionType ..> MOD_Commodity_Validation_Criteria_Type : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_CommodityType : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_CommodityValidationExternalType : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_CommodityValidationEventType : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_CommodityValidationRuleType : unnamed
    DEL_CommodityValidationEventType ..> MOD_Commodity_Validation_Event_Type : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_CommodityCategory : unnamed
    DEL_CommodityValidationExternalType ..> Commodity_Validation_External_Type : unnamed
    DEL_CommodityType ..> Commodity_Type : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_CommodityValidationRuleCriterionType : unnamed
    DEL_GetCommodityValidationRuleCodeListsResponse ..> DEL_ErrorCodeGetCommodityValidationRuleCodeLists : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityValidationRuleCodeListsResponse : unnamed
    DEL_01_603_Get_Commodity_Validation_Rule_Code_Lists <|.. DEL_CommodityWS : unnamed
    DEL_CommodityCategory ..> Commodity_Category : unnamed
    DEL_CommodityValidationRuleType ..> MOD_Commodity_Validation_Type : unnamed
```
