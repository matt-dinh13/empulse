# GetCommodityValidationRule

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRule
- **Diagram ID**: 150978
- **Elements**: 14
- **Connectors**: 10

```mermaid
classDiagram
    class Use_Case_Commodity_Validation_Setting_UC["Use Case : Commodity Validation Setting UC"]
    class DEL_01_602_Get_Commodity_Validation_Rule["{DEL}01.602 Get Commodity Validation Rule"]
    class DEL_ResultCodeGetCommodityValidationRule["{DEL}ResultCodeGetCommodityValidationRule"]
    class DEL_ValidationCodeGetCommodityValidationRule["{DEL}ValidationCodeGetCommodityValidationRule"]
    class COMMON_for_Commodity_Validation_Setting_CommodityValidations["COMMON for Commodity Validation Setting : CommodityValidationsRulesValues"]
    class DEL_CommodityValidationRuleValues["{DEL}CommodityValidationRuleValues"]
    class DEL_ResultGetCommodityValidationRule["{DEL}ResultGetCommodityValidationRule"]
    class DEL_GetCommodityValidationRuleResponse["{DEL}GetCommodityValidationRuleResponse"]
    class DEL_GetCommodityValidationRuleCriterionType["{DEL}GetCommodityValidationRuleCriterionType"]
    class DEL_GetCommodityValidationRuleCriterion["{DEL}GetCommodityValidationRuleCriterion"]
    class DEL_GetCommodityValidationRuleRequest["{DEL}GetCommodityValidationRuleRequest"]
    class ValidationResult["ValidationResult"]
    class Interface_Provided_CommodityWS["Interface Provided : CommodityWS"]
    class DEL_CommodityWS["{DEL}CommodityWS"]
    DEL_GetCommodityValidationRuleResponse ..> ValidationResult : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityValidationRuleRequest : unnamed
    DEL_GetCommodityValidationRuleRequest ..> DEL_GetCommodityValidationRuleCriterion : unnamed
    DEL_GetCommodityValidationRuleCriterion ..> DEL_GetCommodityValidationRuleCriterionType : unnamed
    DEL_CommodityWS ..> DEL_GetCommodityValidationRuleResponse : unnamed
    DEL_GetCommodityValidationRuleResponse ..> DEL_ResultGetCommodityValidationRule : unnamed
    DEL_ResultGetCommodityValidationRule ..> DEL_CommodityValidationRuleValues : unnamed
    DEL_GetCommodityValidationRuleResponse ..> DEL_ValidationCodeGetCommodityValidationRule : unnamed
    DEL_GetCommodityValidationRuleResponse ..> DEL_ResultCodeGetCommodityValidationRule : unnamed
    DEL_CommodityWS ..> DEL_01_602_Get_Commodity_Validation_Rule : unnamed
```
