# Loan Restructuring - Setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/LRES
- **Diagram ID**: 128656
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class MOD_Bonus_Services_Impact_Type["{MOD}Bonus Services Impact Type"]
    class Loan_Restructuring_Service["Loan Restructuring Service"]
    Loan_Restructuring_Service ..> MOD_Bonus_Services_Impact_Type : unnamed
```
