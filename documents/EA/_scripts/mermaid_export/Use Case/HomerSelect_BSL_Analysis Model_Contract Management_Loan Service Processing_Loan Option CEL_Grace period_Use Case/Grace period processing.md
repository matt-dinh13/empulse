# Grace period processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case
- **Diagram ID**: 163326
- **Elements**: 24
- **Connectors**: 19

```mermaid
graph LR
    Installment_schedule_manipulations_Installment_schedule_mani["Installment schedule manipulations : Installment schedule manipulations"]
    Time[/"Time"/]
    Check_Moratorium_for_Grace_period["Check Moratorium for Grace period"]
    Calculation_of_Presented_IR_types["Calculation of Presented IR types"]
    Process_Grace_period_job["Process Grace period - job"]
    Notification_about_early_repayment_under_Grace_period["Notification about early repayment under Grace period"]
    n_08_240_Process_Grace_period_automatically(("08.240 Process Grace period automatically"))
    Import_incoming_payments["Import incoming payments"]
    Manual_pairing_of_incoming_payment_with_contract["Manual pairing of incoming payment with contract"]
    Grace_period_processing_example["Grace period processing - example"]
    Use_Case_Calculation_of_early_repayment_amount_under_Grace_p["Use Case : Calculation of early repayment amount under Grace period"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    MOD_03_110_Perform_early_repayment_installment_schedule(("{MOD} 03.110 Perform early repayment installment schedule"))
    MOD_03_070_Calculate_early_repayment_amount(("{MOD}03.070 Calculate early repayment amount"))
    Annuity_calculation["Annuity calculation"]
    MOD_08_222_Calculate_Grace_period_amount(("{MOD}08.222 Calculate Grace period amount"))
    Calculation_of_end_date_for_Grace_period["Calculation of end date for Grace period"]
    Checking_of_payment_discipline["Checking of payment discipline"]
    Calculation_of_repayment_date_for_Grace_period["Calculation of repayment date for Grace period"]
    MOD_05_184_Reflect_change_of_balance(("{MOD}05.184 Reflect change of balance"))
    n_03_030_Regenerate_installment_schedule(("03.030 Regenerate installment schedule"))
    Grace_period_conditions["Grace period conditions"]
    MOD_08_220_Check_and_process_Grace_period(("{MOD}08.220 Check and process Grace period"))
    Data_manipulations_and_MBeans["Data manipulations and MBeans"]
    MOD_08_220_Check_and_process_Grace_period -->|unnamed| Annuity_calculation
    n_08_240_Process_Grace_period_automatically -->|unnamed| Process_Grace_period_job
    MOD_08_220_Check_and_process_Grace_period -->|unnamed| Notification_about_early_repayment_under_Grace_period
    MOD_05_184_Reflect_change_of_balance -->|unnamed| n_08_240_Process_Grace_period_automatically
    MOD_08_220_Check_and_process_Grace_period -->|unnamed| Grace_period_processing_example
    MOD_08_222_Calculate_Grace_period_amount -->|unnamed| Use_Case_Calculation_of_early_repayment_amount_under_Grace_p
    MOD_08_220_Check_and_process_Grace_period -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    Grace_period_conditions -->|unnamed| Check_Moratorium_for_Grace_period
    MOD_08_220_Check_and_process_Grace_period -.->|include| MOD_03_070_Calculate_early_repayment_amount
    n_08_240_Process_Grace_period_automatically -.->|include| MOD_08_220_Check_and_process_Grace_period
    MOD_08_220_Check_and_process_Grace_period -.->|include| MOD_08_222_Calculate_Grace_period_amount
    Grace_period_conditions -->|unnamed| Calculation_of_end_date_for_Grace_period
    Grace_period_conditions -->|unnamed| Calculation_of_repayment_date_for_Grace_period
    Manual_pairing_of_incoming_payment_with_contract -->|unnamed| MOD_05_184_Reflect_change_of_balance
    Import_incoming_payments -->|unnamed| MOD_05_184_Reflect_change_of_balance
    MOD_08_220_Check_and_process_Grace_period -.->|include| n_03_030_Regenerate_installment_schedule
    MOD_08_220_Check_and_process_Grace_period -->|unnamed| Grace_period_conditions
    MOD_08_220_Check_and_process_Grace_period -.->|include| MOD_03_110_Perform_early_repayment_installment_schedule
    Time --> n_08_240_Process_Grace_period_automatically
```
