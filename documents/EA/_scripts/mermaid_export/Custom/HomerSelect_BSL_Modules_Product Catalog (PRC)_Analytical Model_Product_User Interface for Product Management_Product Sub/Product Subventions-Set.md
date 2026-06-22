# Product Subventions-Set

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Subvention/User Interface
- **Diagram ID**: 142277
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Subvention_Set["Subvention-Set"]
    Common_product_properties_header["Common product properties header"]
    User_Interface_Tab_Product_Subventions["User Interface :Tab Product Subventions"]
    Cancel["Cancel"]
    Save["Save"]
    DEL_02_603_Set_subvention_for_product["{DEL}02.603 Set subvention for product"]
    Set_subvention["Set subvention"]
    Set_subvention -->|unnamed| DEL_02_603_Set_subvention_for_product
    Cancel -->|unnamed| User_Interface_Tab_Product_Subventions
    Save -->|unnamed| User_Interface_Tab_Product_Subventions
```
