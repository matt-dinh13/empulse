# Salesroom to product

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/Logical Data Model
- **Diagram ID**: 163503
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class MOD_Product["{MOD}Product"]
    class MOD_Salesroom_Product["{MOD}Salesroom Product"]
    class Logical_Data_Model_Salesroom["Logical Data Model : Salesroom"]
    MOD_Salesroom_Product ..> MOD_Product : unnamed
```
