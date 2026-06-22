# Contract Service Request Operation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract Service Request Operation
- **Diagram ID**: 132111
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class Check_RollbackServiceRequest_input_parameters["Check RollbackServiceRequest input parameters"]
    class Check_availability_for_rollback_of_PAYHOL_request["Check availability for rollback of PAYHOL request"]
    class n_01_821_Rollback_Loan_Service_Request_service["01.821 Rollback Loan Service Request service"]
    class ADD_RollbackServiceRequest["{ADD}RollbackServiceRequest"]
    class ADD_RollbackServiceRequestParams["{ADD}RollbackServiceRequestParams"]
    class ADD_Contract_Service_Request_Operation_services["{ADD}Contract Service Request Operation services"]
    class requests["requests"]
    ADD_Contract_Service_Request_Operation_services --> ADD_RollbackServiceRequestParams : unnamed
    ADD_Contract_Service_Request_Operation_services --> ADD_RollbackServiceRequest : unnamed
    ADD_Contract_Service_Request_Operation_services ..> n_01_821_Rollback_Loan_Service_Request_service : unnamed
    n_01_821_Rollback_Loan_Service_Request_service ..> Check_availability_for_rollback_of_PAYHOL_request : unnamed
    n_01_821_Rollback_Loan_Service_Request_service ..> Check_RollbackServiceRequest_input_parameters : unnamed
    requests o-- ADD_Contract_Service_Request_Operation_services : unnamed
```
