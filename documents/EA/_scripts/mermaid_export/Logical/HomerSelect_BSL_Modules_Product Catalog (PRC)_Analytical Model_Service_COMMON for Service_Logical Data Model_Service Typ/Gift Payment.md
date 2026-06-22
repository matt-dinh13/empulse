# Gift Payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GIFTP
- **Diagram ID**: 92351
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class Gift_Payment_Service["Gift Payment Service "]
    Gift_Payment_Service --> Payment_Discipline_Parameters : unnamed
```
