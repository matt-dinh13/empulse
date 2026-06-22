# Cancellation incoming payment manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model
- **Diagram ID**: 164591
- **Elements**: 7
- **Connectors**: 1

```mermaid
graph LR
    n_05_040_Cancel_incoming_payment_manually(("05.040 Cancel incoming payment manually"))
    diagram_5D7DD946_3C11_4c99_A90A_FD3545E55ECB["$diagram://{5D7DD946-3C11-4c99-A90A-FD3545E55ECB}"]
    Incoming_payment_unpairing_is_alowed["Incoming payment unpairing is alowed"]
    Incoming_payment_active["Incoming payment active"]
    User[/"User"/]
    IncomingPaymentModuleWS_IncomingPaymentModuleWS["IncomingPaymentModuleWS : IncomingPaymentModuleWS"]
    Perform_incoming_payment_cancellation_INCPAY["Perform incoming payment cancellation (INCPAY)"]
    User --> n_05_040_Cancel_incoming_payment_manually
```
