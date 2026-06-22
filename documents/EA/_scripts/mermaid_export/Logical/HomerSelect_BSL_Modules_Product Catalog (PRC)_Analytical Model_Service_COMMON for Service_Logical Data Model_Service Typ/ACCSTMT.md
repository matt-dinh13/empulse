# ACCSTMT

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/ACCSTMT
- **Diagram ID**: 145735
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class DEL_Email_Template["{DEL}Email Template"]
    class Printout_Template["Printout Template"]
    class Logical_Data_Model_Loan_Service_Type_definition["Logical Data Model : Loan Service Type definition"]
    class Account_statement["Account statement"]
    Account_statement ..> Printout_Template : unnamed
    Account_statement ..> DEL_Email_Template : {DEL/}
```
