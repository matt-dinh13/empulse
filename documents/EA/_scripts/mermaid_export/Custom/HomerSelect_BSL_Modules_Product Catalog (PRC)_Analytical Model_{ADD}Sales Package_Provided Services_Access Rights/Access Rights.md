# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights
- **Diagram ID**: 154062
- **Elements**: 16
- **Connectors**: 8

```mermaid
graph TD
    DEL_09_308_Get_Salesroom_Sales_Item["{DEL}09.308 Get Salesroom Sales Item"]
    DEL_09_308_Get_Salesroom_Sales_Item["{DEL}09.308 Get Salesroom Sales Item"]
    DEL_09_307_Archive_Sales_Package_Assignment["{DEL}09.307 Archive Sales Package Assignment"]
    DEL_09_307_Archive_Sales_Package_Assignment["{DEL}09.307 Archive Sales Package Assignment"]
    DEL_09_306_Get_Sales_Package_Assignment_Code_Lists["{DEL}09.306 Get Sales Package Assignment Code Lists"]
    DEL_09_305_Get_Sales_Package_Assignment["{DEL}09.305 Get Sales Package Assignment"]
    DEL_09_304_Set_Sales_Package_Assignment["{DEL}09.304 Set Sales Package Assignment"]
    DEL_09_306_Get_Sales_Package_Assignment_Code_Lists["{DEL}09.306 Get Sales Package Assignment Code Lists"]
    DEL_09_305_Get_Sales_Package_Assignment["{DEL}09.305 Get Sales Package Assignment"]
    DEL_09_304_Set_Sales_Package_Assignment["{DEL}09.304 Set Sales Package Assignment"]
    DEL_09_303_Get_Sales_Package_Code_Lists["{DEL}09.303 Get Sales Package Code Lists"]
    n_09_302_Get_Sales_Package["09.302 Get Sales Package"]
    n_09_301_Set_Sales_Package["09.301 Set Sales Package"]
    DEL_09_303_Get_Sales_Package_Code_Lists["{DEL}09.303 Get Sales Package Code Lists"]
    DEL_09_302_Get_Sales_Package["{DEL}09.302 Get Sales Package"]
    DEL_09_301_Set_Sales_Package["{DEL}09.301 Set Sales Package"]
    DEL_09_301_Set_Sales_Package -->|unnamed| n_09_301_Set_Sales_Package
    DEL_09_302_Get_Sales_Package -->|unnamed| n_09_302_Get_Sales_Package
    DEL_09_303_Get_Sales_Package_Code_Lists -->|unnamed| DEL_09_303_Get_Sales_Package_Code_Lists
    DEL_09_304_Set_Sales_Package_Assignment -->|unnamed| DEL_09_304_Set_Sales_Package_Assignment
    DEL_09_305_Get_Sales_Package_Assignment -->|unnamed| DEL_09_305_Get_Sales_Package_Assignment
    DEL_09_306_Get_Sales_Package_Assignment_Code_Lists -->|unnamed| DEL_09_306_Get_Sales_Package_Assignment_Code_Lists
    DEL_09_307_Archive_Sales_Package_Assignment -->|unnamed| DEL_09_307_Archive_Sales_Package_Assignment
    DEL_09_308_Get_Salesroom_Sales_Item -->|unnamed| DEL_09_308_Get_Salesroom_Sales_Item
```
