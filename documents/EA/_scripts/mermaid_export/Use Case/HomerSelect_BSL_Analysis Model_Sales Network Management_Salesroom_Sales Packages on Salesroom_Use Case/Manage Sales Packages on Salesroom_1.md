# Manage Sales Packages on Salesroom

```mermaid
graph TD
    DEL_09_304_Set_Sales_Package_Assignment["{DEL}09.304 Set Sales Package Assignment"]
    DEL_09_305_Get_Sales_Package_Assignment["{DEL}09.305 Get Sales Package Assignment"]
    DEL_09_307_Archive_Sales_Package_Assignment["{DEL}09.307 Archive Sales Package Assignment"]
    User_Interface_Assign_Sales_Package_to_Salesroom["User Interface : Assign Sales Package to Salesroom"]
    User["User"]
    ADD_09_277_Remove_sales_package_from_salesroom["{ADD}09.277 Remove sales package from salesroom"]
    ADD_09_276_Assign_sales_package_to_salesroom["{ADD}09.276 Assign sales package to salesroom"]
    ADD_09_277_Remove_sales_package_from_salesroom -->|unnamed| DEL_09_307_Archive_Sales_Package_Assignment
    ADD_09_276_Assign_sales_package_to_salesroom -->|unnamed| DEL_09_307_Archive_Sales_Package_Assignment
    ADD_09_276_Assign_sales_package_to_salesroom -->|unnamed| DEL_09_305_Get_Sales_Package_Assignment
    ADD_09_276_Assign_sales_package_to_salesroom -->|unnamed| DEL_09_304_Set_Sales_Package_Assignment
    User -->|unnamed| ADD_09_277_Remove_sales_package_from_salesroom
    User -->|unnamed| ADD_09_276_Assign_sales_package_to_salesroom
```
