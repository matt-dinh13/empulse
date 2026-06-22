# Tab - Balances

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface/Tab - Balances
- **Diagram ID**: 133243
- **Elements**: 12
- **Connectors**: 9

```mermaid
graph TD
    Print_Statement["Print Statement"]
    Statement_Management_STM["Statement Management (STM)"]
    Filling_Actual_balance["Filling Actual balance"]
    Filling_Historical_balances["Filling Historical balances"]
    Historical_balances["Historical balances"]
    n_12_603_Print_or_send_statement["12.603 Print or send statement"]
    n_12_602_Show_balance_detail["12.602 Show balance detail"]
    Search["Search"]
    Billing_period_end["Billing period end"]
    Billing_period_start["Billing period start"]
    Actual_balance["Actual balance"]
    Balances["Balances"]
    Balances -->|unnamed| n_12_602_Show_balance_detail
    Actual_balance -->|unnamed| n_12_603_Print_or_send_statement
    Historical_balances -->|unnamed| Filling_Historical_balances
    Actual_balance -->|unnamed| Filling_Actual_balance
    Actual_balance -->|unnamed| Print_Statement
    n_12_602_Show_balance_detail -->|unnamed| Filling_Historical_balances
    n_12_602_Show_balance_detail -->|unnamed| n_12_603_Print_or_send_statement
    n_12_602_Show_balance_detail -->|unnamed| Filling_Actual_balance
    n_12_603_Print_or_send_statement -->|unnamed| Statement_Management_STM
```
