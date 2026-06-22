# tab Sales Packages

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface
- **Diagram ID**: 149523
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    ADD_09_277_Remove_sales_package_from_salesroom["{ADD}09.277 Remove sales package from salesroom"]
    User_Interface_Assign_Sales_Package_to_Salesroom["User Interface : Assign Sales Package to Salesroom"]
    ADD_09_276_Assign_sales_package_to_salesroom["{ADD}09.276 Assign sales package to salesroom"]
    n_09_240_Show_salesroom["09.240 Show salesroom"]
    Current_sales_package_assignments["Current sales package assignments"]
    MOD_Sales_Package_Assignments["{MOD}Sales Package Assignments"]
    MOD_Assign["{MOD}Assign"]
    tab_Sales_Packages["tab Sales Packages"]
    tab_Sales_Packages -->|unnamed| n_09_240_Show_salesroom
    MOD_Assign -->|unnamed| ADD_09_276_Assign_sales_package_to_salesroom
    MOD_Sales_Package_Assignments -->|unnamed| ADD_09_277_Remove_sales_package_from_salesroom
```
