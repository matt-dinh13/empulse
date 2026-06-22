# Payment holiday request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Logical Data Model
- **Diagram ID**: 94616
- **Elements**: 11
- **Connectors**: 11

```mermaid
classDiagram
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class Document["Document"]
    class Document_Type["Document Type"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class DMS_File["DMS File"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Payment_Holiday_Request["Payment Holiday Request"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service["Contract Service"]
    Loan_Service_Request <|-- Payment_Holiday_Request : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request_Document --> Document : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
    Document --> Document_Type : unnamed
    DMS_File --> DMS_File : unnamed
```
