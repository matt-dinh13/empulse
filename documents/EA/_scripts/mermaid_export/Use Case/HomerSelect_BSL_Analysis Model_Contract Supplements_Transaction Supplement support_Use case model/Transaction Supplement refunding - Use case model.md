# Transaction Supplement refunding - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model
- **Diagram ID**: 164673
- **Elements**: 12
- **Connectors**: 11

```mermaid
graph LR
    ADD_13_128_Process_transaction_confirmation_response(("{ADD}13.128 Process transaction confirmation response"))
    Call_Transaction_confirmation_REST_in_AM["Call Transaction confirmation (REST) in AM"]
    Transaction_Supplement_Notifications_Contract_Supplement_Not["Transaction Supplement Notifications : Contract Supplement Notifications"]
    unnamed["unnamed"]
    Create_CASH_POS_transaction_rule["Create CASH/POS transaction rule"]
    CaBus_AM[/"CaBus-AM"/]
    MOD_13_114_Process_transaction_cancellation_request(("{MOD}13.114 Process transaction cancellation request"))
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    Web_Services_Transaction_Supplement_Update_Transaction_Suppl["Web Services : Transaction Supplement - Update Transaction Supplement"]
    Validate_Transaction_Supplement_update_request["Validate Transaction Supplement update request"]
    External_system[/"External system"/]
    n_13_112_Refund_Transaction_Supplement(("13.112 Refund Transaction Supplement"))
    n_13_112_Refund_Transaction_Supplement -->|unnamed| Validate_Transaction_Supplement_update_request
    n_13_112_Refund_Transaction_Supplement -->|unnamed| Web_Services_Transaction_Supplement_Update_Transaction_Suppl
    External_system --> n_13_112_Refund_Transaction_Supplement
    MOD_13_114_Process_transaction_cancellation_request -->|unnamed| Change_status_of_Contract_Supplement
    MOD_13_114_Process_transaction_cancellation_request -->|unnamed| Call_Transaction_confirmation_REST_in_AM
    MOD_13_114_Process_transaction_cancellation_request -->|unnamed| Create_CASH_POS_transaction_rule
    MOD_13_114_Process_transaction_cancellation_request -->|unnamed| Transaction_Supplement_Notifications_Contract_Supplement_Not
    CaBus_AM --> MOD_13_114_Process_transaction_cancellation_request
    unnamed -->|unnamed| n_13_112_Refund_Transaction_Supplement
    unnamed -->|unnamed| MOD_13_114_Process_transaction_cancellation_request
    ADD_13_128_Process_transaction_confirmation_response --- CaBus_AM
```
