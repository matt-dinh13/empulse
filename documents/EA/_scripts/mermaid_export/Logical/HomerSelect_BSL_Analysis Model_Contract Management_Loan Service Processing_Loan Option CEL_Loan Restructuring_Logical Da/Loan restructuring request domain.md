# Loan restructuring request domain

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model
- **Diagram ID**: 146243
- **Elements**: 21
- **Connectors**: 25

```mermaid
classDiagram
    class Contract_Supplement_Scoring["Contract Supplement Scoring"]
    class Contract_Supplement["Contract Supplement"]
    class Scoring["Scoring"]
    class Loan_Service_Request_Presented_Interest_Rate["Loan Service Request Presented Interest Rate"]
    class Request_Reason_Type["Request Reason Type"]
    class Loan_Restructuring_Offer["Loan Restructuring Offer"]
    class Document["Document"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class Loan_Restructuring_Request["Loan Restructuring Request"]
    class Recalculation_Reason["Recalculation Reason"]
    class Installment_Type["Installment Type"]
    class Service_Offer_Installment_Part["Service Offer Installment Part"]
    class Service_Offer_Installment["Service Offer Installment"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Service["Service"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service["Contract Service"]
    class MOD_Contract["{MOD}Contract"]
    Loan_Restructuring_Request ..> Request_Reason_Type : unnamed
    Loan_Restructuring_Request o-- Loan_Restructuring_Offer : unnamed
    Loan_Service_Request <|-- Loan_Restructuring_Request : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request_Document --> Document : unnamed
    Service_Offer_Installment o-- Service_Offer_Installment_Part : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Loan_Service_Request --> MOD_Contract : unnamed
    Loan_Service_Request o-- Service_Offer_Installment : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Presented_Interest_Rate : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
    Contract_Service --> Service : unnamed
    Service_Offer_Installment --> Recalculation_Reason : unnamed
    Service_Offer_Installment --> Installment_Type : unnamed
    Contract_Supplement o-- Contract_Supplement_Scoring : unnamed
    Contract_Supplement_Scoring --> Loan_Service_Request : {ADD CLM-95}
    Contract_Supplement_Scoring --> Scoring : unnamed
    Contract_Supplement --> Contract_Service : Contract Service Supplement
    Loan_Service_Request --> Contract_Supplement : unnamed
    MOD_Contract o-- Contract_Service : unnamed
    MOD_Contract o-- Contract_Supplement : unnamed
```
