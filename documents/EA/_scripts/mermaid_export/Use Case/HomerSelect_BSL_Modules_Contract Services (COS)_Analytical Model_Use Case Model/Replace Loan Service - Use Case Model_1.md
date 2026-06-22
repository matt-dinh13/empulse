# Replace Loan Service - Use Case Model

```mermaid
graph TD
    VAS_Deal["VAS Deal"]
    ADD_Create_Loan_Service_Request_with_Service_Operation_Statu["{ADD}Create Loan Service Request with Service Operation Status (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    ADD_Get_the_latest_Service_Operation_Status_COS["{ADD}Get the latest Service Operation Status (COS)"]
    ADD_Check_Contract_status_for_Contract_Service_cancellation_["{ADD}Check Contract status for Contract Service cancellation and termination (COS)"]
    ADD_Check_Account_status_by_account_number_in_AM_COS["{ADD}Check Account status by account number in AM (COS)"]
    Contract_Services_Replace_Contract_Services_method_COS["Contract Services : Replace Contract Services method (COS)"]
    External_System["External System"]
    MOD_08_060_Replace_Loan_Service_method_COS["{MOD}08.060 Replace Loan Service method (COS)"]
    External_System -->|unnamed| MOD_08_060_Replace_Loan_Service_method_COS
    Contract_Services_Replace_Contract_Services_method_COS -->|unnamed| MOD_08_060_Replace_Loan_Service_method_COS
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| ADD_Check_Account_status_by_account_number_in_AM_COS
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| ADD_Check_Contract_status_for_Contract_Service_cancellation_
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| ADD_Get_the_latest_Service_Operation_Status_COS
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_Services_COS
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| ADD_Create_Loan_Service_Request_with_Service_Operation_Statu
    MOD_08_060_Replace_Loan_Service_method_COS -->|unnamed| VAS_Deal
```
