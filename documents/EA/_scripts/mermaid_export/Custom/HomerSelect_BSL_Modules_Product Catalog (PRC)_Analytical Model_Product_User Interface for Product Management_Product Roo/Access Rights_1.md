# Access Rights

```mermaid
graph TD
    DEL_02_110_Bulk_operations["{DEL}02.110 Bulk operations"]
    DEL_02_110_Bulk_operations["{DEL}02.110 Bulk operations"]
    DEL_02_140_Export_product_version_changes["{DEL}02.140 Export product version changes"]
    DEL_02_130_Bulk_cancel_product_version["{DEL}02.130 Bulk cancel product version"]
    DEL_02_120_Bulk_activate_product_version["{DEL}02.120 Bulk activate product version"]
    DEL_02_140_Export_product_version_changes["{DEL}02.140 Export product version changes"]
    DEL_02_130_Bulk_cancel_product_version["{DEL}02.130 Bulk cancel product version"]
    DEL_02_120_Bulk_activate_product_version["{DEL}02.120 Bulk activate product version"]
    n_02_262_Activate_product_version_automatically["02.262 Activate product version automatically"]
    n_02_262_Activate_product_version_automatically["02.262 Activate product version automatically"]
    n_02_260_Activate_product_version["02.260 Activate product version"]
    DEL_02_085_Cancel_product_version["{DEL}02.085 Cancel product version"]
    n_02_085_Cancel_product_version["02.085 Cancel product version"]
    n_02_601_Set_main_product_properties["02.601 Set main product properties"]
    n_02_080_Create_product_version["02.080 Create product version"]
    n_02_260_Activate_product_version_manually["02.260 Activate product version manually"]
    DEL_02_060_Create_product_by_copy["{DEL}02.060 Create product by copy"]
    n_02_050_Create_product["02.050 Create product"]
    n_02_070_Show_product_version_detail["02.070 Show product version detail"]
    n_02_090_Search_for_products["02.090 Search for products"]
    DEL_02_601_Set_main_product_properties["{DEL}02.601 Set main product properties"]
    DEL_02_080_Create_product_version["{DEL}02.080 Create product version"]
    DEL_02_260_Activate_product_version_manually["{DEL}02.260 Activate product version manually"]
    DEL_02_060_Create_product_by_copy["{DEL}02.060 Create product by copy"]
    DEL_02_050_Create_product["{DEL}02.050 Create product"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    DEL_02_090_Search_for_products["{DEL}02.090 Search for products"]
    DEL_02_260_Activate_product_version_manually -->|unnamed| n_02_260_Activate_product_version
    DEL_02_120_Bulk_activate_product_version -->|unnamed| DEL_02_260_Activate_product_version_manually
    DEL_02_260_Activate_product_version_manually -->|unnamed| n_02_260_Activate_product_version_manually
    DEL_02_130_Bulk_cancel_product_version -->|unnamed| DEL_02_085_Cancel_product_version
    DEL_02_130_Bulk_cancel_product_version -->|unnamed| DEL_02_130_Bulk_cancel_product_version
    DEL_02_060_Create_product_by_copy -->|unnamed| DEL_02_060_Create_product_by_copy
    DEL_02_090_Search_for_products -->|unnamed| n_02_090_Search_for_products
    DEL_02_601_Set_main_product_properties -->|unnamed| n_02_601_Set_main_product_properties
    DEL_02_070_Show_product_version_detail -->|unnamed| n_02_070_Show_product_version_detail
    n_02_262_Activate_product_version_automatically -->|unnamed| n_02_262_Activate_product_version_automatically
    DEL_02_080_Create_product_version -->|unnamed| n_02_080_Create_product_version
    DEL_02_110_Bulk_operations -->|unnamed| DEL_02_110_Bulk_operations
    DEL_02_085_Cancel_product_version -->|unnamed| n_02_085_Cancel_product_version
    DEL_02_050_Create_product -->|unnamed| n_02_050_Create_product
    DEL_02_120_Bulk_activate_product_version -->|unnamed| DEL_02_120_Bulk_activate_product_version
    DEL_02_140_Export_product_version_changes -->|unnamed| DEL_02_140_Export_product_version_changes
```
