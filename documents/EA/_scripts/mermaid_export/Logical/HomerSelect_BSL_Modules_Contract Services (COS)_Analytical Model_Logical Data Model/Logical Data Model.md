# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Logical Data Model
- **Diagram ID**: 161474
- **Elements**: 8
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_Loan_Service_Request_Processing_Result["{ADD}Loan Service Request Processing Result"]
    class Contract_Service_Status["Contract Service Status"]
    class Contract_Service["Contract Service"]
    class Service_Operation_Status_Type["Service Operation Status Type"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Loan_Service_Request["Loan Service Request"]
    class COS_Contract_Service_Role["COS.Contract Service Role"]
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Loan_Service_Request o-- ADD_Loan_Service_Request_Processing_Result : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Service_Operation_Status_Type : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Contract_Service o-- COS_Contract_Service_Role : unnamed
    Contract_Service --> Contract_Service_Status : unnamed
```
