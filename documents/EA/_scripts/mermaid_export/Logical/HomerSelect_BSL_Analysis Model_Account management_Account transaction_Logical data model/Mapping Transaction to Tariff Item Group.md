# Mapping Transaction to Tariff Item Group

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model
- **Diagram ID**: 162542
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class Transaction_Subtype["Transaction Subtype"]
    class Salesroom["Salesroom"]
    class MOD_Partner["{MOD}Partner"]
    class Salesroom_Cobrand_Group["Salesroom Cobrand Group"]
    class Partner_Cobrand_Group["Partner Cobrand Group"]
    class Cobrand_group["Cobrand group"]
    class Product_Type["Product Type"]
    class Transaction_To_Tariff_Item_Group["Transaction To Tariff Item Group"]
    class Tariff_Item_Group["Tariff Item Group"]
    Transaction_To_Tariff_Item_Group ..> Tariff_Item_Group : unnamed
    Transaction_To_Tariff_Item_Group ..> Product_Type : unnamed
    Salesroom_Cobrand_Group ..> Cobrand_group : unnamed
    Partner_Cobrand_Group ..> Cobrand_group : unnamed
    MOD_Partner o-- Salesroom : unnamed
    MOD_Partner o-- Partner_Cobrand_Group : unnamed
    Salesroom o-- Salesroom_Cobrand_Group : unnamed
    Transaction_To_Tariff_Item_Group ..> Transaction_Subtype : unnamed
```
