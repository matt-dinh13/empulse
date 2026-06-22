# Manage Product Variant

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Use Case
- **Diagram ID**: 162478
- **Elements**: 9
- **Connectors**: 11

```mermaid
graph LR
    User[/"User"/]
    DEL_02_607_Remove_product_variant(("{DEL}02.607 Remove product variant"))
    Product_Variants_Variants_Detail["Product Variants :Variants-Detail"]
    Product_Variants_Variants["Product Variants : Variants"]
    Product_Variants_Variants_Set["Product Variants :Variants-Set"]
    MOD_Generating_of_product_variant_code["{MOD}Generating of product variant code"]
    DEL_02_602_Set_product_variant(("{DEL}02.602 Set product variant"))
    DEL_02_072_Show_product_variant_detail(("{DEL}02.072 Show product variant detail"))
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    DEL_02_602_Set_product_variant -->|unnamed| MOD_Generating_of_product_variant_code
    DEL_02_602_Set_product_variant -->|unnamed| Product_Variants_Variants_Set
    DEL_02_602_Set_product_variant -->|unnamed| Product_Variants_Variants
    DEL_02_072_Show_product_variant_detail -->|unnamed| Product_Variants_Variants
    DEL_02_072_Show_product_variant_detail -->|unnamed| Product_Variants_Variants_Detail
    Product_Variants_Variants -->|unnamed| DEL_02_607_Remove_product_variant
    User --- DEL_02_607_Remove_product_variant
    User --- DEL_02_602_Set_product_variant
    User --- DEL_02_072_Show_product_variant_detail
    User --- DEL_02_070_Show_product_version_detail
    DEL_02_070_Show_product_version_detail -->|unnamed| Product_Variants_Variants
```
