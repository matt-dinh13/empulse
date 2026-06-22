# Business rule

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule
- **Diagram ID**: 126440
- **Elements**: 11
- **Connectors**: 4

```mermaid
graph TD
    MOD_Account_detail_visibility["{MOD}Account detail visibility"]
    Filling_Interest_detail["Filling Interest detail"]
    Filling_Interests["Filling Interests"]
    Description_of_transaction_KZ["Description of transaction - KZ"]
    Description_of_transaction["Description of transaction"]
    Search_for_transactions_rule_countries_specification["Search for transactions rule - countries specification"]
    Search_for_transactions_rule["Search for transactions rule"]
    Filling_Actual_balance_KZ["Filling Actual balance - KZ"]
    Filling_Actual_balance["Filling Actual balance"]
    Filling_Historical_balances_KZ["Filling Historical balances - KZ"]
    Filling_Historical_balances["Filling Historical balances"]
    Filling_Historical_balances_KZ -->|unnamed| Filling_Historical_balances
    Filling_Actual_balance_KZ -->|unnamed| Filling_Actual_balance
    Search_for_transactions_rule_countries_specification -->|unnamed| Search_for_transactions_rule
    Description_of_transaction_KZ -->|unnamed| Description_of_transaction
```
