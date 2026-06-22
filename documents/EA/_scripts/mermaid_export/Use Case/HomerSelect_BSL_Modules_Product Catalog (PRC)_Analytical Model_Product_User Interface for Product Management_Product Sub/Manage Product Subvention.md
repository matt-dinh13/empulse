# Manage Product Subvention

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Subvention/Use Case
- **Diagram ID**: 162490
- **Elements**: 8
- **Connectors**: 10

```mermaid
graph LR
    User[/"User"/]
    User_Interface_Tab_Product_Subventions["User Interface :Tab Product Subventions"]
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    DEL_02_643_Remove_subvention_for_product(("{DEL}02.643 Remove subvention for product"))
    Subventions_Subventions_Set["Subventions :Subventions-Set"]
    Subventions_Subventions_Detail["Subventions : Subventions-Detail"]
    DEL_02_073_Show_detail_of_subvention_for_product(("{DEL}02.073 Show detail of subvention for product"))
    DEL_02_603_Set_subvention_for_product(("{DEL}02.603 Set subvention for product"))
    Subventions_Subventions_Detail -->|unnamed| DEL_02_603_Set_subvention_for_product
    User_Interface_Tab_Product_Subventions -->|unnamed| DEL_02_073_Show_detail_of_subvention_for_product
    DEL_02_073_Show_detail_of_subvention_for_product -->|unnamed| Subventions_Subventions_Detail
    DEL_02_603_Set_subvention_for_product -->|unnamed| Subventions_Subventions_Set
    User_Interface_Tab_Product_Subventions -->|unnamed| DEL_02_643_Remove_subvention_for_product
    User_Interface_Tab_Product_Subventions -->|unnamed| DEL_02_070_Show_product_version_detail
    User --- DEL_02_073_Show_detail_of_subvention_for_product
    User --- DEL_02_643_Remove_subvention_for_product
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_603_Set_subvention_for_product
```
