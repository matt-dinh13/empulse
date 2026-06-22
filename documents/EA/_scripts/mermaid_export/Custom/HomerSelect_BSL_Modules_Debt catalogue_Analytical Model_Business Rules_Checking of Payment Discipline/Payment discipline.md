# Payment discipline

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline
- **Diagram ID**: 138004
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph TD
    Check_correct_installment_payments_Example["Check correct installment payments - Example"]
    Checking_of_payment_discipline["Checking of payment discipline"]
    Checking_of_correct_installment_payments["Checking of correct installment payments "]
    Payment_Discipline_Parameters["Payment Discipline Parameters"]
    Checking_of_payment_discipline -->|unnamed| Payment_Discipline_Parameters
    Checking_of_correct_installment_payments -->|unnamed| Payment_Discipline_Parameters
    Check_correct_installment_payments_Example -->|unnamed| Checking_of_correct_installment_payments
    Checking_of_payment_discipline -->|unnamed| Checking_of_correct_installment_payments
```
