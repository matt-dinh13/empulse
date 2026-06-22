# Service - Contract Service management via API

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model
- **Diagram ID**: 164580
- **Elements**: 22
- **Connectors**: 11

```mermaid
graph LR
    MOD_Check_conditions_to_contract_service_termination["{MOD}Check conditions to contract service termination"]
    Contract_Services_Contract_Services_POST_replace_contract_se["Contract Services : Contract Services - POST replace contract service"]
    Contract_Services_Contract_Services_PUT_set_contract_service["Contract Services : Contract Services - PUT set contract service status"]
    n_01_759_Get_contract_services_for_self_care(("01.759 Get contract services for self-care"))
    ADD_Update_DataProtectionLevel_for_client_data["{ADD}Update DataProtectionLevel for client data"]
    n_08_495_Cancel_Contract_Service_externally(("08.495 Cancel Contract Service externally"))
    Get_the_latest_Loan_Service_Request_with_Service_Operation_S["Get the latest Loan Service Request with Service Operation Status"]
    Check_conditions_to_contract_service_cancellation["Check conditions to contract service cancellation"]
    Create_Loan_Service_Request_with_Service_Operation_Status["Create Loan Service Request with Service Operation Status"]
    n_01_782_Replace_Contract_Service(("01.782 Replace Contract Service"))
    Validate_Service_replacement_for_REL_contract["Validate Service replacement for REL contract"]
    Contract_Services_Contract_Services_GET_contract_services["Contract Services : Contract Services - GET contract services"]
    Validate_ContractService_cancellation_termination_request["Validate ContractService cancellation, termination request"]
    Get_initial_Contract_service_status["Get initial Contract service status"]
    MOD_08_091_Terminate_Contract_Service_common(("{MOD}08.091 Terminate Contract Service common"))
    Recalculate_Financial_Parameters_on_Service_cancellation["Recalculate Financial Parameters on Service cancellation"]
    MOD_08_096_Cancel_contract_service_common(("{MOD}08.096 Cancel contract service common"))
    n_01_769_Set_Contract_Service_status(("01.769 Set Contract Service status"))
    MOD_01_774_Create_Contract_Service(("{MOD}01.774 Create Contract Service"))
    n_08_490_Terminate_Contract_Service_externally(("08.490 Terminate Contract Service externally"))
    Contract_Services_Contract_Services_POST_create_contract_ser["Contract Services : Contract Services - POST create contract service"]
    External_system[/"External system"/]
    External_system --> n_01_759_Get_contract_services_for_self_care
    Contract_Services_Contract_Services_GET_contract_services -->|unnamed| n_01_759_Get_contract_services_for_self_care
    Contract_Services_Contract_Services_PUT_set_contract_service -->|unnamed| n_01_769_Set_Contract_Service_status
    Contract_Services_Contract_Services_POST_create_contract_ser -->|unnamed| MOD_01_774_Create_Contract_Service
    MOD_01_774_Create_Contract_Service --- External_system
    Contract_Services_Contract_Services_POST_replace_contract_se -->|unnamed| n_01_782_Replace_Contract_Service
    MOD_01_774_Create_Contract_Service -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status
    MOD_01_774_Create_Contract_Service -->|unnamed| Get_initial_Contract_service_status
    External_system --> n_08_490_Terminate_Contract_Service_externally
    External_system --> n_01_769_Set_Contract_Service_status
    External_system --> n_08_495_Cancel_Contract_Service_externally
```
