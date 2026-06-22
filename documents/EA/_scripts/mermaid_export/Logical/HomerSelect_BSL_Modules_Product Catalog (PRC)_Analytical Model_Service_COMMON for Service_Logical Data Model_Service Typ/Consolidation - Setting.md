# Consolidation - Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CONS
- **Diagram ID**: 103808
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class Service["Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class Consolidation_Type["Consolidation Type"]
    class Interest_and_Fee_Calculation_Method["Interest and Fee Calculation Method"]
    class Consolidation_Service["Consolidation Service"]
    Consolidation_Service ..> Interest_and_Fee_Calculation_Method : unnamed
    Consolidation_Service ..> Consolidation_Type : unnamed
```
