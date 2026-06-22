# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Access Rights
- **Diagram ID**: 164245
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    n_05_505_Create_refund_from_incoming_payment["05.505 Create refund from incoming payment"]
    n_05_553_Refund_overpayment["05.553 Refund overpayment"]
    n_05_553_Refund_overpayment["05.553 Refund overpayment"]
    n_05_505_Create_refund_for_incoming_payment_manually["05.505 Create refund for incoming payment manually"]
    DEL_05_502_Process_refund_message["{DEL}05.502 Process refund message"]
    n_05_502_Process_refund_message["05.502 Process refund message"]
    MOD_05_097_Generate_outgoing_payment_for_refund["{MOD}05.097 Generate outgoing payment for refund"]
    n_05_505_Create_refund_for_incoming_payment_manually["05.505 Create refund for incoming payment manually"]
    DEL_05_500_Create_refund_automatically["{DEL} 05.500 Create refund automatically"]
    DEL_05_502_Process_refund_message -->|unnamed| n_05_502_Process_refund_message
    DEL_05_500_Create_refund_automatically -->|unnamed| MOD_05_097_Generate_outgoing_payment_for_refund
```
