# CLM-3822 - New SAI - COP processing

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment
- **Diagram ID**: 144843
- **Elements**: 11
- **Connectors**: 4

```mermaid
graph TD
    DEL_01_252_Evaluate_Contract_Service_Parameters["{DEL}01.252 Evaluate Contract Service Parameters"]
    DEL_01_712_Finish_contract_on_service_execution["{DEL}01.712 Finish contract on service execution"]
    n_01_711_Accept_conditions_for_SAI_contract["01.711 Accept conditions for SAI contract"]
    n_08_005_Apply_service_on_contract["08.005 Apply service on contract"]
    Time["Time"]
    CLM_3826_New_SAI_Contract_cancellation["CLM-3826 - New SAI - Contract cancellation"]
    n_01_445_Cancel_undisbursed_contract["01.445 Cancel undisbursed contract"]
    n_08_925_Cancel_expired_loan_service_requests["08.925 Cancel expired loan service requests"]
    MOD_08_252_Process_cooling_off_period["{MOD}08.252 Process cooling-off period"]
    MOD_Process_LoanServiceRequestExecutedSE["{MOD}Process LoanServiceRequestExecutedSE"]
    Set_contract_Condition_Accepted["Set contract Condition Accepted"]
    Time -->|unnamed| n_08_925_Cancel_expired_loan_service_requests
    Time -->|unnamed| n_01_445_Cancel_undisbursed_contract
    Time -->|unnamed| n_08_005_Apply_service_on_contract
    n_08_005_Apply_service_on_contract -->|unnamed| MOD_08_252_Process_cooling_off_period
```
