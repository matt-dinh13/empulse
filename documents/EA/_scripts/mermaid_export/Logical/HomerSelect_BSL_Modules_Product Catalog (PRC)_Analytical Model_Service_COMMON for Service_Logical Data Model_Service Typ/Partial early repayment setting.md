# Partial early repayment setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/PER
- **Diagram ID**: 163391
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Logical_Data_Model_Base_Types["Logical Data Model : Base Types"]
    class MOD_Base_Type["{MOD}Base Type"]
    class PER_Type["PER Type"]
    class MOD_Partial_Early_Repayment_Service["{MOD}Partial Early Repayment Service"]
    class Service["Service"]
    MOD_Partial_Early_Repayment_Service ..> MOD_Base_Type : unnamed
    Service <|-- MOD_Partial_Early_Repayment_Service : unnamed
    MOD_Partial_Early_Repayment_Service ..> PER_Type : unnamed
```
