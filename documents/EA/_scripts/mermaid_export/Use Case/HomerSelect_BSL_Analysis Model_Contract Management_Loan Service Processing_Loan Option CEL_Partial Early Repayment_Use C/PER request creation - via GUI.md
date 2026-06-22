# PER request creation - via GUI

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Use Case Model
- **Diagram ID**: 163271
- **Elements**: 23
- **Connectors**: 23

```mermaid
graph LR
    n_08_356_Generate_service_request_document_v2(("08.356 Generate service request document v2"))
    Calculate_fee_included_in_operation_for_PER["Calculate fee included in operation for PER"]
    Logical_Data_Model_PER_Result["Logical Data Model : PER Result"]
    Calculate_Minimal_New_PCA_after_PER["Calculate Minimal New PCA after PER"]
    n_08_051_Create_PER_request_common(("08.051 Create PER request common"))
    Calculate_Partial_ER_preview_Step2["Calculate Partial ER preview - Step2"]
    Calculate_Partial_ER_preview_Step1["Calculate Partial ER preview - Step1"]
    Interest_factor_ACT["Interest factor ACT"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    Check_for_collection_tool_services["Check for collection tool services"]
    Check_concurrent_active_loan_services_and_requests_rule["Check concurrent active loan services and requests rule"]
    Partial_early_repayment_preview_Partial_early_repayment_prev["Partial early repayment preview : Partial early repayment preview"]
    New_annuity_calculation_for_Lower_annuity_PER_type["New annuity calculation for 'Lower annuity' PER type"]
    New_term_calculation["New term calculation"]
    Annuity_calculation["Annuity calculation"]
    n_08_001_Check_contract_for_service_evaluation(("08.001 Check contract for service evaluation"))
    MOD_03_060_Calculate_early_repayment_date(("{MOD}03.060 Calculate early repayment date"))
    MOD_Check_PER_request_availability["{MOD}Check PER request availability"]
    Tab9_Services_Contract_detail_Tab_Services["Tab9-Services : Contract detail - Tab Services"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    User[/"User"/]
    n_08_050_Show_Partial_ER_preview(("08.050 Show Partial ER preview"))
    n_08_053_Create_PER_request_manually(("08.053 Create PER request manually"))
    n_08_053_Create_PER_request_manually -->|unnamed| Check_concurrent_active_loan_services_and_requests_rule
    n_08_053_Create_PER_request_manually -.->|include| n_08_051_Create_PER_request_common
    n_08_050_Show_Partial_ER_preview -->|unnamed| Calculate_Partial_ER_preview_Step2
    n_08_050_Show_Partial_ER_preview -->|unnamed| Calculate_Partial_ER_preview_Step1
    Annuity_calculation -->|unnamed| Interest_factor_ACT
    n_08_050_Show_Partial_ER_preview -->|unnamed| Partial_early_repayment_preview_Partial_early_repayment_prev
    n_08_051_Create_PER_request_common -.->|include| n_08_001_Check_contract_for_service_evaluation
    n_08_051_Create_PER_request_common -->|unnamed| Deactivate_contract_early_termination_requests
    User --- MOD_01_210_Show_contract_detail
    User --> n_08_050_Show_Partial_ER_preview
    User --> n_08_053_Create_PER_request_manually
    Calculate_Partial_ER_preview_Step1 -->|unnamed| MOD_Check_PER_request_availability
    Calculate_Partial_ER_preview_Step1 -->|unnamed| Calculate_Minimal_New_PCA_after_PER
    Calculate_Partial_ER_preview_Step1 -->|unnamed| MOD_03_060_Calculate_early_repayment_date
    Calculate_Partial_ER_preview_Step2 -->|unnamed| Calculate_fee_included_in_operation_for_PER
    Calculate_Partial_ER_preview_Step2 -->|unnamed| New_annuity_calculation_for_Lower_annuity_PER_type
    Calculate_Partial_ER_preview_Step2 -->|unnamed| New_term_calculation
    MOD_Check_PER_request_availability -->|unnamed| Check_for_collection_tool_services
    New_annuity_calculation_for_Lower_annuity_PER_type -->|unnamed| Annuity_calculation
    New_annuity_calculation_for_Lower_annuity_PER_type -->|unnamed| Interest_factor_ACT
    Calculate_Partial_ER_preview_Step2 -->|unnamed| Logical_Data_Model_PER_Result
    Calculate_Partial_ER_preview_Step1 -->|unnamed| Logical_Data_Model_PER_Result
    Tab9_Services_Contract_detail_Tab_Services -->|unnamed| MOD_01_210_Show_contract_detail
```
