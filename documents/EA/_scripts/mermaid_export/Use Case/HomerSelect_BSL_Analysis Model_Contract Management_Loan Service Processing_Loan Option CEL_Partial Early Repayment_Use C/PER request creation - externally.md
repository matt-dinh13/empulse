# PER request creation - externally

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Use Case Model
- **Diagram ID**: 163273
- **Elements**: 20
- **Connectors**: 22

```mermaid
graph LR
    n_08_356_Generate_service_request_document_v2(("08.356 Generate service request document v2"))
    Calculate_fee_included_in_operation_for_PER["Calculate fee included in operation for PER"]
    CheckContractPERRequest_input_parameters["CheckContractPERRequest input parameters"]
    Check_for_collection_tool_services["Check for collection tool services"]
    Logical_Data_Model_PER_Result["Logical Data Model : PER Result"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    n_08_001_Check_contract_for_service_evaluation(("08.001 Check contract for service evaluation"))
    n_08_051_Create_PER_request_common(("08.051 Create PER request common"))
    Calculate_Minimal_New_PCA_after_PER["Calculate Minimal New PCA after PER"]
    Calculate_Partial_ER_preview_Step2["Calculate Partial ER preview - Step2"]
    Calculate_Partial_ER_preview_Step1["Calculate Partial ER preview - Step1"]
    New_annuity_calculation_for_Lower_annuity_PER_type["New annuity calculation for 'Lower annuity' PER type"]
    New_term_calculation["New term calculation"]
    MOD_03_060_Calculate_early_repayment_date(("{MOD}03.060 Calculate early repayment date"))
    MOD_Check_PER_request_availability["{MOD}Check PER request availability"]
    Contract_PER_Service_Requests_Contract_PER_Service_Requests_["Contract PER Service Requests : Contract PER Service Requests - get preview"]
    Contract_PER_Service_Requests_Contract_PER_Service_Requests_["Contract PER Service Requests : Contract PER Service Requests - create request"]
    n_01_788_Create_ContractPERRequest_service(("01.788 Create ContractPERRequest service"))
    n_01_787_Get_ContractPERRequest_preview_service(("01.787 Get ContractPERRequest preview service"))
    External_system[/"External system"/]
    n_08_051_Create_PER_request_common -->|unnamed| Deactivate_contract_early_termination_requests
    n_08_051_Create_PER_request_common -.->|include| n_08_001_Check_contract_for_service_evaluation
    External_system --> n_01_788_Create_ContractPERRequest_service
    External_system --> n_01_787_Get_ContractPERRequest_preview_service
    n_01_787_Get_ContractPERRequest_preview_service -->|unnamed| Calculate_Partial_ER_preview_Step1
    n_01_787_Get_ContractPERRequest_preview_service -->|unnamed| CheckContractPERRequest_input_parameters
    n_01_787_Get_ContractPERRequest_preview_service -->|unnamed| Calculate_Partial_ER_preview_Step2
    n_01_788_Create_ContractPERRequest_service -->|unnamed| Calculate_Partial_ER_preview_Step1
    n_01_788_Create_ContractPERRequest_service -.->|include| n_08_051_Create_PER_request_common
    n_01_788_Create_ContractPERRequest_service -->|unnamed| Calculate_Partial_ER_preview_Step2
    n_01_788_Create_ContractPERRequest_service -->|unnamed| CheckContractPERRequest_input_parameters
    Calculate_Partial_ER_preview_Step1 -->|unnamed| MOD_Check_PER_request_availability
    Calculate_Partial_ER_preview_Step1 -->|unnamed| Calculate_Minimal_New_PCA_after_PER
    Calculate_Partial_ER_preview_Step1 -->|unnamed| MOD_03_060_Calculate_early_repayment_date
    Calculate_Partial_ER_preview_Step2 -->|unnamed| Calculate_fee_included_in_operation_for_PER
    Calculate_Partial_ER_preview_Step2 -->|unnamed| New_annuity_calculation_for_Lower_annuity_PER_type
    Calculate_Partial_ER_preview_Step2 -->|unnamed| New_term_calculation
    MOD_Check_PER_request_availability -->|unnamed| Check_for_collection_tool_services
    Calculate_Partial_ER_preview_Step2 -->|unnamed| Logical_Data_Model_PER_Result
    n_01_788_Create_ContractPERRequest_service -->|unnamed| Contract_PER_Service_Requests_Contract_PER_Service_Requests_
    Calculate_Partial_ER_preview_Step1 -->|unnamed| Logical_Data_Model_PER_Result
    n_01_787_Get_ContractPERRequest_preview_service -->|unnamed| Contract_PER_Service_Requests_Contract_PER_Service_Requests_
```
