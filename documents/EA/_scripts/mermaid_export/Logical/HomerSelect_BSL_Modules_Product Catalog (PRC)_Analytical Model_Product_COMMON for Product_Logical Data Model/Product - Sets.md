# Product - Sets

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model
- **Diagram ID**: 164446
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Product_Set_Type["Product Set Type"]
    class Product_Set["Product Set"]
    class Product_to_Product_Set["Product to Product Set"]
    class Logical_Data_Model_Product_Management["Logical Data Model : Product Management"]
    Product_to_Product_Set ..> Product_Set : unnamed
    Product_Set ..> Product_Set_Type : unnamed
```
