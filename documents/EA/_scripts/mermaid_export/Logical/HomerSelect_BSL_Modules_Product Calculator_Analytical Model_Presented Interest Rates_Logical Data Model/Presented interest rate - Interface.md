# Presented interest rate - Interface

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model
- **Diagram ID**: 155745
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Tariff_Item_Type["Tariff Item Type"]
    class Presented_IR_Fee["Presented IR Fee"]
    class Presented_IR_Cash_Flow["Presented IR Cash Flow"]
    class Presented_IR_Parameters["Presented IR Parameters"]
    Presented_IR_Parameters o-- Presented_IR_Fee : unnamed
    Presented_IR_Parameters o-- Presented_IR_Cash_Flow : unnamed
    Presented_IR_Fee ..> Tariff_Item_Type : unnamed
```
