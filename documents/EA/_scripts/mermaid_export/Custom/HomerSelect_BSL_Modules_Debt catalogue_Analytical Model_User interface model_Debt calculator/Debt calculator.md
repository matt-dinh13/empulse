# Debt calculator

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model/Debt calculator
- **Diagram ID**: 137998
- **Elements**: 13
- **Connectors**: 5

```mermaid
graph TD
    Calculation_of_future_debt_for_REL_contract["Calculation of future debt for REL contract"]
    Credit_calculation_panel["Credit calculation panel"]
    Debt_calculation_panel["Debt calculation panel"]
    UseCase_Model_Debt_calculator["UseCase Model : Debt calculator"]
    n_01_479_Show_supposed_debt_for_REL_contract["01.479 Show supposed debt for REL contract"]
    Revolving_area["Revolving area"]
    Information_area["Information area"]
    n_01_478_Show_supposed_debt_for_CEL_contract["01.478 Show supposed debt for CEL contract"]
    Supposed_debt["Supposed debt"]
    Close["Close"]
    Calculate["Calculate"]
    Supposed_payment_date["Supposed payment date"]
    Debt_calculator["Debt calculator"]
    Debt_calculator -->|unnamed| n_01_478_Show_supposed_debt_for_CEL_contract
    Debt_calculator -->|unnamed| n_01_479_Show_supposed_debt_for_REL_contract
    n_01_479_Show_supposed_debt_for_REL_contract -->|unnamed| Calculation_of_future_debt_for_REL_contract
    n_01_479_Show_supposed_debt_for_REL_contract -->|unnamed| UseCase_Model_Debt_calculator
    n_01_478_Show_supposed_debt_for_CEL_contract -->|unnamed| UseCase_Model_Debt_calculator
```
