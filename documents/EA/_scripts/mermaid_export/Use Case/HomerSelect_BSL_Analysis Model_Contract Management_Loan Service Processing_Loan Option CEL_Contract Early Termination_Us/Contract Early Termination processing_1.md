# Contract Early Termination processing

```mermaid
graph TD
    Installment_schedule_manipulations_Installment_schedule_mani["Installment schedule manipulations : Installment schedule manipulations"]
    MOD_01_715_Finish_contract_automatically["{MOD}01.715 Finish contract automatically"]
    Create_incoming_payment_rule["Create incoming payment rule"]
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    Terminate_Contract_Service_after_its_processing["Terminate Contract Service after its processing"]
    Terminate_Contract_Service_if_cannot_be_processed["Terminate Contract Service if cannot be processed"]
    Use_Case_model_Common_for_Early_repayment_Request_and_Proces["Use Case model : Common for Early repayment Request and Processing "]
    Early_repayment_result_Early_repayment_result["Early repayment result : Early repayment result"]
    MOD_05_180_Perform_coupling_payments_with_instalments["{MOD}05.180 Perform coupling payments with instalments"]
    MOD_03_110_Perform_early_repayment_installment_schedule["{MOD} 03.110 Perform early repayment installment schedule"]
    MOD_03_070_Calculate_early_repayment_amount["{MOD}03.070 Calculate early repayment amount"]
    Process_CET_early_repayment_job["Process CET early repayment job"]
    n_08_285_Select_contracts_for_CET_evaluation["08.285 Select contracts for CET evaluation"]
    User["User"]
    n_08_271_Create_CET_repayment_request["08.271 Create CET repayment request"]
    n_01_730_Finish_contract_manually["01.730 Finish contract manually"]
    MOD_05_184_Reflect_change_of_balance["{MOD}05.184 Reflect change of balance"]
    MOD_08_280_Check_and_process_CET_request["{MOD}08.280 Check and process CET request"]
    Time["Time"]
    Data_manipulations_and_MBeans["Data manipulations and MBeans"]
    Time -->|unnamed| n_08_285_Select_contracts_for_CET_evaluation
    User -->|unnamed| n_08_271_Create_CET_repayment_request
    User -->|unnamed| n_01_730_Finish_contract_manually
    Early_repayment_result_Early_repayment_result -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    MOD_08_280_Check_and_process_CET_request -->|unnamed| Create_incoming_payment_rule
    MOD_08_280_Check_and_process_CET_request -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_280_Check_and_process_CET_request -->|unnamed| Terminate_Contract_Service_after_its_processing
    MOD_08_280_Check_and_process_CET_request -->|unnamed| Terminate_Contract_Service_if_cannot_be_processed
    MOD_08_280_Check_and_process_CET_request -->|unnamed| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_280_Check_and_process_CET_request -->|unnamed| MOD_03_110_Perform_early_repayment_installment_schedule
    n_01_730_Finish_contract_manually -->|unnamed| MOD_08_280_Check_and_process_CET_request
    MOD_08_280_Check_and_process_CET_request -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    n_08_285_Select_contracts_for_CET_evaluation -->|unnamed| Process_CET_early_repayment_job
    n_08_285_Select_contracts_for_CET_evaluation -->|unnamed| MOD_08_280_Check_and_process_CET_request
    n_08_271_Create_CET_repayment_request -->|unnamed| MOD_08_280_Check_and_process_CET_request
    MOD_05_184_Reflect_change_of_balance -->|unnamed| MOD_08_280_Check_and_process_CET_request
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| Use_Case_model_Common_for_Early_repayment_Request_and_Proces
```
