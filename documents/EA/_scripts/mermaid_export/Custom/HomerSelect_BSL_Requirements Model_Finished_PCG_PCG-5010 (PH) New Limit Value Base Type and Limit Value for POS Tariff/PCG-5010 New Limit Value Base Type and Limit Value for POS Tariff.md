# PCG-5010 New Limit Value Base Type and Limit Value for POS Tariff

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5010 (PH) New Limit Value Base Type and Limit Value for POS Tariff
- **Diagram ID**: 161017
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph TD
    Business_Rules_Business_Rules["Business Rules : Business Rules"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    MOD_Tariff_Item_activation_validation_rules["{MOD}Tariff Item activation validation rules"]
    Business_Rules_Business_Rules["Business Rules : Business Rules"]
    Tariff_Item_Type_Flag_Type["Tariff Item Type Flag Type"]
    Business_Rules_Business_Rules["Business Rules : Business Rules"]
    REQ_1_Add_pricing_category_and_risk_grade_on_tariff_item_to_["REQ#1 - Add pricing category and risk grade on tariff item to be applied when calculating offer`s fees"]
    MOD_Tariff_Item_Bases_allowed_for_Product_Type["{MOD}Tariff Item Bases allowed for Product Type"]
    Business_Rules_Business_Rules -->|unnamed| REQ_1_Add_pricing_category_and_risk_grade_on_tariff_item_to_
    Business_Rules_Business_Rules -->|unnamed| REQ_1_Add_pricing_category_and_risk_grade_on_tariff_item_to_
    Business_Rules_Business_Rules -->|unnamed| REQ_1_Add_pricing_category_and_risk_grade_on_tariff_item_to_
    MOD_Tariff_Item_activation_validation_rules -->|unnamed| MOD_Tariff_Item_Bases_allowed_for_Product_Type
    MOD_Tariff_Item_Bases_allowed_for_Product_Type -->|unnamed| Business_Rules_Business_Rules
    MOD_Tariff_Item_activation_validation_rules -->|unnamed| Business_Rules_Business_Rules
    MOD_Algorithm_Calculate_tariff_item_amount -->|unnamed| Business_Rules_Business_Rules
```
