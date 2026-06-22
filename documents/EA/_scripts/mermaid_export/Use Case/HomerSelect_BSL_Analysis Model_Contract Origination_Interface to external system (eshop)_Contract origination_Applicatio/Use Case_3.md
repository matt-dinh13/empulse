# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Use Case
- **Diagram ID**: 164451
- **Elements**: 14
- **Connectors**: 20

```mermaid
graph LR
    Check_that_user_is_assigned_to_the_same_salesroom["Check that user is assigned to the same salesroom"]
    n_01_385_Assign_card_to_application_externally(("01.385 Assign card to application externally"))
    MOD_01_310_Update_application_v9(("{MOD}01.310 Update application v9"))
    n_01_313_Evaluate_application(("01.313 Evaluate application"))
    n_01_311_Update_offer_to_application_and_evaluate(("01.311 Update offer to application and evaluate"))
    MOD_01_098_Update_and_evaluate_application_v9(("{MOD}01.098 Update and evaluate application v9"))
    MOD_01_099_Sign_contract_externally(("{MOD}01.099 Sign contract externally"))
    n_01_312_Update_approved_application(("01.312 Update approved application"))
    n_01_097_Cancel_application_externally(("01.097 Cancel application externally"))
    n_01_096_Prepare_documentation_externally(("01.096 Prepare documentation externally"))
    n_01_095_Create_and_evaluate_application(("01.095 Create and evaluate application"))
    n_01_040_Get_application_data(("01.040 Get application data"))
    External_system[/"External system"/]
    n_01_164_Search_for_application(("01.164 Search for application"))
    n_01_313_Evaluate_application -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    n_01_311_Update_offer_to_application_and_evaluate -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    n_01_312_Update_approved_application -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    n_01_040_Get_application_data -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    MOD_01_098_Update_and_evaluate_application_v9 -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    n_01_164_Search_for_application -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    MOD_01_310_Update_application_v9 -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    MOD_01_099_Sign_contract_externally -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    External_system --> MOD_01_099_Sign_contract_externally
    n_01_385_Assign_card_to_application_externally --- External_system
    External_system --> n_01_311_Update_offer_to_application_and_evaluate
    External_system --> n_01_096_Prepare_documentation_externally
    External_system --> n_01_312_Update_approved_application
    External_system --> n_01_097_Cancel_application_externally
    External_system --> n_01_095_Create_and_evaluate_application
    External_system --> n_01_040_Get_application_data
    External_system --> MOD_01_310_Update_application_v9
    External_system --> n_01_164_Search_for_application
    External_system --> MOD_01_098_Update_and_evaluate_application_v9
    External_system --> n_01_313_Evaluate_application
```
