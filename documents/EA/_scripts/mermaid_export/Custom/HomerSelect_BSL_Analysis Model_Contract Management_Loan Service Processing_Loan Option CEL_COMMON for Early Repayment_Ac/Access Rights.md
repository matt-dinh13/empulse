# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights
- **Diagram ID**: 161597
- **Elements**: 8
- **Connectors**: 4

```mermaid
graph TD
    MOD_03_202_Extend_or_Reactivate_ER_request["{MOD}03.202 Extend or Reactivate ER request"]
    ADD_03_202_Extend_or_Reactivate_ER_request["{ADD}03.202 Extend or Reactivate ER request"]
    n_03_070_Calculate_early_repayment_amount["03.070 Calculate early repayment amount"]
    n_03_110_Perform_early_repayment_installment_schedule["03.110 Perform early repayment installment schedule"]
    MOD_03_110_Perform_early_repayment_installment_schedule["{MOD} 03.110 Perform early repayment installment schedule"]
    MOD_03_070_Calculate_early_repayment_amount["{MOD}03.070 Calculate early repayment amount"]
    n_03_200_Show_ER_request_history["03.200 Show ER request history"]
    n_03_200_Show_ER_request_history["03.200 Show ER request history"]
    MOD_03_110_Perform_early_repayment_installment_schedule -->|unnamed| n_03_110_Perform_early_repayment_installment_schedule
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| n_03_070_Calculate_early_repayment_amount
    n_03_200_Show_ER_request_history -->|unnamed| n_03_200_Show_ER_request_history
    MOD_03_202_Extend_or_Reactivate_ER_request -->|unnamed| ADD_03_202_Extend_or_Reactivate_ER_request
```
