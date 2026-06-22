# UI for management of Sales Package

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/Use Case
- **Diagram ID**: 162654
- **Elements**: 8
- **Connectors**: 12

```mermaid
graph LR
    DEL_09_302_Get_Sales_Package(("{DEL}09.302 Get Sales Package"))
    DEL_09_301_Set_Sales_Package(("{DEL}09.301 Set Sales Package"))
    DEL_09_315_Show_Sales_Package_detail_UI(("{DEL}09.315 Show Sales Package detail UI"))
    DEL_09_314_Clone_Sales_Package_UI(("{DEL}09.314 Clone Sales Package UI"))
    DEL_09_313_Search_Sales_Package_UI(("{DEL}09.313 Search Sales Package UI"))
    DEL_09_312_Update_Sales_Package_UI(("{DEL}09.312 Update Sales Package UI"))
    DEL_09_311_Create_new_Sales_Package_UI(("{DEL}09.311 Create new Sales Package UI"))
    User[/"User"/]
    DEL_09_314_Clone_Sales_Package_UI -.->|include| DEL_09_301_Set_Sales_Package
    DEL_09_311_Create_new_Sales_Package_UI -.->|include| DEL_09_301_Set_Sales_Package
    DEL_09_312_Update_Sales_Package_UI -.->|include| DEL_09_301_Set_Sales_Package
    DEL_09_315_Show_Sales_Package_detail_UI -.->|include| DEL_09_302_Get_Sales_Package
    DEL_09_313_Search_Sales_Package_UI -.->|include| DEL_09_302_Get_Sales_Package
    DEL_09_314_Clone_Sales_Package_UI -.->|include| DEL_09_302_Get_Sales_Package
    DEL_09_312_Update_Sales_Package_UI -.->|include| DEL_09_302_Get_Sales_Package
    User --- DEL_09_311_Create_new_Sales_Package_UI
    User --- DEL_09_314_Clone_Sales_Package_UI
    User --- DEL_09_313_Search_Sales_Package_UI
    User --- DEL_09_315_Show_Sales_Package_detail_UI
    User --- DEL_09_312_Update_Sales_Package_UI
```
