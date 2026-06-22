# Payment holiday request creation - via GUI

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Use Case Model
- **Diagram ID**: 162699
- **Elements**: 34
- **Connectors**: 37

```mermaid
graph LR
    n_08_356_Generate_service_request_document_v2(("08.356 Generate service request document v2"))
    MOD_13_205_Create_contract_supplement_documents_v2(("{MOD}13.205 Create contract supplement documents v2"))
    Check_existency_of_active_PAYHOL_request["Check existency of active PAYHOL request"]
    Check_for_collection_tool_services["Check for collection tool services"]
    MOD_08_358_Create_request_for_payment_holiday_common(("{MOD}08.358 Create request for payment holiday common"))
    Pause_bonus_service_evaluation["Pause bonus service evaluation"]
    Get_client_current_data_from_CIF["Get client current data from CIF"]
    Calculate_possible_fees_for_loan_service_request["Calculate possible fees for loan service request"]
    n_08_920_Evaluate_collection_tool_service_request(("08.920 Evaluate collection tool service request"))
    Set_Contract_Supplement_registration_status["Set Contract Supplement registration status"]
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    Create_contract_supplement_rule["Create contract supplement rule"]
    Check_chosen_service_for_eligibility["Check chosen service for eligibility"]
    Get_supplement_documents_required_for_service_request["Get supplement documents required for service request"]
    n_08_905_Show_supplement_documents_for_service_request(("08.905 Show supplement documents for service request"))
    Get_client_documents_needed_to_service_request["Get client documents needed to service request"]
    Logical_Data_Model_Presented_interest_rate_Interface["Logical Data Model : Presented interest rate - Interface"]
    Calculate_Presented_Interest_Rate_for_Loan_Service_Request["Calculate Presented Interest Rate for Loan Service Request"]
    Payment_holiday_installment_schedule_examples["Payment holiday - installment schedule examples"]
    Calculation_of_Presented_IR_types["Calculation of Presented IR types"]
    Print_Server[/"Print Server"/]
    Logical_Data_Model_Payment_holiday_request["Logical Data Model : Payment holiday request"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    Check_concurrent_active_loan_services_and_requests_rule["Check concurrent active loan services and requests rule"]
    n_08_354_Show_parameters_of_payment_holiday(("08.354 Show parameters of payment holiday"))
    Calculate_Payment_holiday_financial_parameters["Calculate Payment holiday financial parameters"]
    DEL_Payment_holiday_service_request_validation["{DEL}Payment holiday service request validation"]
    MOD_Determine_first_installment_for_deferral["{MOD}Determine first installment for deferral"]
    Create_request_for_Payment_holiday_Create_request_for_Paymen["Create request for Payment holiday : Create request for Payment holiday"]
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA["HO_SERVICE_REQUEST_DATA : HO_SERVICE_REQUEST_DATA"]
    Cabinet[/"Cabinet"/]
    User[/"User"/]
    n_08_355_Create_request_for_payment_holiday(("08.355 Create request for payment holiday"))
    Collection_tool_requests_evaluation["Collection tool requests evaluation"]
    Cabinet --> MOD_13_205_Create_contract_supplement_documents_v2
    User --> n_08_354_Show_parameters_of_payment_holiday
    User --> n_08_355_Create_request_for_payment_holiday
    Print_Server --> MOD_13_205_Create_contract_supplement_documents_v2
    n_08_905_Show_supplement_documents_for_service_request -->|External Reference| Get_client_documents_needed_to_service_request
    n_08_354_Show_parameters_of_payment_holiday -.->|include| n_08_905_Show_supplement_documents_for_service_request
    n_08_905_Show_supplement_documents_for_service_request -->|External Reference| Get_supplement_documents_required_for_service_request
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Check_chosen_service_for_eligibility
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Check_chosen_service_for_eligibility
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Check_existency_of_active_PAYHOL_request
    MOD_08_358_Create_request_for_payment_holiday_common -->|unnamed| Change_status_of_Contract_Supplement
    Calculate_Presented_Interest_Rate_for_Loan_Service_Request -->|unnamed| Calculation_of_Presented_IR_types
    MOD_08_358_Create_request_for_payment_holiday_common -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Calculate_possible_fees_for_loan_service_request
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Pause_bonus_service_evaluation
    n_08_355_Create_request_for_payment_holiday -.->|include| MOD_08_358_Create_request_for_payment_holiday_common
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Check_for_collection_tool_services
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Check_for_collection_tool_services
    MOD_08_358_Create_request_for_payment_holiday_common -->|unnamed| Create_contract_supplement_rule
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| DEL_Payment_holiday_service_request_validation
    MOD_08_358_Create_request_for_payment_holiday_common -.->|include| MOD_13_205_Create_contract_supplement_documents_v2
    Logical_Data_Model_Payment_holiday_request -->|unnamed| n_08_355_Create_request_for_payment_holiday
    Create_request_for_Payment_holiday_Create_request_for_Paymen -->|unnamed| n_08_355_Create_request_for_payment_holiday
    Calculate_Presented_Interest_Rate_for_Loan_Service_Request -->|unnamed| Logical_Data_Model_Presented_interest_rate_Interface
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Calculate_Presented_Interest_Rate_for_Loan_Service_Request
    n_08_355_Create_request_for_payment_holiday -->|unnamed| DEL_Payment_holiday_service_request_validation
    Payment_holiday_installment_schedule_examples -->|unnamed| Calculate_Payment_holiday_financial_parameters
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| Calculate_Payment_holiday_financial_parameters
    Create_request_for_Payment_holiday_Create_request_for_Paymen -->|unnamed| n_08_354_Show_parameters_of_payment_holiday
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Check_concurrent_active_loan_services_and_requests_rule
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Deactivate_contract_early_termination_requests
    n_08_355_Create_request_for_payment_holiday -->|unnamed| MOD_Determine_first_installment_for_deferral
    MOD_13_205_Create_contract_supplement_documents_v2 -->|unnamed| Get_client_documents_needed_to_service_request
    MOD_13_205_Create_contract_supplement_documents_v2 -->|unnamed| Get_client_current_data_from_CIF
    MOD_13_205_Create_contract_supplement_documents_v2 -->|unnamed| Get_supplement_documents_required_for_service_request
    MOD_13_205_Create_contract_supplement_documents_v2 -->|unnamed| Set_Contract_Supplement_registration_status
```
