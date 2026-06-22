# Standard Payment Card

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CRDPST
- **Diagram ID**: 92379
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Service["Service"]
    class External_Card_Type["External Card Type"]
    class Logical_Data_Model_Loan_Service_Setting["Logical Data Model : Loan Service Setting"]
    class Standard_Payment_Card_Service["Standard Payment Card Service"]
    Standard_Payment_Card_Service ..> External_Card_Type : unnamed
    Standard_Payment_Card_Service ..> External_Card_Type : unnamed
    Service --> Logical_Data_Model_Loan_Service_Setting : unnamed
```
