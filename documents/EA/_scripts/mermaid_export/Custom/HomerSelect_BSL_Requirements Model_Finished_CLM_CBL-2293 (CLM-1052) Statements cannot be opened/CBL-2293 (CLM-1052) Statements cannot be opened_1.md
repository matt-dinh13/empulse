# CBL-2293 (CLM-1052) Statements cannot be opened

```mermaid
graph TD
    Tab_Balances_Tab_Balances["Tab - Balances : Tab - Balances"]
    n_12_602_Show_balance_detail["12.602 Show balance detail"]
    n_12_603_Print_or_send_statement["12.603 Print or send statement"]
    GetAccountBillingPeriodBalances["GetAccountBillingPeriodBalances"]
    REQ_1_Show_balance_detail_Print_statement_button_availabilit["REQ#1 - Show balance detail - Print statement button availability update"]
    GetAccountBillingPeriodBalancesResponse["GetAccountBillingPeriodBalancesResponse"]
    REQ_1_Show_balance_detail_Print_statement_button_availabilit -->|unnamed| n_12_602_Show_balance_detail
    n_12_602_Show_balance_detail -->|unnamed| GetAccountBillingPeriodBalances
    n_12_602_Show_balance_detail -->|unnamed| n_12_603_Print_or_send_statement
```
