# Access Rights

```mermaid
graph TD
    MOD_PUT_product_activations["{MOD}PUT product activations"]
    n_02_260_Activate_product_version_manually["02.260 Activate product version manually"]
    n_02_260_Activate_product_version["02.260 Activate product version"]
    POST_product_validation["POST product-validation"]
    GET_flat_rate_to_air["GET flat-rate-to-air"]
    n_02_850_Calculate_AIR_from_flat_rate["02.850 Calculate AIR from flat rate"]
    DELETE_products["DELETE products"]
    MOD_POST_products["{MOD}POST products"]
    MOD_PUT_products["{MOD}PUT products"]
    GET_product_versions["GET product-versions"]
    GET_products["GET products"]
    n_02_601_Set_main_product_properties["02.601 Set main product properties"]
    n_02_085_Cancel_product_version["02.085 Cancel product version"]
    n_02_080_Create_product_version["02.080 Create product version"]
    n_02_050_Create_product["02.050 Create product"]
    n_02_805_Provide_List_of_Product_Versions["02.805 Provide List of Product Versions"]
    n_02_810_Provide_Product_Data["02.810 Provide Product Data"]
    MOD_PUT_product_activations -->|unnamed| n_02_260_Activate_product_version
    MOD_PUT_product_activations -->|unnamed| n_02_260_Activate_product_version_manually
    MOD_PUT_products -->|unnamed| n_02_601_Set_main_product_properties
    MOD_PUT_products -->|unnamed| n_02_080_Create_product_version
    MOD_PUT_products -->|unnamed| n_02_260_Activate_product_version_manually
    MOD_PUT_products -->|unnamed| n_02_260_Activate_product_version
    GET_product_versions -->|unnamed| n_02_805_Provide_List_of_Product_Versions
    GET_flat_rate_to_air -->|unnamed| n_02_850_Calculate_AIR_from_flat_rate
    MOD_POST_products -->|unnamed| n_02_050_Create_product
    MOD_POST_products -->|unnamed| n_02_260_Activate_product_version
    MOD_POST_products -->|unnamed| n_02_080_Create_product_version
    MOD_POST_products -->|unnamed| n_02_260_Activate_product_version_manually
    MOD_POST_products -->|unnamed| n_02_601_Set_main_product_properties
    POST_product_validation -->|unnamed| n_02_810_Provide_Product_Data
    DELETE_products -->|unnamed| n_02_085_Cancel_product_version
    GET_products -->|unnamed| n_02_810_Provide_Product_Data
```
