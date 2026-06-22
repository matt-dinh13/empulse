# Product Set - Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Set/User Interface
- **Diagram ID**: 109839
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Tab_Product_Sets["Tab Product Sets"]
    DEL_02_650_Assign_Product_Set["{DEL}02.650 Assign Product Set"]
    Cancel["Cancel"]
    OK["OK"]
    ADD_Product_to_Product_Set["{ADD}Product to Product Set"]
    Common_product_properties_header["Common product properties header"]
    Assign_Product_Set["Assign Product Set"]
    Assign_Product_Set -->|unnamed| DEL_02_650_Assign_Product_Set
    OK -->|unnamed| Tab_Product_Sets
    Cancel -->|unnamed| Tab_Product_Sets
```
