# LSR.Insurance Offer - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Logical Data Model
- **Diagram ID**: 164177
- **Elements**: 11
- **Connectors**: 11

```mermaid
classDiagram
    class ADD_Insurance_Offer_Request["{ADD}Insurance Offer Request"]
    class Loan_Service_Request_Presented_Interest_Rate["Loan Service Request Presented Interest Rate"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service["Contract Service"]
    unnamed --> Charged_Fee_To_Request : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Presented_Interest_Rate : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request <|-- ADD_Insurance_Offer_Request : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    unnamed --> ADD_Insurance_Offer_Request : unnamed
```
