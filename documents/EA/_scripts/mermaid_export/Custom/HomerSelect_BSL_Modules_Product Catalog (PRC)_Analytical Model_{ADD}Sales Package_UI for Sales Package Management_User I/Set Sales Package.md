# Set Sales Package

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface
- **Diagram ID**: 155351
- **Elements**: 19
- **Connectors**: 7

```mermaid
graph TD
    Sales_Package_Management_and_Assignment_rules_for_transforma["Sales Package Management and Assignment - rules for transformation of ValidFrom/ValidTo from UI"]
    User_Interface_Search_Sales_Package["User Interface : Search Sales Package"]
    Current_sales_package_item_assignments["Current sales package item assignments"]
    User_Interface_Assign_Sales_Package_Items["User Interface : Assign Sales Package Items"]
    Services["Services"]
    User_Interface_Show_Sales_Package["User Interface : Show Sales Package"]
    DEL_09_314_Clone_Sales_Package_UI["{DEL}09.314 Clone Sales Package UI"]
    DEL_09_312_Update_Sales_Package_UI["{DEL}09.312 Update Sales Package UI"]
    DEL_09_311_Create_new_Sales_Package_UI["{DEL}09.311 Create new Sales Package UI"]
    Active["Active"]
    Description["Description"]
    Save["Save"]
    Cancel["Cancel"]
    Products["Products"]
    Assign_Items["Assign Items"]
    Items["Items"]
    Code["Code"]
    Name["Name"]
    Set_Sales_Package["Set Sales Package"]
    Set_Sales_Package -->|unnamed| DEL_09_311_Create_new_Sales_Package_UI
    Set_Sales_Package -->|unnamed| DEL_09_312_Update_Sales_Package_UI
    Set_Sales_Package -->|unnamed| DEL_09_314_Clone_Sales_Package_UI
    Save -->|unnamed| User_Interface_Show_Sales_Package
    Cancel -->|unnamed| User_Interface_Show_Sales_Package
    Assign_Items -->|unnamed| User_Interface_Assign_Sales_Package_Items
    Set_Sales_Package -->|unnamed| Sales_Package_Management_and_Assignment_rules_for_transforma
```
