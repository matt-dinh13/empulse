# Tariff Items

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Use Case
- **Diagram ID**: 162786
- **Elements**: 10
- **Connectors**: 7

```mermaid
graph LR
    User[/"User"/]
    Use_Case_Tariffs["Use Case : Tariffs"]
    Tariff_Item_Code_generation["Tariff Item Code generation"]
    Set_Tariff_Item_Set_Tariff_Item["Set Tariff Item : Set Tariff Item"]
    Fee_Penalties_detail_form_Tariff_Item_detail["Fee/Penalties detail form :Tariff Item detail"]
    Tariff_detail_form_Show_Tariff["Tariff detail form :Show Tariff"]
    DEL_04_050_Show_tariff_item_detail(("{DEL}04.050 Show tariff item detail"))
    DEL_04_020_Create_tariff_item(("{DEL}04.020 Create tariff item"))
    DEL_04_040_Update_tariff_item(("{DEL}04.040 Update tariff item"))
    DEL_04_030_Remove_tariff_item(("{DEL}04.030 Remove tariff item"))
    DEL_04_050_Show_tariff_item_detail -->|unnamed| Fee_Penalties_detail_form_Tariff_Item_detail
    DEL_04_040_Update_tariff_item -->|unnamed| Set_Tariff_Item_Set_Tariff_Item
    DEL_04_020_Create_tariff_item -->|unnamed| Tariff_Item_Code_generation
    User --- DEL_04_030_Remove_tariff_item
    User --- DEL_04_020_Create_tariff_item
    User --- DEL_04_050_Show_tariff_item_detail
    User --- DEL_04_040_Update_tariff_item
```
