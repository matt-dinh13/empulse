# Fees-back

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/FBACK
- **Diagram ID**: 92347
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class Fees_back_Service["Fees-back Service "]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    Fees_back_Service o-- Payment_Discipline_Parameters : unnamed
```
