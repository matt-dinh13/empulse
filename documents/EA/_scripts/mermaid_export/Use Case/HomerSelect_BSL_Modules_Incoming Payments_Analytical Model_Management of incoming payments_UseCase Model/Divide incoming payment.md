# Divide incoming payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model
- **Diagram ID**: 164593
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph LR
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Amount_range_validation["Amount range validation"]
    Payment_division_examples["Payment division examples"]
    User_Interface_Divide_incoming_payment_UI["User Interface : Divide incoming payment - UI"]
    n_05_070_Divide_incoming_payment(("05.070 Divide incoming payment"))
    n_05_020_Browse_incoming_payments(("05.020 Browse incoming payments"))
    UseCase_Model_Cancel_incoming_payment["UseCase Model : Cancel incoming payment"]
    User[/"User"/]
    Payment_division_allowed["Payment division allowed"]
    User --- n_05_045_Cancel_incoming_payment
    User --> n_05_020_Browse_incoming_payments
    User --> n_05_070_Divide_incoming_payment
```
