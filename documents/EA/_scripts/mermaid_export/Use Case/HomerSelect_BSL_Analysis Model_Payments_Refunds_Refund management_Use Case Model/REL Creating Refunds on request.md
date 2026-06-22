# REL Creating Refunds on request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Use Case Model
- **Diagram ID**: 163356
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph LR
    Create_refund_order_rule["Create refund order rule"]
    BSL_Refund_request_processing["BSL Refund request processing"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    CaBus_AM[/"CaBus-AM"/]
    n_01_740_Process_notification_about_credit_account_closure(("01.740 Process notification about credit account closure "))
    External_Reference["External Reference"]
    MOD_05_097_Generate_outgoing_payment_for_refund(("{MOD}05.097 Generate outgoing payment for refund"))
    n_05_550_Create_refund_of_overpayment_on_request(("05.550 Create refund of overpayment on request"))
    n_05_550_Create_refund_of_overpayment_on_request -.->|include| MOD_05_097_Generate_outgoing_payment_for_refund
    n_05_550_Create_refund_of_overpayment_on_request -->|unnamed| MOD_Saving_of_Payment_Channels
    CaBus_AM --> n_01_740_Process_notification_about_credit_account_closure
```
