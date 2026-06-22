# Refund processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Use Case Model
- **Diagram ID**: 164598
- **Elements**: 6
- **Connectors**: 2

```mermaid
graph LR
    System[/"System"/]
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Create_refund_for_incoming_payment_via_API(("Create refund for incoming payment via API"))
    Process_refund_notification(("Process refund notification"))
    External_System[/"External System"/]
    Sequence_Diagrams_Cancel_Overpayment["Sequence Diagrams : Cancel Overpayment"]
    External_System --> Create_refund_for_incoming_payment_via_API
    System --> Process_refund_notification
```
