# Divide incoming payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model
- **Diagram ID**: 162011
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph LR
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    IncomingPaymentModuleWS_IncomingPaymentModuleWS["IncomingPaymentModuleWS : IncomingPaymentModuleWS"]
    UseCase_Model_Cancel_incoming_payment["UseCase Model : Cancel incoming payment"]
    Amount_range_validation["Amount range validation"]
    Payment_division_allowed["Payment division allowed"]
    Divide_incoming_payment_in_BSL((" Divide incoming payment in BSL"))
    IncomingPaymentModuleWS_IncomingPaymentModuleWS -->|unnamed| Divide_incoming_payment_in_BSL
    Divide_incoming_payment_in_BSL -->|unnamed| Payment_division_allowed
    Divide_incoming_payment_in_BSL -->|unnamed| Amount_range_validation
    Divide_incoming_payment_in_BSL -.->|include| n_05_045_Cancel_incoming_payment
```
