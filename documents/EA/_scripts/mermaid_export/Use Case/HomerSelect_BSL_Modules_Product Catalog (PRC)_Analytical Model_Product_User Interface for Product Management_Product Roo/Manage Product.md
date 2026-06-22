# Manage Product

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/Use Case
- **Diagram ID**: 163646
- **Elements**: 25
- **Connectors**: 34

```mermaid
graph LR
    User_Interface_ADD_Bulk_product_operations["User Interface : {ADD}Bulk product operations"]
    DEL_02_110_Bulk_operations(("{DEL}02.110 Bulk operations"))
    DEL_02_140_Export_product_version_changes(("{DEL}02.140 Export product version changes"))
    DEL_02_130_Bulk_cancel_product_version(("{DEL}02.130 Bulk cancel product version"))
    DEL_02_120_Bulk_activate_product_version(("{DEL}02.120 Bulk activate product version"))
    Time[/"Time"/]
    User[/"User"/]
    Automatic_Version_activation_processing["Automatic Version activation processing"]
    Version_activation_procedure["Version activation procedure"]
    DEL_Evaluate_product_search_criteria["{DEL}Evaluate product search criteria"]
    Version_number["Version number"]
    DEL_02_085_Cancel_product_version(("{DEL}02.085 Cancel product version"))
    Search_for_products_Search_for_product["Search for products : Search for product"]
    Show_product_Show_product["Show product : Show product"]
    Main_product_properties_General_Set_main_product_properties["Main product properties - General :Set main product properties"]
    DEL_02_601_Set_main_product_properties(("{DEL}02.601 Set main product properties"))
    MOD_Product_activation_validation_rules["{MOD}Product activation validation rules"]
    DEL_02_080_Create_product_version(("{DEL}02.080 Create product version"))
    n_02_262_Activate_product_version_automatically(("02.262 Activate product version automatically"))
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    Activate_Product_version_job["Activate Product version - job"]
    DEL_02_090_Search_for_products(("{DEL}02.090 Search for products"))
    DEL_02_260_Activate_product_version_manually(("{DEL}02.260 Activate product version manually"))
    DEL_02_060_Create_product_by_copy(("{DEL}02.060 Create product by copy"))
    DEL_02_050_Create_product(("{DEL}02.050 Create product"))
    DEL_02_110_Bulk_operations --- User
    DEL_02_130_Bulk_cancel_product_version -->|unnamed| DEL_02_085_Cancel_product_version
    DEL_02_080_Create_product_version -->|unnamed| Version_number
    DEL_02_060_Create_product_by_copy -->|unnamed| Version_number
    DEL_02_050_Create_product -->|unnamed| Version_number
    DEL_02_090_Search_for_products -->|unnamed| DEL_Evaluate_product_search_criteria
    User_Interface_ADD_Bulk_product_operations -->|unnamed| DEL_02_110_Bulk_operations
    n_02_262_Activate_product_version_automatically -->|unnamed| Automatic_Version_activation_processing
    DEL_02_070_Show_product_version_detail -->|unnamed| Show_product_Show_product
    DEL_02_140_Export_product_version_changes --- User
    DEL_02_130_Bulk_cancel_product_version --- User
    DEL_02_120_Bulk_activate_product_version --- User
    DEL_02_260_Activate_product_version_manually -->|unnamed| Version_activation_procedure
    DEL_02_120_Bulk_activate_product_version -->|unnamed| DEL_02_260_Activate_product_version_manually
    n_02_262_Activate_product_version_automatically -->|unnamed| Activate_Product_version_job
    DEL_02_090_Search_for_products -->|unnamed| Search_for_products_Search_for_product
    DEL_02_601_Set_main_product_properties -->|unnamed| Show_product_Show_product
    DEL_02_260_Activate_product_version_manually -->|unnamed| MOD_Product_activation_validation_rules
    Automatic_Version_activation_processing -->|unnamed| MOD_Product_activation_validation_rules
    DEL_02_601_Set_main_product_properties -->|unnamed| Main_product_properties_General_Set_main_product_properties
    Time --- n_02_262_Activate_product_version_automatically
    User --- DEL_02_120_Bulk_activate_product_version
    User --- DEL_02_085_Cancel_product_version
    User --- DEL_02_060_Create_product_by_copy
    User --- DEL_02_050_Create_product
    User --- DEL_02_080_Create_product_version
    User --> DEL_02_090_Search_for_products
    User --- DEL_02_130_Bulk_cancel_product_version
    User --- DEL_02_110_Bulk_operations
    User --- DEL_02_601_Set_main_product_properties
    User --- DEL_02_090_Search_for_products
    User --- DEL_02_140_Export_product_version_changes
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_260_Activate_product_version_manually
```
