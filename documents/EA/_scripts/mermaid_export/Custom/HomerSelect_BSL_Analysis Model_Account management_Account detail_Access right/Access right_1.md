# Access right

```mermaid
graph TD
    MOD_Account_detail_visibility["{MOD}Account detail visibility"]
    n_12_601_Show_account_detail_salary_debit_card["12.601 Show account detail (salary debit card)"]
    ADD_12_613_Show_account_detail_in_AM["{ADD}12.613 Show account detail in AM"]
    n_12_613_Show_account_detail_in_AM["12.613 Show account detail in AM"]
    ADD_12_612_Show_loyalty_account_detail["{ADD}12.612 Show loyalty account detail"]
    n_12_612_Show_loyalty_account_detail["12.612 Show loyalty account detail"]
    n_12_611_Show_interests["12.611 Show interests"]
    n_12_611_Show_interests["12.611 Show interests"]
    n_12_604_Show_transaction_history["12.604 Show transaction history"]
    n_12_604_Show_transaction_history["12.604 Show transaction history"]
    n_12_606_Create_new_fee["12.606 Create new fee"]
    n_12_606_Create_new_fee["12.606 Create new fee"]
    n_12_605_Cancel_fee["12.605 Cancel fee
"]
    n_12_605_Cancel_transaction["12.605 Cancel transaction"]
    n_12_608_Show_Unconfirmed_transactions["12.608 Show Unconfirmed transactions"]
    n_12_608_Show_Unconfirmed_transactions["12.608 Show Unconfirmed transactions"]
    n_12_603_Print_or_send_statement["12.603 Print or send statement"]
    n_12_603_Print_ADD_CLM_1008_or_send_ADD_statement["12.603 Print {ADD CLM-1008}or send{/ADD}statement"]
    n_12_602_Show_balance_detail["12.602 Show balance detail"]
    n_12_602_Show_balance_detail["12.602 Show balance detail"]
    MOD_12_601_Show_account_detail["{MOD}12.601 Show account detail"]
    n_12_601_Show_account_detail["12.601 Show account detail"]
    MOD_Account_detail_visibility -->|unnamed| n_12_601_Show_account_detail_salary_debit_card
    n_12_602_Show_balance_detail -->|unnamed| n_12_602_Show_balance_detail
    n_12_606_Create_new_fee -->|unnamed| n_12_606_Create_new_fee
    n_12_603_Print_or_send_statement -->|unnamed| n_12_603_Print_ADD_CLM_1008_or_send_ADD_statement
    MOD_12_601_Show_account_detail -->|unnamed| MOD_Account_detail_visibility
    MOD_12_601_Show_account_detail -->|unnamed| n_12_601_Show_account_detail
    n_12_605_Cancel_transaction -->|unnamed| n_12_605_Cancel_fee
    n_12_611_Show_interests -->|unnamed| n_12_611_Show_interests
    n_12_608_Show_Unconfirmed_transactions -->|unnamed| n_12_608_Show_Unconfirmed_transactions
    n_12_613_Show_account_detail_in_AM -->|unnamed| ADD_12_613_Show_account_detail_in_AM
    n_12_604_Show_transaction_history -->|unnamed| n_12_604_Show_transaction_history
    n_12_612_Show_loyalty_account_detail -->|unnamed| ADD_12_612_Show_loyalty_account_detail
```
