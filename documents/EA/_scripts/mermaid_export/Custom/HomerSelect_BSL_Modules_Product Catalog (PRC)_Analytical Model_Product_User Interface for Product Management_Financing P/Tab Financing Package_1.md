# Tab Financing Package

```mermaid
graph TD
    Financing_Package_Assign["Financing Package - Assign"]
    User_Interface_Show_product["User Interface : Show product"]
    DEL_02_642_Assign_Financial_Packages_to_Product["{DEL}02.642 Assign Financial Packages to Product"]
    Assign_Financing_Packages["Assign Financing Packages"]
    Financing_Packages["Financing Packages"]
    Financing_Packages["Financing Packages"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    Financing_Packages -->|unnamed| DEL_02_070_Show_product_version_detail
    Assign_Financing_Packages -->|unnamed| DEL_02_642_Assign_Financial_Packages_to_Product
    Assign_Financing_Packages -->|unnamed| Financing_Package_Assign
```
