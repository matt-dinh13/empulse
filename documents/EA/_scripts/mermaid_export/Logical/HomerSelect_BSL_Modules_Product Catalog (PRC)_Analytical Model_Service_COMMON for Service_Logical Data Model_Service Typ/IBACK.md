# IBACK

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/IBACK
- **Diagram ID**: 163162
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class Logical_Data_Model_Loan_Service_Structure["Logical Data Model : Loan Service Structure"]
    class ADD_Interest_Back_Service["{ADD}Interest Back Service"]
    ADD_Interest_Back_Service o-- Payment_Discipline_Parameters : unnamed
```
