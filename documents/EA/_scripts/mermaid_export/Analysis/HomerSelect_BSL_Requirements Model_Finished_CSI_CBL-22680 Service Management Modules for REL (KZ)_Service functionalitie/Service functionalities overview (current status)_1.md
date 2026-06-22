# Service functionalities overview (current status)

```mermaid
graph TD
    Activate_Deactivate_Service["Activate/Deactivate Service"]
    Activate_Service["Activate Service"]
    Process_Contract_notifications["Process Contract notifications"]
    el_1820519["Text"]
    Cancel_Service["Cancel Service"]
    Terminate_Service["Terminate Service"]
    Deactivate_Insurance_Service["Deactivate Insurance Service"]
    Activate_Insurance_service["Activate Insurance service"]
    BSL_Installments["BSL Installments"]
    Request_CEL_Account_changes["Request CEL Account changes"]
    Cancel_Insurance_Service["Cancel Insurance Service"]
    Terminate_Insurance_Service["Terminate Insurance Service"]
    Add_insurance_service["Add insurance service"]
    PCG_Service_definitions["PCG:Service definitions"]
    Process_Account_Closure_notifications["Process Account Closure notifications"]
    Get_Loan_Service_data["Get Loan Service data"]
    Stream_Loan_Service_data["Stream Loan Service data "]
    Show_Service_operation_status["Show Service operation status"]
    Service_request_functionalities_overview["Service request functionalities overview"]
    Show_services_on_contract["Show services on contract"]
    Process_service_operation_notification["Process service operation notification"]
    Activate_contract["Activate contract"]
    Sign_contract["Sign contract"]
    Set_contract_service_parameters_CEL["Set contract service parameters (CEL)"]
    Change_bundled_service["Change bundled service"]
    Cancel_service["Cancel service"]
    Process_offer_services["Process offer services"]
    Activate_Deactivate_Service["Activate/Deactivate Service"]
    Terminate_service["Terminate service"]
    Replace_service_on_contract["Replace service on contract"]
    AM["AM"]
    Generate_available_services["Generate available services"]
    BSL_External_system["BSL/External system"]
    Contract_Service["Contract Service"]
    Contract["Contract"]
    Offer_Service_Params["Offer Service Params"]
    Offer_Financial_Params["Offer Financial Params"]
    Contract_origination["Contract origination"]
    Add_service_to_contract["Add service to contract"]
    Contract_Service -->|unnamed| Stream_Loan_Service_data
    Process_service_operation_notification -->|unnamed| Activate_Deactivate_Service
    BSL_External_system -->|unnamed| Cancel_service
    Request_CEL_Account_changes -->|unnamed| Cancel_service
    Cancel_Insurance_Service -->|unnamed| Cancel_service
    Terminate_service -->|ContractServiceChange trigger| Change_bundled_service
    Cancel_service -->|ContractServiceChange trigger| Change_bundled_service
    Sign_contract -->|unnamed| Set_contract_service_parameters_CEL
    Activate_contract -->|unnamed| Set_contract_service_parameters_CEL
    AM -->|Service switched-on/off /add /replace/cancel/terminate result| Process_service_operation_notification
    Contract_origination -->|unnamed| Process_offer_services
    BSL_External_system -->|unnamed| Show_Service_operation_status
    Activate_Insurance_service -->|unnamed| Activate_Deactivate_Service
    Contract_Service -->|unnamed| Get_Loan_Service_data
    AM -->|Account paid-off/written-off/closed| Process_Account_Closure_notifications
    BSL_Installments -->|get installment info| Request_CEL_Account_changes
    Request_CEL_Account_changes -->|calculate loan financial parameters| BSL_Installments
    Process_Account_Closure_notifications -->|unnamed| Terminate_Service
    Process_Account_Closure_notifications -->|unnamed| Cancel_Service
    Sign_contract -->|unnamed| Process_Contract_notifications
    Activate_contract -->|unnamed| Process_Contract_notifications
    Process_Contract_notifications -->|unnamed| Activate_Service
    BSL_External_system -->|unnamed| Show_services_on_contract
    Replace_service_on_contract -->|Service replaced| AM
    Process_offer_services -->|Add service to contract| Add_service_to_contract
    BSL_External_system -->|unnamed| Add_service_to_contract
    Offer_Financial_Params -->|Get financial offers| Contract_origination
    Offer_Service_Params -->|Get offer services| Contract_origination
    Contract_origination -->|create contract/account| Contract
    Set_contract_service_parameters_CEL -->|unnamed| Contract_Service
    Service_request_functionalities_overview -->|unnamed| BSL_External_system
    Generate_available_services -->|unnamed| BSL_External_system
    PCG_Service_definitions -->|Get available services| Generate_available_services
    Change_bundled_service -->|Cancel bundled service| Cancel_service
    Add_service_to_contract -->|Service added| AM
    Add_insurance_service -->|unnamed| Add_service_to_contract
    Cancel_service -->|Service cancelled| AM
    Terminate_service -->|Service terminated| AM
    BSL_External_system -->|unnamed| Replace_service_on_contract
    BSL_External_system -->|unnamed| Terminate_service
    Change_bundled_service -->|Terminate bundled service| Terminate_service
    Terminate_Insurance_Service -->|unnamed| Terminate_service
    Request_CEL_Account_changes -->|unnamed| Terminate_service
    Deactivate_Insurance_Service -->|unnamed| Activate_Deactivate_Service
    BSL_External_system -->|unnamed| Activate_Deactivate_Service
    Activate_Deactivate_Service -->|Service switched-on/off request| AM
```
