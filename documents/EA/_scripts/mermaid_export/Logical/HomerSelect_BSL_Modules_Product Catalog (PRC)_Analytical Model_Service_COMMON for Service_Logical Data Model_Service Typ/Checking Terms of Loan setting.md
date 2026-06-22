# Checking Terms of Loan setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CHECKTL
- **Diagram ID**: 113639
- **Elements**: 4
- **Connectors**: 1

```mermaid
classDiagram
    class Service["Service"]
    class Document_Type["Document Type"]
    class MOD_Checking_Terms_of_Loan["{MOD}Checking Terms of Loan"]
    class Logical_Data_Model_Loan_Service_Structure["Logical Data Model : Loan Service Structure"]
    MOD_Checking_Terms_of_Loan ..> Document_Type : unnamed
```
