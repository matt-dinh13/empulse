# Cancel incoming payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model
- **Diagram ID**: 164595
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph LR
    PaymentPairingService_PaymentPairingService_pair_and_unpari_["PaymentPairingService : PaymentPairingService - pair and unpari payment"]
    User[/"User"/]
    Cabus_AM[/"Cabus AM"/]
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Perform_incoming_payment_cancellation_INCPAY["Perform incoming payment cancellation (INCPAY)"]
    Account_Transactions_AccountTransactionWS["Account Transactions : AccountTransactionWS"]
    Filling_of_AccountTransactions_PaymentDto["Filling of AccountTransactions:PaymentDto"]
    Cabus_AM --> n_05_045_Cancel_incoming_payment
    User --- n_05_045_Cancel_incoming_payment
```
