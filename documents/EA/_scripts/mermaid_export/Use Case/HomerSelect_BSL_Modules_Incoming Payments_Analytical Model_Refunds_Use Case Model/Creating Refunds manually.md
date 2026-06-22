# Creating Refunds manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Use Case Model
- **Diagram ID**: 164597
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph LR
    User[/"User"/]
    n_05_505_Create_refund_for_incoming_payment_manually(("05.505 Create refund for incoming payment manually"))
    MOD_Create_refund_item_rule["{MOD}Create refund item rule"]
    Calculate_refund_fee["Calculate refund fee "]
    n_05_553_Refund_overpayment(("05.553 Refund overpayment"))
    User --> n_05_505_Create_refund_for_incoming_payment_manually
    User --- n_05_553_Refund_overpayment
```
