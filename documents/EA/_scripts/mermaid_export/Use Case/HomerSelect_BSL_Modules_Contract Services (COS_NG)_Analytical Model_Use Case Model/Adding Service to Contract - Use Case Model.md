# Adding Service to Contract - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model
- **Diagram ID**: 164134
- **Elements**: 11
- **Connectors**: 9

```mermaid
graph LR
    Get_Contract_by_contractCode_from_COMA["Get Contract by contractCode from COMA"]
    Contract_Services_Adding_Loan_Service_to_Contract_method_COS["Contract Services : Adding Loan Service to Contract method (COS) v1"]
    Process_Contract_Service_operation_response_Use_Case_Model["Process Contract Service operation response - Use Case Model"]
    Create_Loan_Service_Request_with_Service_Operation_Status_CO["Create Loan Service Request with Service Operation Status (COS)"]
    Check_Account_status_by_account_number_in_AM_COS["Check Account status by account number in AM (COS)"]
    Insurance_Service_setting_mapping_COS["Insurance Service setting mapping (COS)"]
    VAS_Deal[/"VAS Deal"/]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    External_System[/"External System"/]
    n_08_010_Add_Service_to_Loan_COS(("08.010 Add Service to Loan (COS)"))
    External_System --> n_08_010_Add_Service_to_Loan_COS
    Contract_Services_Adding_Loan_Service_to_Contract_method_COS -->|unnamed| n_08_010_Add_Service_to_Loan_COS
    n_08_010_Add_Service_to_Loan_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_010_Add_Service_to_Loan_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_010_Add_Service_to_Loan_COS --- VAS_Deal
    n_08_010_Add_Service_to_Loan_COS -->|unnamed| Insurance_Service_setting_mapping_COS
    n_08_010_Add_Service_to_Loan_COS -->|unnamed| Check_Account_status_by_account_number_in_AM_COS
    n_08_010_Add_Service_to_Loan_COS -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status_CO
    n_08_010_Add_Service_to_Loan_COS -->|unnamed| Get_Contract_by_contractCode_from_COMA
```
