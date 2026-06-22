# Payment service - Settings

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/PAYM
- **Diagram ID**: 154728
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Service["Service"]
    class DEL_Payment_Source_System["{DEL}Payment Source System "]
    class Payment_service["Payment service"]
    class Logical_Data_Model_Loan_Service_Structure["Logical Data Model : Loan Service Structure"]
    Payment_service ..> DEL_Payment_Source_System : unnamed
    Service o-- Payment_service : unnamed
```
