# Transaction Supplement authorization/confirmation - Use case model

```mermaid
graph TD
    ADD_13_128_Process_transaction_confirmation_response["{ADD}13.128 Process transaction confirmation response"]
    MOD_Create_Confirm_Transaction_Request_for_AM["{MOD}Create Confirm Transaction Request for AM"]
    Call_Transaction_confirmation_REST_in_AM["Call Transaction confirmation (REST) in AM"]
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl["{MOD}13.110 Process account transaction for Transaction Supplement"]
    Get_PaymentChannel_data_by_paymentChannelId["Get PaymentChannel data by paymentChannelId"]
    Logical_data_model_Account_transaction_Logical_data_model["Logical data model : Account transaction - Logical data model"]
    Create_CASH_POS_transaction_rule["Create CASH/POS transaction rule"]
    Account_Transactions_AuthorizeTransactionWithIPVariant["Account Transactions : AuthorizeTransactionWithIPVariant"]
    CaBus_AM["CaBus-AM"]
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    Transaction_Supplement_documents_Use_case_model["Transaction Supplement documents - Use case model "]
    Transaction_Supplement_request_creation_Use_case_model["Transaction Supplement request creation - Use case model"]
    System_event["System event"]
    el_1881451["Boundary"]
    el_1881451 -->|unnamed| Transaction_Supplement_documents_Use_case_model
    System_event -->|unnamed| MOD_13_110_Process_account_transaction_for_Transaction_Suppl
    Transaction_Supplement_request_creation_Use_case_model -->|unnamed| Transaction_Supplement_documents_Use_case_model
    CaBus_AM -->|unnamed| MOD_13_110_Process_account_transaction_for_Transaction_Suppl
    Account_Transactions_AuthorizeTransactionWithIPVariant -->|unnamed| MOD_13_110_Process_account_transaction_for_Transaction_Suppl
    Logical_data_model_Account_transaction_Logical_data_model -->|unnamed| Create_CASH_POS_transaction_rule
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl -->|unnamed| MOD_Create_Confirm_Transaction_Request_for_AM
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl -->|unnamed| Call_Transaction_confirmation_REST_in_AM
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl -->|unnamed| Get_PaymentChannel_data_by_paymentChannelId
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl -->|unnamed| Change_status_of_Contract_Supplement
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl -->|unnamed| Create_CASH_POS_transaction_rule
    ADD_13_128_Process_transaction_confirmation_response -->|unnamed| CaBus_AM
```
