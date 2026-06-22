# Tab Variants

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface
- **Diagram ID**: 156491
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph TD
    DEL_02_602_Set_product_variant["{DEL}02.602 Set product variant"]
    DEL_02_072_Show_product_variant_detail["{DEL}02.072 Show product variant detail"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    diagram_Variants_Set["$diagram:Variants-Set"]
    diagram_Variants_Detail["$diagram:Variants-Detail"]
    Add_variant["Add variant"]
    List_of_Product_variants["List of Product variants"]
    Variants["Variants"]
    DEL_02_607_Remove_product_variant["{DEL}02.607 Remove product variant"]
    List_of_Product_variants -->|unnamed| DEL_02_607_Remove_product_variant
    List_of_Product_variants -->|unnamed| diagram_Variants_Detail
    List_of_Product_variants -->|unnamed| diagram_Variants_Set
    Add_variant -->|unnamed| diagram_Variants_Set
    Variants -->|unnamed| DEL_02_070_Show_product_version_detail
    List_of_Product_variants -->|unnamed| DEL_02_072_Show_product_variant_detail
    Add_variant -->|unnamed| DEL_02_602_Set_product_variant
    List_of_Product_variants -->|unnamed| DEL_02_602_Set_product_variant
```
