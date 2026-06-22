# Checking Terms of Loan Service Request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Logical Data Model
- **Diagram ID**: 146236
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class Checked_Document_Attribute["Checked Document Attribute"]
    class Checking_Terms_of_Loan_Service_Request["Checking Terms of Loan Service Request"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class Document["Document"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service["Contract Service"]
    Loan_Service_Request <|-- Checking_Terms_of_Loan_Service_Request : unnamed
    Checking_Terms_of_Loan_Service_Request o-- Checked_Document_Attribute : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request_Document --> Document : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
```
