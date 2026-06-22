# Status of Gift payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Use Case
- **Diagram ID**: 163325
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph LR
    MOD_08_207_Set_Enforce_gift_payment_flag(("{MOD}08.207 Set Enforce gift payment flag"))
    Check_if_Installment_Schedule_is_Closed["Check if Installment Schedule is Closed"]
    Calculation_of_Gift_payment_date["Calculation of Gift payment date"]
    Checking_of_payment_discipline["Checking of payment discipline"]
    n_08_202_Evaluate_status_of_Gift_payment(("08.202 Evaluate status of Gift payment"))
    n_08_020_Display_status_of_service_on_contract(("08.020 Display status of service on contract"))
    User[/"User"/]
    n_08_202_Evaluate_status_of_Gift_payment -->|unnamed| Checking_of_payment_discipline
    n_08_202_Evaluate_status_of_Gift_payment -->|unnamed| Calculation_of_Gift_payment_date
    n_08_202_Evaluate_status_of_Gift_payment -->|unnamed| Check_if_Installment_Schedule_is_Closed
    User --- n_08_020_Display_status_of_service_on_contract
```
