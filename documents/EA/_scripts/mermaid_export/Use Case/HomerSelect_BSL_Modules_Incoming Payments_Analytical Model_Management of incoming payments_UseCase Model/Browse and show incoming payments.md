# Browse and show incoming payments 

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model
- **Diagram ID**: 164594
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph LR
    Browse_incoming_payments_Browse_incoming_payments_UI["Browse incoming payments : Browse incoming payments - UI"]
    n_05_020_Browse_incoming_payments(("05.020 Browse incoming payments"))
    User_Interface_Incoming_payment_detail_UI_TODO_refunds["User Interface : Incoming payment detail - UI - TODO refunds"]
    User[/"User"/]
    n_05_050_Show_incoming_payment_detail(("05.050 Show incoming payment detail"))
    User --> n_05_050_Show_incoming_payment_detail
    User --> n_05_020_Browse_incoming_payments
```
