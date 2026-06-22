# Commodity cancelation

```mermaid
graph TD
    Get_sales_quote_data["Get sales quote data"]
    Get_financial_parameters_data["Get financial parameters data"]
    ADD_Get_contract_data["{ADD}Get contract data "]
    ADD_Get_offer_data["{ADD}Get offer data"]
    ADD_Process_contract_supplement_cancelation_notification["{ADD}Process contract supplement cancelation notification"]
    ADD_Get_salesroom_from_HomeSIS["{ADD}Get salesroom from HomeSIS"]
    ADD_Cancel_external_validation_validation["{ADD}Cancel external validation - validation"]
    MOD_External_validation_cancellation["{MOD}External validation cancellation"]
    Loan_Origination["Loan Origination"]
    Contract_Management["Contract Management"]
    Account_Management["Account Management"]
    External_System["External System"]
    Process_transaction_cancelation_notification["Process transaction cancelation notification"]
    ADD_Get_Application_data["{ADD}Get Application data"]
    MOD_Process_application_cancelation_notification["{MOD}Process application cancelation notification"]
    Process_contract_cancelation_notification["Process contract cancelation notification"]
    Cancel_external_validation["Cancel external validation"]
    MOD_Process_application_cancelation_notification -->|unnamed| ADD_Get_Application_data
    Process_contract_cancelation_notification -->|unnamed| Get_financial_parameters_data
    MOD_Process_application_cancelation_notification -->|unnamed| ADD_Get_offer_data
    Contract_Management -->|unnamed| ADD_Process_contract_supplement_cancelation_notification
    ADD_Get_contract_data -->|unnamed| ADD_Process_contract_supplement_cancelation_notification
    ADD_Cancel_external_validation_validation -->|unnamed| ADD_Get_salesroom_from_HomeSIS
    Cancel_external_validation -->|unnamed| ADD_Cancel_external_validation_validation
    Process_transaction_cancelation_notification -->|unnamed| Get_sales_quote_data
    Account_Management -->|unnamed| Process_transaction_cancelation_notification
    Process_contract_cancelation_notification -->|unnamed| Cancel_external_validation
    Loan_Origination -->|unnamed| MOD_Process_application_cancelation_notification
    Contract_Management -->|unnamed| Process_contract_cancelation_notification
    External_System -->|unnamed| Cancel_external_validation
    External_System -->|unnamed| Cancel_external_validation
    Process_transaction_cancelation_notification -->|unnamed| Cancel_external_validation
    MOD_Process_application_cancelation_notification -->|unnamed| Cancel_external_validation
    Cancel_external_validation -->|unnamed| MOD_External_validation_cancellation
```
