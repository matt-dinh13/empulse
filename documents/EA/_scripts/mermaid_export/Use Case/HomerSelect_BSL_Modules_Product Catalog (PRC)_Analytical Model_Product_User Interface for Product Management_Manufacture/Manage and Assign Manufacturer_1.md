# Manage and Assign Manufacturer

```mermaid
graph TD
    User["User"]
    Manage_Manufacturers_Manage_Manufacturers["Manage Manufacturers :Manage Manufacturers"]
    DEL_02_621_Manage_manufacturers["{DEL}02.621 Manage manufacturers"]
    Manufacturers_Tab_Manufacturers["Manufacturers :Tab Manufacturers"]
    Manufacturers_Manufacturers_Set["Manufacturers : Manufacturers - Set"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    DEL_02_610_Assign_manufacturers_to_product["{DEL}02.610 Assign manufacturers to product"]
    Manufacturers_Tab_Manufacturers -->|unnamed| DEL_02_610_Assign_manufacturers_to_product
    DEL_02_610_Assign_manufacturers_to_product -->|unnamed| Manufacturers_Manufacturers_Set
    Manufacturers_Tab_Manufacturers -->|unnamed| DEL_02_621_Manage_manufacturers
    DEL_02_621_Manage_manufacturers -->|unnamed| Manage_Manufacturers_Manage_Manufacturers
    User -->|unnamed| DEL_02_610_Assign_manufacturers_to_product
    User -->|unnamed| DEL_02_070_Show_product_version_detail
    User -->|unnamed| DEL_02_621_Manage_manufacturers
    DEL_02_070_Show_product_version_detail -->|unnamed| Manufacturers_Tab_Manufacturers
```
