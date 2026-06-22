# Tab Product Sets

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Set/User Interface
- **Diagram ID**: 109838
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    Product_Set_Assign["Product Set - Assign"]
    DEL_02_650_Assign_Product_Set["{DEL}02.650 Assign Product Set"]
    ADD_Assign_product_set["{ADD}Assign product set"]
    Product_Set["Product Set"]
    Product_Sets["Product Sets"]
    ADD_Assign_product_set -->|unnamed| DEL_02_650_Assign_Product_Set
    ADD_Assign_product_set -->|unnamed| Product_Set_Assign
    Product_Sets -->|unnamed| DEL_02_070_Show_product_version_detail
```
