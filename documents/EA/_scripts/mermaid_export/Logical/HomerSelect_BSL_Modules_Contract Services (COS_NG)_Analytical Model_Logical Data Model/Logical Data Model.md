# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model
- **Diagram ID**: 163454
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class Contract_Service_Status_Reason["Contract Service Status Reason"]
    class Contract_Card_Service["Contract Card Service"]
    class Contract_Insurance_Service["Contract Insurance Service"]
    class Contract_Service_Status["Contract Service Status"]
    class Contract_Service["Contract Service"]
    class Service_Operation_Status_Type["Service Operation Status Type"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service_Role["Contract Service Role"]
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Service_Operation_Status_Type : unnamed
    Contract_Service <|-- Contract_Card_Service : unnamed
    Contract_Service <|-- Contract_Insurance_Service : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Contract_Service o-- Contract_Service_Role : unnamed
    Contract_Service --> Contract_Service_Status : unnamed
    Contract_Service --> Contract_Service_Status_Reason : unnamed
```
