# Cancellation incoming payment manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model
- **Diagram ID**: 162010
- **Elements**: 13
- **Connectors**: 10

```mermaid
graph LR
    ProxyConnector["ProxyConnector"]
    Process_cancel_incoming_payment_request(("Process cancel incoming payment request"))
    MOD_01_720_Reactivate_finished_contracts(("{MOD}01.720 Reactivate finished contracts"))
    IncomingPaymentModuleWS_IncomingPaymentModuleWS["IncomingPaymentModuleWS : IncomingPaymentModuleWS"]
    Incoming_payment_module[/"Incoming payment module"/]
    Perform_incoming_payment_cancellation["Perform incoming payment cancellation"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    n_03_140_Recalculate_accrued_income(("03.140 Recalculate accrued income"))
    MOD_05_200_Perform_decoupling(("{MOD}05.200 Perform decoupling"))
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Special_incoming_payments["Special incoming payments"]
    Incoming_payment_active["Incoming payment active"]
    Incoming_payment_pairing_is_not_locked["Incoming payment pairing is not locked"]
    MOD_05_200_Perform_decoupling -->|unnamed| Incoming_payment_pairing_is_not_locked
    n_05_045_Cancel_incoming_payment -->|unnamed| Incoming_payment_active
    MOD_05_200_Perform_decoupling -->|unnamed| Special_incoming_payments
    Process_cancel_incoming_payment_request -->|unnamed| n_05_045_Cancel_incoming_payment
    n_05_045_Cancel_incoming_payment -.->|include| MOD_05_200_Perform_decoupling
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| MOD_05_200_Perform_decoupling
    n_05_045_Cancel_incoming_payment -->|unnamed| Perform_incoming_payment_cancellation
    IncomingPaymentModuleWS_IncomingPaymentModuleWS -->|unnamed| ProxyConnector
    Incoming_payment_module -->|unnamed| Process_cancel_incoming_payment_request
    Incoming_payment_module -->|unnamed| n_05_045_Cancel_incoming_payment
```
