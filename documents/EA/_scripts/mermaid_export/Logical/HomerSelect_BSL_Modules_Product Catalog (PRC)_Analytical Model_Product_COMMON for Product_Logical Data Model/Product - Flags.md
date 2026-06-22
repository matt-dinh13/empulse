# Product - Flags

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model
- **Diagram ID**: 164445
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Product_Flag_Type["Product Flag Type"]
    class Logical_Data_Model_Product_Management["Logical Data Model : Product Management"]
    class MOD_Product["{MOD}Product"]
    class MOD_Product_Flag_Type_Definition["{MOD}Product Flag Type Definition"]
    class Product_Flag["Product Flag"]
    Product_Flag_Type ..> MOD_Product_Flag_Type_Definition : optionally from
    MOD_Product o-- Product_Flag : unnamed
    Product_Flag ..> Product_Flag_Type : unnamed
```
