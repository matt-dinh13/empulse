# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules
- **Diagram ID**: 106973
- **Elements**: 6
- **Connectors**: 2

```mermaid
graph TD
    Search_by_substring_in_versioned_entities_in_Product_Catalog["Search by substring in versioned entities in Product Catalog"]
    MOD_Tariff_Item_activation_validation_rules["{MOD}Tariff Item activation validation rules"]
    MOD_Tariff_activation_validation_rules["{MOD}Tariff activation validation rules"]
    Evaluate_Tariff_search_criteria["Evaluate Tariff search criteria"]
    Common_pre_condition_for_creating_updating_and_termination_o["Common pre-condition for creating, updating and termination of tariff properties "]
    Tariff_code["Tariff code"]
    MOD_Tariff_activation_validation_rules -->|unnamed| MOD_Tariff_Item_activation_validation_rules
    Evaluate_Tariff_search_criteria -->|unnamed| Search_by_substring_in_versioned_entities_in_Product_Catalog
```
