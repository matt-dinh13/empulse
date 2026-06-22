# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules
- **Diagram ID**: 164438
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    el_1879057["Note"]
    Is_Flag_on_Tariff_Item_Type["Is Flag on Tariff Item Type"]
    Evaluate_Charged_To_for_Tariff_Item_Type["Evaluate Charged To for Tariff Item Type"]
    MOD_Base_Type["{MOD}Base Type"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    Algorithm_Find_tariff_by_Current_Tariff_Use_flag["Algorithm: Find tariff by Current Tariff Use flag"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    el_1879057 -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
    Algorithm_Find_tariff_items_by_usage -->|unnamed| Algorithm_Find_tariff_by_Current_Tariff_Use_flag
    MOD_Algorithm_Calculate_tariff_item_amount -->|unnamed| MOD_Base_Type
```
