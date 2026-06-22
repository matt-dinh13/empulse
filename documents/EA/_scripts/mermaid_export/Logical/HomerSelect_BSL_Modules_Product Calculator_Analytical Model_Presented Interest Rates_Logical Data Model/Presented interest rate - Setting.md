# Presented interest rate - Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model
- **Diagram ID**: 155744
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Presented_IR_Type["Presented IR Type"]
    class Presented_Interest_Rate_Case["Presented Interest Rate Case"]
    class Product_Type["Product Type"]
    class MOD_Presented_IR_setting_validation_rules["{MOD}Presented IR setting validation rules"]
    class Rounding["Rounding"]
    class MOD_Presented_IR_Setting["{MOD}Presented IR Setting"]
    MOD_Presented_IR_Setting ..> Rounding : unnamed
    MOD_Presented_IR_Setting ..> MOD_Presented_IR_setting_validation_rules : unnamed
    MOD_Presented_IR_Setting ..> Product_Type : unnamed
    MOD_Presented_IR_Setting ..> Presented_Interest_Rate_Case : unnamed
    MOD_Presented_IR_Setting ..> Presented_IR_Type : unnamed
```
