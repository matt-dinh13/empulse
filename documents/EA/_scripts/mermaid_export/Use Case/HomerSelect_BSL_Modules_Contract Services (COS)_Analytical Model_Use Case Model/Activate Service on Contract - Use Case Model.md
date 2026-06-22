# Activate Service on Contract - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model
- **Diagram ID**: 163695
- **Elements**: 11
- **Connectors**: 8

```mermaid
graph LR
    v2_Activate_Loan_Service_method_COS_v2["v2 : Activate Loan Service method (COS) v2"]
    Process_Contract_Service_operation_response_Use_Case_Model["Process Contract Service operation response - Use Case Model"]
    Contract_Services_Activate_Loan_Service_method_COS["Contract Services : Activate Loan Service method (COS)"]
    ADD_Get_the_latest_Service_Operation_Status_COS["{ADD}Get the latest Service Operation Status (COS)"]
    ADD_Check_Account_status_by_account_number_in_AM_COS["{ADD}Check Account status by account number in AM (COS)"]
    ADD_Create_Loan_Service_Request_with_Service_Operation_Statu["{ADD}Create Loan Service Request with Service Operation Status (COS)"]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    External_System[/"External System"/]
    VAS_Deal[/"VAS Deal"/]
    n_08_020_Activate_Loan_Service_COS(("08.020 Activate Loan Service (COS)"))
    External_System --- n_08_020_Activate_Loan_Service_COS
    VAS_Deal --- n_08_020_Activate_Loan_Service_COS
    Contract_Services_Activate_Loan_Service_method_COS -->|unnamed| n_08_020_Activate_Loan_Service_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| ADD_Create_Loan_Service_Request_with_Service_Operation_Statu
    n_08_020_Activate_Loan_Service_COS -->|unnamed| ADD_Check_Account_status_by_account_number_in_AM_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| ADD_Get_the_latest_Service_Operation_Status_COS
```
