# {DEL}CommodityValidationsRulesValues

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}COMMON for Commodity Validation Setting
- **Diagram ID**: 150981
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class Commodity_Type["Commodity Type"]
    class MOD_Commodity_Validation_Event_Type["{MOD}Commodity Validation Event Type"]
    class DEL_CommodityValidationRuleValues_validation_rules["{DEL}CommodityValidationRuleValues - validation rules"]
    class DEL_ValidationCodeCommodityValidationRuleValues["{DEL}ValidationCodeCommodityValidationRuleValues"]
    class DEL_CommodityValidationRuleCriterion["{DEL}CommodityValidationRuleCriterion"]
    class MOD_Commodity_Validation_Type["{MOD}Commodity Validation Type"]
    class MOD_Commodity_Validation_Criteria_Type["{MOD}Commodity Validation Criteria Type"]
    class Commodity_Validation_External_Type["Commodity Validation External Type"]
    class DEL_CommodityValidationRuleValues["{DEL}CommodityValidationRuleValues"]
    DEL_CommodityValidationRuleValues ..> Commodity_Validation_External_Type : unnamed
    DEL_CommodityValidationRuleCriterion ..> MOD_Commodity_Validation_Criteria_Type : unnamed
    DEL_CommodityValidationRuleValues ..> MOD_Commodity_Validation_Type : unnamed
    DEL_CommodityValidationRuleValues ..> DEL_CommodityValidationRuleCriterion : unnamed
    DEL_CommodityValidationRuleValues_validation_rules ..> MOD_Commodity_Validation_Type : unnamed
    DEL_CommodityValidationRuleValues_validation_rules ..> MOD_Commodity_Validation_Event_Type : unnamed
    DEL_CommodityValidationRuleValues_validation_rules ..> Commodity_Type : unnamed
    DEL_CommodityValidationRuleValues_validation_rules ..> Commodity_Validation_External_Type : unnamed
    DEL_CommodityValidationRuleValues_validation_rules ..> MOD_Commodity_Validation_Criteria_Type : unnamed
```
