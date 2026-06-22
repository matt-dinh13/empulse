# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Access Rights
- **Diagram ID**: 115460
- **Elements**: 10
- **Connectors**: 4

```mermaid
graph TD
    MOD_08_207_Set_Enforce_gift_payment_flag["{MOD}08.207 Set Enforce gift payment flag"]
    ADD_08_207_Set_Enforce_gift_payment_flag["{ADD}08.207 Set Enforce gift payment flag"]
    n_08_230_Process_Gift_payment_automatically["08.230 Process Gift payment automatically"]
    External_Reference["External Reference"]
    n_08_210_Check_and_process_Gift_payment["08.210 Check and process Gift payment"]
    External_Reference["External Reference"]
    n_08_202_Evaluate_status_of_Gift_payment["08.202 Evaluate status of Gift payment"]
    n_08_230_Process_Gift_payment_automatically["08.230 Process Gift payment automatically"]
    MOD_08_210_Check_and_process_Gift_payment["{MOD}08.210 Check and process Gift payment"]
    n_08_202_Evaluate_status_of_Gift_payment["08.202 Evaluate status of Gift payment"]
    n_08_230_Process_Gift_payment_automatically -->|unnamed| n_08_230_Process_Gift_payment_automatically
    n_08_202_Evaluate_status_of_Gift_payment -->|unnamed| n_08_202_Evaluate_status_of_Gift_payment
    MOD_08_207_Set_Enforce_gift_payment_flag -->|unnamed| ADD_08_207_Set_Enforce_gift_payment_flag
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| n_08_210_Check_and_process_Gift_payment
```
