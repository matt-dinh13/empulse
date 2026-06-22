# Assign Financing Package

```mermaid
graph TD
    User_Interface_Financing_Package_Assign["User Interface : Financing Package - Assign"]
    User_Interface_Tab_Financing_Package["User Interface : Tab Financing Package"]
    DEL_02_642_Assign_Financial_Packages_to_Product["{DEL}02.642 Assign Financial Packages to Product"]
    User["User"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    DEL_02_642_Assign_Financial_Packages_to_Product -->|unnamed| User_Interface_Tab_Financing_Package
    DEL_02_642_Assign_Financial_Packages_to_Product -->|unnamed| User_Interface_Financing_Package_Assign
    User -->|unnamed| DEL_02_070_Show_product_version_detail
    User -->|unnamed| DEL_02_642_Assign_Financial_Packages_to_Product
    DEL_02_070_Show_product_version_detail -->|unnamed| User_Interface_Tab_Financing_Package
```
