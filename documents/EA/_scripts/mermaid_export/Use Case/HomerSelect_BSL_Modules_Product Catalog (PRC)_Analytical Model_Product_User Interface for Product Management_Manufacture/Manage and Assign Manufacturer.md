# Manage and Assign Manufacturer

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Manufacturer Management and Assignment/Use Case
- **Diagram ID**: 162481
- **Elements**: 7
- **Connectors**: 8

```mermaid
graph LR
    User[/"User"/]
    Manage_Manufacturers_Manage_Manufacturers["Manage Manufacturers :Manage Manufacturers"]
    DEL_02_621_Manage_manufacturers(("{DEL}02.621 Manage manufacturers"))
    Manufacturers_Tab_Manufacturers["Manufacturers :Tab Manufacturers"]
    Manufacturers_Manufacturers_Set["Manufacturers : Manufacturers - Set"]
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    DEL_02_610_Assign_manufacturers_to_product(("{DEL}02.610 Assign manufacturers to product"))
    Manufacturers_Tab_Manufacturers -->|unnamed| DEL_02_610_Assign_manufacturers_to_product
    DEL_02_610_Assign_manufacturers_to_product -->|unnamed| Manufacturers_Manufacturers_Set
    Manufacturers_Tab_Manufacturers -->|unnamed| DEL_02_621_Manage_manufacturers
    DEL_02_621_Manage_manufacturers -->|unnamed| Manage_Manufacturers_Manage_Manufacturers
    User --- DEL_02_610_Assign_manufacturers_to_product
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_621_Manage_manufacturers
    DEL_02_070_Show_product_version_detail -->|unnamed| Manufacturers_Tab_Manufacturers
```
