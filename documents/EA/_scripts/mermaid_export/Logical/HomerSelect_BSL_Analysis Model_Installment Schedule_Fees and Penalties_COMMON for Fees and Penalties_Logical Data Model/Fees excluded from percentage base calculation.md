# Fees excluded from percentage base calculation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/COMMON for Fees and Penalties/Logical Data Model
- **Diagram ID**: 159977
- **Elements**: 2
- **Connectors**: 3

```mermaid
classDiagram
    class Excluded_Fees_Base["Excluded Fees Base"]
    class Tariff_Item_Type["Tariff Item Type"]
    Excluded_Fees_Base ..> Tariff_Item_Type : unnamed
    Excluded_Fees_Base ..> Tariff_Item_Type : unnamed
    Tariff_Item_Type --> Tariff_Item_Type : unnamed
```
