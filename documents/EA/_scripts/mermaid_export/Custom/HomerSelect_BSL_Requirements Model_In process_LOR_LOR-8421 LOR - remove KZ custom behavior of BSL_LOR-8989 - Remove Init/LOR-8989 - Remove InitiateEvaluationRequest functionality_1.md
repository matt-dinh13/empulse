# LOR-8989 - Remove InitiateEvaluationRequest functionality

```mermaid
graph TD
    ApplicationSystemEvent["ApplicationSystemEvent"]
    ApplicationEvaluationNotification["ApplicationEvaluationNotification"]
    Scoring_Type["Scoring Type"]
    External_Reference["External Reference"]
    n_01_162_Preparation_of_LAP_vector["01.162 Preparation of LAP vector"]
    External_Reference["External Reference"]
    Creation_of_user["Creation of user"]
    Salesroom_eligibility_to_create_the_contract_remotely["Salesroom eligibility to create the contract remotely"]
    Card_service_validity["Card service validity"]
    Insurance_eligibility_validation_rule["Insurance eligibility validation rule"]
    Save_application_DDM_data["Save application DDM data"]
    Create_application_commodity["Create application commodity"]
    Create_validation_error_message["Create validation error message"]
    Save_application_payment_channel_data["Save application payment channel data"]
    Validate_parameters_for_contract_refinancing["Validate parameters for contract refinancing"]
    Application_validation_rule["Application validation rule"]
    ProcessType["ProcessType"]
    RequestBase["RequestBase"]
    ValidationError["ValidationError"]
    CreateAndEvaluateApplicationResultCode["CreateAndEvaluateApplicationResultCode"]
    Application["Application"]
    ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    LOR_8989_Remove_InitiateEvaluationRequest_functionality["LOR-8989 - Remove InitiateEvaluationRequest functionality"]
    LOR_8421_LOR_remove_KZ_custom_behavior_of_BSL["LOR-8421 LOR - remove KZ custom behavior of BSL"]
    External_system["External system"]
    MOD_01_160_Search_client["{MOD}01.160 Search client"]
    LAP["LAP"]
    External_Reference["External Reference"]
    External_Reference["External Reference"]
    External_Reference["External Reference"]
    External_Reference -->|External Reference| n_01_162_Preparation_of_LAP_vector
    MOD_01_160_Search_client -->|{DEL LOR-8989/}| External_Reference
    ApplicationManagementWS_v21 -->|External Reference| External_Reference
```
