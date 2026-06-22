# Gift payment processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Use Case
- **Diagram ID**: 163324
- **Elements**: 24
- **Connectors**: 21

```mermaid
graph LR
    Installment_schedule_manipulations_Installment_schedule_mani["Installment schedule manipulations : Installment schedule manipulations"]
    Annuity_calculation["Annuity calculation"]
    Create_business_event["Create business event"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    n_03_030_Regenerate_installment_schedule(("03.030 Regenerate installment schedule"))
    XIRR_algorithm["XIRR algorithm"]
    Create_incoming_payment_rule["Create incoming payment rule"]
    Maximal_Version_of_Installment_Schedule["Maximal Version of Installment Schedule"]
    Terminate_Contract_Service_if_cannot_be_processed["Terminate Contract Service if cannot be processed"]
    Terminate_Contract_Service_after_its_processing["Terminate Contract Service after its processing"]
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    Process_Gift_payment_job["Process Gift payment - job"]
    Notification_about_granting_of_Gift_payment["Notification about granting of Gift payment"]
    Gift_payment_processing_example["Gift payment processing - example"]
    Calculation_of_Gift_payment_date["Calculation of Gift payment date"]
    Checking_of_payment_discipline["Checking of payment discipline"]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    n_03_095_Remove_installment(("03.095 Remove installment "))
    MOD_08_210_Check_and_process_Gift_payment(("{MOD}08.210 Check and process Gift payment"))
    n_08_230_Process_Gift_payment_automatically(("08.230 Process Gift payment automatically"))
    Gift_payment_conditions["Gift payment conditions"]
    Time[/"Time"/]
    Data_manipulations_and_MBeans["Data manipulations and MBeans"]
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Notification_about_granting_of_Gift_payment
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Create_business_event
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Deactivate_contract_early_termination_requests
    MOD_08_210_Check_and_process_Gift_payment -.->|include| n_03_030_Regenerate_installment_schedule
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| XIRR_algorithm
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Create_incoming_payment_rule
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Maximal_Version_of_Installment_Schedule
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Terminate_Contract_Service_if_cannot_be_processed
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Terminate_Contract_Service_after_its_processing
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Annuity_calculation
    n_08_230_Process_Gift_payment_automatically -->|unnamed| Process_Gift_payment_job
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Gift_payment_conditions
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Gift_payment_processing_example
    Gift_payment_conditions -->|unnamed| Calculation_of_Gift_payment_date
    MOD_08_210_Check_and_process_Gift_payment -.->|include| n_05_182_Pair_payment_with_contract
    MOD_08_210_Check_and_process_Gift_payment -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| n_03_095_Remove_installment
    MOD_08_210_Check_and_process_Gift_payment -.->|include| n_03_095_Remove_installment
    n_08_230_Process_Gift_payment_automatically -.->|include| MOD_08_210_Check_and_process_Gift_payment
    MOD_08_210_Check_and_process_Gift_payment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    Time --> n_08_230_Process_Gift_payment_automatically
```
