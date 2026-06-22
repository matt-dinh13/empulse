# Cancelation incoming payment on internal component request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Use Case Model
- **Diagram ID**: 143093
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph LR
    PaymentManagementWS_PaymentManagementWS_for_local_systems["PaymentManagementWS :PaymentManagementWS (for local systems)"]
    Account_Transactions_AccountTransactionsWS_usage_in_incoming["Account Transactions : AccountTransactionsWS - usage in incoming payment management"]
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Perform_incoming_payment_cancellation_INCPAY["Perform incoming payment cancellation (INCPAY)"]
    MOD_05_345_Cancel_incoming_payment_on_local_request(("{MOD}05.345 Cancel incoming payment on local request"))
    System[/"System"/]
    PaymentManagementWS_PaymentManagementWS_for_local_systems -->|unnamed| MOD_05_345_Cancel_incoming_payment_on_local_request
    MOD_05_345_Cancel_incoming_payment_on_local_request -.->|include| n_05_045_Cancel_incoming_payment
    Account_Transactions_AccountTransactionsWS_usage_in_incoming -->|unnamed| n_05_045_Cancel_incoming_payment
    System --> MOD_05_345_Cancel_incoming_payment_on_local_request
```
