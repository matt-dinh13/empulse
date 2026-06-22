# Account detail

```mermaid
graph TD
    User_Interface_Model_Contract_detail["User Interface Model : Contract detail"]
    n_12_613_Show_account_detail_in_AM["12.613 Show account detail in AM"]
    Statement_Management_STM["Statement Management (STM)"]
    Loyalty_program["Loyalty program"]
    n_12_612_Show_loyalty_account_detail["12.612 Show loyalty account detail"]
    Account_Management_AccountManagementWS_Account_detail["Account Management : AccountManagementWS - Account detail"]
    Account_Transactions_Account_TransactionsWS_charge_cancel_fe["Account Transactions : Account TransactionsWS - charge/cancel fee"]
    Account_UI_Account_UI_Interface_diagram_Transactions["Account UI : Account UI - Interface diagram - Transactions"]
    Tab_Interests_Tab_Interests["Tab - Interests : Tab - Interests"]
    Tab_Unconfirmed_Transactions_Tab_Unconfirmed_Transactions["Tab - Unconfirmed Transactions : Tab - Unconfirmed Transactions"]
    n_12_611_Show_interests["12.611 Show interests"]
    n_12_608_Show_Unconfirmed_transactions["12.608 Show Unconfirmed transactions"]
    n_12_606_Create_new_fee["12.606 Create new fee"]
    n_12_605_Cancel_transaction["12.605 Cancel transaction"]
    Tab_Transaction_History_Tab_Transaction_History["Tab - Transaction History : Tab - Transaction History"]
    Tab_Balances_Print_Statement["Tab - Balances : Print Statement"]
    n_12_604_Show_transaction_history["12.604 Show transaction history"]
    User_interface_Show_account_detail["User interface : Show account detail"]
    n_12_603_Print_or_send_statement["12.603 Print or send statement"]
    n_12_602_Show_balance_detail["12.602 Show balance detail"]
    User["User"]
    CaBus_AM["CaBus-AM"]
    User_interface_Show_account_detail["User interface : Show account detail"]
    MOD_12_601_Show_account_detail["{MOD}12.601 Show account detail"]
    n_12_611_Show_interests -->|unnamed| Tab_Interests_Tab_Interests
    n_12_604_Show_transaction_history -->|unnamed| Tab_Transaction_History_Tab_Transaction_History
    Tab_Transaction_History_Tab_Transaction_History -->|unnamed| n_12_605_Cancel_transaction
    Account_Transactions_Account_TransactionsWS_charge_cancel_fe -->|unnamed| n_12_605_Cancel_transaction
    Tab_Transaction_History_Tab_Transaction_History -->|unnamed| n_12_606_Create_new_fee
    Account_UI_Account_UI_Interface_diagram_Transactions -->|unnamed| n_12_604_Show_transaction_history
    n_12_608_Show_Unconfirmed_transactions -->|unnamed| Tab_Unconfirmed_Transactions_Tab_Unconfirmed_Transactions
    n_12_602_Show_balance_detail -->|unnamed| User_interface_Show_account_detail
    n_12_606_Create_new_fee -->|unnamed| Account_Transactions_Account_TransactionsWS_charge_cancel_fe
    n_12_603_Print_or_send_statement -->|unnamed| Statement_Management_STM
    User_Interface_Model_Contract_detail -->|unnamed| n_12_613_Show_account_detail_in_AM
    n_12_606_Create_new_fee -->|unnamed| User
    MOD_12_601_Show_account_detail -->|unnamed| User_interface_Show_account_detail
    n_12_602_Show_balance_detail -->|unnamed| CaBus_AM
    n_12_605_Cancel_transaction -->|unnamed| CaBus_AM
    n_12_608_Show_Unconfirmed_transactions -->|unnamed| CaBus_AM
    n_12_604_Show_transaction_history -->|unnamed| CaBus_AM
    n_12_611_Show_interests -->|unnamed| CaBus_AM
    n_12_603_Print_or_send_statement -->|unnamed| Tab_Balances_Print_Statement
    n_12_606_Create_new_fee -->|unnamed| CaBus_AM
    Account_Management_AccountManagementWS_Account_detail -->|unnamed| MOD_12_601_Show_account_detail
    n_12_605_Cancel_transaction -->|unnamed| User
    n_12_604_Show_transaction_history -->|unnamed| User
    MOD_12_601_Show_account_detail -->|unnamed| User
    n_12_602_Show_balance_detail -->|unnamed| n_12_603_Print_or_send_statement
    MOD_12_601_Show_account_detail -->|unnamed| CaBus_AM
    Loyalty_program -->|unnamed| n_12_612_Show_loyalty_account_detail
    User -->|unnamed| n_12_613_Show_account_detail_in_AM
    User -->|unnamed| n_12_603_Print_or_send_statement
    User -->|unnamed| n_12_612_Show_loyalty_account_detail
    User -->|unnamed| n_12_602_Show_balance_detail
    User -->|unnamed| n_12_608_Show_Unconfirmed_transactions
    User -->|unnamed| n_12_611_Show_interests
    CaBus_AM -->|unnamed| n_12_613_Show_account_detail_in_AM
```
