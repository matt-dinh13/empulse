# Assign Product Set

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Set/Use Case
- **Diagram ID**: 162485
- **Elements**: 5
- **Connectors**: 6

```mermaid
graph LR
    User_Interface_Product_Set_Assign["User Interface : Product Set - Assign"]
    User_Interface_Tab_Product_Sets["User Interface : Tab Product Sets"]
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    DEL_02_650_Assign_Product_Set(("{DEL}02.650 Assign Product Set"))
    User[/"User"/]
    DEL_02_650_Assign_Product_Set --- User
    DEL_02_650_Assign_Product_Set -->|unnamed| User_Interface_Tab_Product_Sets
    DEL_02_650_Assign_Product_Set -->|unnamed| User_Interface_Product_Set_Assign
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_650_Assign_Product_Set
    DEL_02_070_Show_product_version_detail -->|unnamed| User_Interface_Tab_Product_Sets
```
