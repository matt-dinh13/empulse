# Calculate debt on external request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/UseCase Model
- **Diagram ID**: 164572
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Calculate_debt_on_interest_to_the_passed_date_from_installme["Calculate debt on interest to the passed date (from installment schedule)"]
    OnlineDebtWS_OnlineDebtWS["OnlineDebtWS : OnlineDebtWS"]
    External_system[/"External system"/]
    n_01_483_Calculate_debt_on_external_request(("01.483 Calculate debt on external request"))
    OnlineDebtWS_OnlineDebtWS -->|unnamed| n_01_483_Calculate_debt_on_external_request
    External_system --> n_01_483_Calculate_debt_on_external_request
    OnlineDebtWS_OnlineDebtWS -->|unnamed| External_system
```
