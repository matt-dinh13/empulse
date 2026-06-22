# AccountTransactionsWS - usage in incoming payment management

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions
- **Diagram ID**: 149530
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class ProcessingStatusDto["ProcessingStatusDto"]
    class PaymentProcessingNotificationDto["PaymentProcessingNotificationDto"]
    class PairPaymentResponse["PairPaymentResponse"]
    class UnpairPaymentResponse["UnpairPaymentResponse"]
    class UnpairPaymentRequest["UnpairPaymentRequest"]
    class PairPaymentRequest["PairPaymentRequest"]
    class PaymentDto["PaymentDto"]
    class UnpairPaymentBatchResponse["UnpairPaymentBatchResponse"]
    class UnpairPaymentBatchRequest["UnpairPaymentBatchRequest"]
    class AccountTransactionWS["AccountTransactionWS"]
    AccountTransactionWS ..> PairPaymentRequest : unnamed
    AccountTransactionWS ..> UnpairPaymentBatchRequest : unnamed
    AccountTransactionWS ..> UnpairPaymentRequest : unnamed
    AccountTransactionWS ..> PairPaymentResponse : unnamed
    AccountTransactionWS ..> UnpairPaymentResponse : unnamed
    AccountTransactionWS ..> UnpairPaymentBatchResponse : unnamed
    PairPaymentRequest ..> PaymentDto : unnamed
    UnpairPaymentResponse ..> PaymentProcessingNotificationDto : unnamed
    PairPaymentResponse ..> PaymentProcessingNotificationDto : unnamed
    PaymentProcessingNotificationDto ..> ProcessingStatusDto : unnamed
```
