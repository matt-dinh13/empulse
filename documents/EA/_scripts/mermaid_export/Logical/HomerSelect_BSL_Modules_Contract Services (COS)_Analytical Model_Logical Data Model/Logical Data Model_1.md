# Logical Data Model

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
    Loan_Service_Request_Status_Transition --> Loan_Service_Request : unnamed
    ADD_Loan_Service_Request_Processing_Result --> Loan_Service_Request : unnamed
    Loan_Service_Request_Status_Transition --> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request --> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request --> Service_Operation_Status_Type : unnamed
    Loan_Service_Request --> Contract_Service : unnamed
    COS_Contract_Service_Role --> Contract_Service : unnamed
    Contract_Service --> Contract_Service_Status : unnamed
```
