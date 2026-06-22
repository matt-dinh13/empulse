# Loan restructuring request creation - via GUI

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Use Case Model
- **Diagram ID**: 162704
- **Elements**: 34
- **Connectors**: 40

```mermaid
graph LR
    Restructuring_offer_recalculation["Restructuring offer recalculation"]
    MOD_08_405_Confirm_offer_for_loan_restructuring_common(("{MOD}08.405 Confirm offer for loan restructuring common"))
    MOD_08_403_Create_request_for_loan_restructuring_common(("{MOD}08.403 Create request for loan restructuring common"))
    Structure_of_LAP_vector_LRES["Structure of LAP vector - LRES"]
    Create_contract_supplement_rule["Create contract supplement rule"]
    User_Interface_Model_Tab_Collection_tools_requests_managemen["User Interface Model : Tab - Collection tools requests management"]
    Pause_bonus_service_evaluation["Pause bonus service evaluation"]
    n_08_920_Evaluate_collection_tool_service_request(("08.920 Evaluate collection tool service request"))
    Logical_domain_model_Supplement_definition_for_Loan_restruct["Logical domain model : Supplement definition for Loan restructuring"]
    Calculate_possible_fees_for_loan_service_request["Calculate possible fees for loan service request"]
    Calculate_financial_parameters_for_loan_restructuring["Calculate financial parameters for loan restructuring"]
    MOD_Determine_first_due_date_of_restructured_installments["{MOD}Determine first due date of restructured installments"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    Check_concurrent_active_loan_services_and_requests_rule["Check concurrent active loan services and requests rule"]
    Determine_first_installment_for_loan_restructuring["Determine first installment for loan restructuring"]
    MOD_Total_amount_to_restructuring_calculation["{MOD}Total amount to restructuring calculation"]
    DEL_13_205_Create_contract_supplement_documents(("{DEL}13.205 Create contract supplement documents"))
    Create_collection_tool_service_request_Create_collection_too["Create collection tool service request : Create collection tool service request"]
    Get_supplement_documents_required_for_service_request["Get supplement documents required for service request"]
    Get_client_documents_needed_to_service_request["Get client documents needed to service request"]
    Logical_Data_Model_Loan_restructuring_request_domain["Logical Data Model : Loan restructuring request domain"]
    Create_request_for_loan_restructuring_step_2_Create_request_["Create request for loan restructuring (step 2) : Create request for loan restructuring (step 2)"]
    Create_request_for_loan_restructuring_step_1_Create_request_["Create request for loan restructuring (step 1) : Create request for loan restructuring (step 1)"]
    n_08_402_Create_request_for_loan_restructuring(("08.402 Create request for loan restructuring"))
    Collection_tools_request["Collection tools request"]
    Check_chosen_service_for_eligibility["Check chosen service for eligibility"]
    n_08_905_Show_supplement_documents_for_service_request(("08.905 Show supplement documents for service request"))
    n_13_450_Process_supplement_approval_result(("13.450 Process supplement approval result"))
    n_13_150_Send_supplement_to_approval(("13.150 Send supplement to approval"))
    User[/"User"/]
    LAP[/"LAP"/]
    n_08_404_Confirm_offer_for_loan_restructuring(("08.404 Confirm offer for loan restructuring"))
    n_08_400_Show_parameters_for_loan_restructuring(("08.400 Show parameters for loan restructuring"))
    Collection_tool_requests_evaluation["Collection tool requests evaluation"]
    User --> n_08_404_Confirm_offer_for_loan_restructuring
    User --> n_08_400_Show_parameters_for_loan_restructuring
    User --> n_08_402_Create_request_for_loan_restructuring
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| Calculate_financial_parameters_for_loan_restructuring
    n_08_404_Confirm_offer_for_loan_restructuring -->|unnamed| Determine_first_installment_for_loan_restructuring
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| Determine_first_installment_for_loan_restructuring
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| Determine_first_installment_for_loan_restructuring
    n_08_404_Confirm_offer_for_loan_restructuring -->|unnamed| Check_concurrent_active_loan_services_and_requests_rule
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| Deactivate_contract_early_termination_requests
    Calculate_financial_parameters_for_loan_restructuring -->|unnamed| MOD_Determine_first_due_date_of_restructured_installments
    n_08_404_Confirm_offer_for_loan_restructuring -->|unnamed| Calculate_financial_parameters_for_loan_restructuring
    n_08_404_Confirm_offer_for_loan_restructuring -->|unnamed| Calculate_possible_fees_for_loan_service_request
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| Pause_bonus_service_evaluation
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| Create_contract_supplement_rule
    n_08_402_Create_request_for_loan_restructuring -.->|include| MOD_08_403_Create_request_for_loan_restructuring_common
    n_08_404_Confirm_offer_for_loan_restructuring -.->|include| MOD_08_405_Confirm_offer_for_loan_restructuring_common
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| MOD_Determine_first_due_date_of_restructured_installments
    n_08_402_Create_request_for_loan_restructuring -->|unnamed| Check_chosen_service_for_eligibility
    User_Interface_Model_Tab_Collection_tools_requests_managemen -->|unnamed| n_08_400_Show_parameters_for_loan_restructuring
    Create_request_for_loan_restructuring_step_2_Create_request_ -->|unnamed| n_08_404_Confirm_offer_for_loan_restructuring
    MOD_08_403_Create_request_for_loan_restructuring_common -.->|include| n_13_150_Send_supplement_to_approval
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| MOD_Total_amount_to_restructuring_calculation
    Create_collection_tool_service_request_Create_collection_too -->|unnamed| n_08_905_Show_supplement_documents_for_service_request
    Create_request_for_loan_restructuring_step_1_Create_request_ -->|unnamed| n_08_400_Show_parameters_for_loan_restructuring
    n_08_400_Show_parameters_for_loan_restructuring -->|unnamed| Check_chosen_service_for_eligibility
    n_08_400_Show_parameters_for_loan_restructuring -->|unnamed| Collection_tools_request
    Logical_domain_model_Supplement_definition_for_Loan_restruct -->|unnamed| n_08_402_Create_request_for_loan_restructuring
    Logical_Data_Model_Loan_restructuring_request_domain -->|unnamed| n_08_402_Create_request_for_loan_restructuring
    Create_request_for_loan_restructuring_step_1_Create_request_ -->|unnamed| n_08_402_Create_request_for_loan_restructuring
    n_08_905_Show_supplement_documents_for_service_request -->|External Reference| Get_client_documents_needed_to_service_request
    n_08_905_Show_supplement_documents_for_service_request -->|External Reference| Get_supplement_documents_required_for_service_request
    n_08_400_Show_parameters_for_loan_restructuring -.->|include| n_08_905_Show_supplement_documents_for_service_request
    LAP --> n_13_450_Process_supplement_approval_result
    LAP --> n_13_150_Send_supplement_to_approval
    n_13_450_Process_supplement_approval_result -->|unnamed| Calculate_possible_fees_for_loan_service_request
    n_13_450_Process_supplement_approval_result -->|unnamed| Restructuring_offer_recalculation
    n_13_150_Send_supplement_to_approval -->|unnamed| Structure_of_LAP_vector_LRES
    Get_supplement_documents_required_for_service_request -->|unnamed| DEL_13_205_Create_contract_supplement_documents
    Get_client_documents_needed_to_service_request -->|unnamed| DEL_13_205_Create_contract_supplement_documents
```
