# Sales Package

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/COMMON for Sales Package/Logical Data Model
- **Diagram ID**: 104974
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Salesroom["Salesroom"]
    class Salesroom_To_Sales_Package["Salesroom To Sales Package"]
    class Sales_Package_Item_Type["Sales Package Item Type"]
    class Sales_Package_Item["Sales Package Item"]
    class MOD_Product["{MOD}Product"]
    class Service["Service"]
    class Sales_Package["Sales Package"]
    Salesroom_To_Sales_Package ..> Sales_Package : unnamed
    Sales_Package o-- Sales_Package_Item : unnamed
    Sales_Package_Item ..> Service : unnamed
    Sales_Package_Item ..> MOD_Product : unnamed
    Sales_Package_Item ..> Sales_Package_Item_Type : unnamed
    Salesroom_To_Sales_Package ..> Salesroom : unnamed
```
