# Fees and Penalties in context

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/COMMON for Fees and Penalties/Logical Data Model
- **Diagram ID**: 159976
- **Elements**: 9
- **Connectors**: 7

```mermaid
classDiagram
    class Installment_Schedule["Installment Schedule"]
    class Tariff_and_Tariff_Item_Management["Tariff and Tariff Item Management"]
    class Installment["Installment"]
    class MOD_Product["{MOD}Product"]
    class Installment_Part["Installment Part"]
    class Tariff_Item_Type["Tariff Item Type"]
    class MOD_Contract["{MOD}Contract"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class MOD_Tariff["{MOD}Tariff"]
    Tariff_Item_Type --> Tariff_Item_Type : unnamed
    MOD_Tariff_Item ..> Tariff_Item_Type : unnamed
    MOD_Tariff_Item --> Installment_Part : tarifItem
    MOD_Tariff o-- MOD_Tariff_Item : unnamed
    MOD_Product ..> MOD_Tariff : unnamed
    Installment o-- Installment_Part : unnamed
    MOD_Contract o-- Installment : unnamed
```
