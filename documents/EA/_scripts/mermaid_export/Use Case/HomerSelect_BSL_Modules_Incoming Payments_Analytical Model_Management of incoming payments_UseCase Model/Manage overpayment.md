# Manage overpayment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model
- **Diagram ID**: 164596
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph LR
    n_05_505_Create_refund_for_incoming_payment_manually(("05.505 Create refund for incoming payment manually"))
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    n_05_551_Manage_overpayment(("05.551 Manage overpayment"))
    User[/"User"/]
    n_05_553_Refund_overpayment(("05.553 Refund overpayment"))
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    n_05_552_Transfer_overpayment(("05.552 Transfer overpayment"))
    User -->|unnamed| n_05_551_Manage_overpayment
    n_05_182_Pair_payment_with_contract -.->|include| n_05_045_Cancel_incoming_payment
    User -->|unnamed| n_05_552_Transfer_overpayment
    User -->|unnamed| n_05_553_Refund_overpayment
```
