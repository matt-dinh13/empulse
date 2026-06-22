# Payment holiday rollback

```mermaid
graph TD
    System_event["System event"]
    n_01_821_Rollback_Loan_Service_Request_service["01.821 Rollback Loan Service Request service"]
    Contract_Service_Request_Operation_Contract_Service_Request_["Contract Service Request Operation : Contract Service Request Operation"]
    External_system["External system"]
    User["User"]
    MOD_System_event_processing_setting["{MOD}System event processing setting"]
    MOD_08_352_Process_LoanServiceRequestRollbackSE_event["{MOD}08.352 Process LoanServiceRequestRollbackSE event"]
    Check_availability_for_rollback_of_PAYHOL_request["Check availability for rollback of PAYHOL request"]
    User_Interface_ADD_Rollback_executed_service_request["User Interface : {ADD}Rollback executed service request"]
    n_08_351_Rollback_loan_service_request["08.351 Rollback loan service request"]
    User_Interface_Model_Tab_Collection_tools_requests_managemen["User Interface Model : Tab - Collection tools requests management"]
    External_system -->|unnamed| n_01_821_Rollback_Loan_Service_Request_service
    n_01_821_Rollback_Loan_Service_Request_service -->|unnamed| Check_availability_for_rollback_of_PAYHOL_request
    System_event -->|unnamed| MOD_08_352_Process_LoanServiceRequestRollbackSE_event
```
