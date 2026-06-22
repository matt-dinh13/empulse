# Payment holiday processing

```mermaid
graph TD
    Terminate_bonus_services_on_contract["Terminate bonus services on contract"]
    Pause_bonus_service_evaluation["Pause bonus service evaluation"]
    Collection_tool_requests_evaluation["Collection tool requests evaluation"]
    Calculate_Presented_Interest_Rate_for_Loan_Service_Request["Calculate Presented Interest Rate for Loan Service Request"]
    Payment_holiday_installment_schedule_examples["Payment holiday - installment schedule examples"]
    Calculate_Payment_holiday_financial_parameters["Calculate Payment holiday financial parameters"]
    Terminate_Contract_Service_if_cannot_be_processed["Terminate Contract Service if cannot be processed"]
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    MOD_05_180_Perform_coupling_payments_with_instalments["{MOD}05.180 Perform coupling payments with instalments"]
    MOD_05_200_Perform_decoupling["{MOD}05.200 Perform decoupling"]
    Logical_Data_Model_Payment_holiday_request["Logical Data Model : Payment holiday request"]
    MOD_08_362_Process_payment_holiday_request["{MOD}08.362 Process payment holiday request"]
    Collection_tool_requests_evaluation -->|unnamed| MOD_08_362_Process_payment_holiday_request
    Logical_Data_Model_Payment_holiday_request -->|unnamed| MOD_08_362_Process_payment_holiday_request
    MOD_08_362_Process_payment_holiday_request -->|unnamed| MOD_05_200_Perform_decoupling
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| MOD_05_200_Perform_decoupling
    MOD_08_362_Process_payment_holiday_request -->|unnamed| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Check_if_Installment_Schedule_is_Closed
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Terminate_Contract_Service_if_cannot_be_processed
    Payment_holiday_installment_schedule_examples -->|unnamed| Calculate_Payment_holiday_financial_parameters
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Calculate_Payment_holiday_financial_parameters
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Calculate_Presented_Interest_Rate_for_Loan_Service_Request
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Pause_bonus_service_evaluation
    MOD_08_362_Process_payment_holiday_request -->|unnamed| Terminate_bonus_services_on_contract
```
