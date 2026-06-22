# Activate Service on Contract - Use Case Model

```mermaid
graph TD
    Contract_Services_Activate_Loan_Service_method_COS_v1["Contract Services : Activate Loan Service method (COS) v1"]
    Process_Contract_Service_operation_response_Use_Case_Model["Process Contract Service operation response - Use Case Model"]
    Get_the_latest_Service_Operation_Status_COS["Get the latest Service Operation Status (COS)"]
    Check_Account_status_by_account_number_in_AM_COS["Check Account status by account number in AM (COS)"]
    Create_Loan_Service_Request_with_Service_Operation_Status_CO["Create Loan Service Request with Service Operation Status (COS)"]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    External_System["External System"]
    VAS_Deal["VAS Deal"]
    n_08_020_Activate_Loan_Service_COS["08.020 Activate Loan Service (COS)"]
    VAS_Deal -->|unnamed| n_08_020_Activate_Loan_Service_COS
    Contract_Services_Activate_Loan_Service_method_COS_v1 -->|unnamed| n_08_020_Activate_Loan_Service_COS
    External_System -->|unnamed| n_08_020_Activate_Loan_Service_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status_CO
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Check_Account_status_by_account_number_in_AM_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_the_latest_Service_Operation_Status_COS
```
