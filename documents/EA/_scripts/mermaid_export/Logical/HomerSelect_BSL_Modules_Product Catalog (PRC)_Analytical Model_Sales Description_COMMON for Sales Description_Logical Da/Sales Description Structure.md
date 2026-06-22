# Sales Description Structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Sales Description/COMMON for Sales Description/Logical Data Model
- **Diagram ID**: 161078
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Sales_Description_Attribute_Localized_Value["Sales Description Attribute Localized Value"]
    class MOD_Entity_type["{MOD}Entity type"]
    class MOD_Sales_Description_Assignment["{MOD}Sales Description Assignment"]
    class MOD_Sales_Description_Attribute_Type["{MOD}Sales Description Attribute Type"]
    class Sales_Description_Attribute["Sales Description Attribute"]
    class Sales_Description["Sales Description"]
    MOD_Sales_Description_Assignment ..> Sales_Description : unnamed
    Sales_Description o-- Sales_Description_Attribute : unnamed
    Sales_Description_Attribute o-- Sales_Description_Attribute_Localized_Value : unnamed
    Sales_Description_Attribute ..> MOD_Sales_Description_Attribute_Type : unnamed
    MOD_Sales_Description_Assignment ..> MOD_Entity_type : unnamed
```
