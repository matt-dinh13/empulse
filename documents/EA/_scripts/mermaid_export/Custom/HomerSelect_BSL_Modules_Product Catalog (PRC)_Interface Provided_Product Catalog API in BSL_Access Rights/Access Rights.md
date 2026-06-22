# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/Access Rights
- **Diagram ID**: 144256
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    GET_Subventions["GET Subventions"]
    DEL_02_602_Set_product_variant["{DEL}02.602 Set product variant"]
    n_02_601_Set_main_product_properties["02.601 Set main product properties"]
    n_02_810_Provide_Product_Data["02.810 Provide Product Data"]
    DEL_PUT_products["{DEL}PUT products"]
    DEL_GET_products["{DEL}GET products"]
    DEL_GET_products -->|unnamed| n_02_810_Provide_Product_Data
    DEL_PUT_products -->|unnamed| n_02_601_Set_main_product_properties
    DEL_PUT_products -->|unnamed| DEL_02_602_Set_product_variant
```
