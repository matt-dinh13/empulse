# Processing outgoing payments for refunds

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Use Case Model
- **Diagram ID**: 164242
- **Elements**: 9
- **Connectors**: 7

```mermaid
graph LR
    Create_refund_order_rule["Create refund order rule"]
    Process_outgoing_payment_for_refunds_Process_outgoing_paymen["Process outgoing payment for refunds : Process outgoing payment for refunds"]
    CIF[/"CIF"/]
    n_05_513_Process_outgoing_payment_for_refund_items(("05.513 Process outgoing payment for refund items"))
    User[/"User"/]
    MOD_05_097_Generate_outgoing_payment_for_refund(("{MOD}05.097 Generate outgoing payment for refund"))
    MOD_05_240_Cancel_outgoing_payments(("{MOD}05.240 Cancel outgoing payments"))
    n_05_516_Cancel_unpaid_outgoing_payment_for_refund(("05.516 Cancel unpaid outgoing payment for refund"))
    n_05_515_Generate_outgoing_payment_for_refund_items(("05.515 Generate outgoing payment for refund items"))
    n_05_516_Cancel_unpaid_outgoing_payment_for_refund -.->|include| MOD_05_240_Cancel_outgoing_payments
    n_05_515_Generate_outgoing_payment_for_refund_items -.->|include| MOD_05_097_Generate_outgoing_payment_for_refund
    n_05_513_Process_outgoing_payment_for_refund_items --> CIF
    n_05_513_Process_outgoing_payment_for_refund_items -->|unnamed| Process_outgoing_payment_for_refunds_Process_outgoing_paymen
    User --> n_05_513_Process_outgoing_payment_for_refund_items
    User --> n_05_516_Cancel_unpaid_outgoing_payment_for_refund
    User --> n_05_515_Generate_outgoing_payment_for_refund_items
```
