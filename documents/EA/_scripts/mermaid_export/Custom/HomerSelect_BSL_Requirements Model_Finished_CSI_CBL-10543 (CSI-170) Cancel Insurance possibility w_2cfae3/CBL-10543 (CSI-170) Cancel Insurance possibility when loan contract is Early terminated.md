# CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated
- **Diagram ID**: 136448
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    Contract_CET_Service_Requests_Contract_CET_Service_Requests_["Contract CET Service Requests : Contract CET Service Requests - get preview"]
    ER_request_preview_Early_repayment_preview["ER request preview : Early repayment preview"]
    ADD_Evaluate_CET_Insurance_cancellation_period["{ADD}Evaluate CET Insurance cancellation period"]
    Early_repayment_result_Early_repayment_result["Early repayment result : Early repayment result"]
    MOD_03_070_Calculate_early_repayment_amount["{MOD}03.070 Calculate early repayment amount"]
    MOD_08_272_Get_CET_data_preview["{MOD}08.272 Get CET data preview"]
    MOD_08_273_Create_CET_request_common["{MOD}08.273 Create CET request common"]
    Logical_Data_Model_Early_repayment_request["Logical Data Model : Early repayment request"]
    REQ_1_Cancel_Insurance_possibility_when_loan_contract_is_Ear["REQ#1 - Cancel Insurance possibility when loan contract is Early terminated"]
    MOD_08_272_Get_CET_data_preview -->|unnamed| ADD_Evaluate_CET_Insurance_cancellation_period
    MOD_08_272_Get_CET_data_preview -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    MOD_08_273_Create_CET_request_common -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    MOD_08_273_Create_CET_request_common -->|unnamed| ADD_Evaluate_CET_Insurance_cancellation_period
    Early_repayment_result_Early_repayment_result -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
```
