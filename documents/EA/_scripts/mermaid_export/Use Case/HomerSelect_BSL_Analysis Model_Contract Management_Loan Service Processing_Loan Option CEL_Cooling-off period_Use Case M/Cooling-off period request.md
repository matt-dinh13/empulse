# Cooling-off period request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/Use Case Model
- **Diagram ID**: 162715
- **Elements**: 15
- **Connectors**: 16

```mermaid
graph LR
    n_08_356_Generate_service_request_document_v2(("08.356 Generate service request document v2"))
    n_08_065_Calculate_Cooling_off_period_repayment_preview(("08.065 Calculate Cooling-off period repayment preview"))
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    Check_concurrent_active_loan_services_and_requests_rule["Check concurrent active loan services and requests rule"]
    Check_for_collection_tool_services["Check for collection tool services"]
    n_08_001_Check_contract_for_service_evaluation(("08.001 Check contract for service evaluation"))
    MOD_Check_COP_ER_request_availability["{MOD}Check COP ER request availability"]
    Logical_Data_Model_Early_repayment_request_domain_model["Logical Data Model : Early repayment request domain model"]
    New_ER_request_screen_New_early_repayment_request["New ER request screen : New early repayment request"]
    Tab9_Services_Contract_detail_Tab_Services["Tab9-Services : Contract detail - Tab Services"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    MOD_08_257_Create_Cooling_off_period_request(("{MOD}08.257 Create Cooling-off period request"))
    n_08_255_Show_Cooling_off_period_repayment_preview(("08.255 Show Cooling-off period repayment preview"))
    MOD_03_070_Calculate_early_repayment_amount(("{MOD}03.070 Calculate early repayment amount"))
    User[/"User"/]
    User --> n_08_255_Show_Cooling_off_period_repayment_preview
    User --- MOD_01_210_Show_contract_detail
    User --> MOD_08_257_Create_Cooling_off_period_request
    n_08_255_Show_Cooling_off_period_repayment_preview -->|unnamed| New_ER_request_screen_New_early_repayment_request
    MOD_08_257_Create_Cooling_off_period_request -->|unnamed| Deactivate_contract_early_termination_requests
    MOD_08_257_Create_Cooling_off_period_request -->|unnamed| Check_concurrent_active_loan_services_and_requests_rule
    MOD_Check_COP_ER_request_availability -->|unnamed| Check_for_collection_tool_services
    MOD_08_257_Create_Cooling_off_period_request -.->|include| n_08_001_Check_contract_for_service_evaluation
    n_08_065_Calculate_Cooling_off_period_repayment_preview -->|unnamed| MOD_Check_COP_ER_request_availability
    MOD_08_257_Create_Cooling_off_period_request -->|unnamed| Logical_Data_Model_Early_repayment_request_domain_model
    n_08_255_Show_Cooling_off_period_repayment_preview -.->|include| n_08_065_Calculate_Cooling_off_period_repayment_preview
    MOD_08_257_Create_Cooling_off_period_request -->|unnamed| New_ER_request_screen_New_early_repayment_request
    n_08_065_Calculate_Cooling_off_period_repayment_preview -.->|include| MOD_03_070_Calculate_early_repayment_amount
    MOD_08_257_Create_Cooling_off_period_request -.->|include| MOD_03_070_Calculate_early_repayment_amount
    n_08_255_Show_Cooling_off_period_repayment_preview -->|unnamed| Logical_Data_Model_Early_repayment_request_domain_model
    Tab9_Services_Contract_detail_Tab_Services -->|unnamed| MOD_01_210_Show_contract_detail
```
