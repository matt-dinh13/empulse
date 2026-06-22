# Full early repayment request - externally

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case
- **Diagram ID**: 164494
- **Elements**: 25
- **Connectors**: 30

```mermaid
graph LR
    ADD_Evaluate_FER_Fee_Exemption[" {ADD}Evaluate FER Fee Exemption"]
    n_08_356_Generate_service_request_document_v2(("08.356 Generate service request document v2"))
    Contract_FER_Service_Requests_Contract_FER_Service_Requests_["Contract FER Service Requests : Contract FER Service Requests - create request"]
    Contract_FER_Service_Requests_Contract_FER_Service_Requests_["Contract FER Service Requests : Contract FER Service Requests - get preview"]
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    CheckContractFERRequest_input_parameters["CheckContractFERRequest input parameters"]
    External_system[/"External system"/]
    n_01_786_Create_ContractFERRequest_service(("01.786 Create ContractFERRequest service"))
    n_01_785_Get_ContractFERRequest_preview(("01.785 Get ContractFERRequest preview"))
    n_08_203_Calculate_Gift_Payment_Amount(("08.203 Calculate Gift Payment Amount"))
    MOD_ALG_Early_repayment_calculation_A1["{MOD}ALG_Early repayment calculation A1"]
    n_08_202_Evaluate_status_of_Gift_payment(("08.202 Evaluate status of Gift payment"))
    MOD_Get_FER_service_setting_rule["{MOD}Get FER service setting rule"]
    n_08_066_Calculate_Full_Early_repayment_preview(("08.066 Calculate Full Early repayment preview"))
    Check_for_collection_tool_services["Check for collection tool services"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    MOD_Limitation_of_ER_due_date_selection_range["{MOD}Limitation of ER due date selection range"]
    n_03_052_Create_Full_Early_repayment_request(("03.052 Create Full Early repayment request"))
    MOD_03_060_Calculate_early_repayment_date(("{MOD}03.060 Calculate early repayment date"))
    Recalling_of_terminated_Installment_schedule["Recalling of terminated Installment schedule"]
    Creating_of_virtual_IS_for_FER_in_status_Paid_off["Creating of virtual IS for FER in status Paid-off"]
    Check_ER_request_availability["Check ER request availability"]
    Use_Case_model_Common_for_Early_repayment_Request_and_Proces["Use Case model : Common for Early repayment Request and Processing "]
    Early_repayment_result_Early_repayment_result["Early repayment result : Early repayment result"]
    MOD_03_070_Calculate_early_repayment_amount(("{MOD}03.070 Calculate early repayment amount"))
    Check_ER_request_availability -->|unnamed| Check_for_collection_tool_services
    CheckContractFERRequest_input_parameters -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_08_202_Evaluate_status_of_Gift_payment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    n_01_786_Create_ContractFERRequest_service -->|unnamed| CheckContractFERRequest_input_parameters
    n_01_785_Get_ContractFERRequest_preview -->|unnamed| CheckContractFERRequest_input_parameters
    Contract_FER_Service_Requests_Contract_FER_Service_Requests_ -->|unnamed| n_01_785_Get_ContractFERRequest_preview
    n_08_066_Calculate_Full_Early_repayment_preview -.->|include| n_08_203_Calculate_Gift_Payment_Amount
    n_03_052_Create_Full_Early_repayment_request -.->|include| n_08_203_Calculate_Gift_Payment_Amount
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| MOD_ALG_Early_repayment_calculation_A1
    n_08_066_Calculate_Full_Early_repayment_preview -.->|include| n_08_202_Evaluate_status_of_Gift_payment
    MOD_ALG_Early_repayment_calculation_A1 -->|unnamed| ADD_Evaluate_FER_Fee_Exemption
    n_08_066_Calculate_Full_Early_repayment_preview -->|unnamed| MOD_Get_FER_service_setting_rule
    Early_repayment_result_Early_repayment_result -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    n_03_052_Create_Full_Early_repayment_request -->|unnamed| Deactivate_contract_early_termination_requests
    n_01_786_Create_ContractFERRequest_service -->|unnamed| MOD_Limitation_of_ER_due_date_selection_range
    n_01_785_Get_ContractFERRequest_preview -->|unnamed| MOD_Limitation_of_ER_due_date_selection_range
    n_08_066_Calculate_Full_Early_repayment_preview -->|unnamed| MOD_Limitation_of_ER_due_date_selection_range
    n_08_066_Calculate_Full_Early_repayment_preview -.->|include| MOD_03_060_Calculate_early_repayment_date
    Creating_of_virtual_IS_for_FER_in_status_Paid_off -->|unnamed| Recalling_of_terminated_Installment_schedule
    n_03_052_Create_Full_Early_repayment_request -->|unnamed| Creating_of_virtual_IS_for_FER_in_status_Paid_off
    n_08_066_Calculate_Full_Early_repayment_preview -->|unnamed| Creating_of_virtual_IS_for_FER_in_status_Paid_off
    n_08_066_Calculate_Full_Early_repayment_preview -->|unnamed| Check_ER_request_availability
    n_01_786_Create_ContractFERRequest_service -->|unnamed| Check_ER_request_availability
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| Use_Case_model_Common_for_Early_repayment_Request_and_Proces
    n_08_066_Calculate_Full_Early_repayment_preview -.->|include| MOD_03_070_Calculate_early_repayment_amount
    n_03_052_Create_Full_Early_repayment_request -.->|include| MOD_03_070_Calculate_early_repayment_amount
    n_03_052_Create_Full_Early_repayment_request -->|unnamed| MOD_Get_FER_service_setting_rule
    n_01_786_Create_ContractFERRequest_service -.->|include| n_03_052_Create_Full_Early_repayment_request
    External_system --> n_01_785_Get_ContractFERRequest_preview
    External_system --> n_01_786_Create_ContractFERRequest_service
```
