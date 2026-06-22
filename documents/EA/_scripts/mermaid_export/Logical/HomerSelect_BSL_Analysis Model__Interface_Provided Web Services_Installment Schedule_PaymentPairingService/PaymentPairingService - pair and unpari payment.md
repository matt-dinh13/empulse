# PaymentPairingService - pair and unpari payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService
- **Diagram ID**: 92859
- **Elements**: 13
- **Connectors**: 12

```mermaid
classDiagram
    class n_05_061_Decouple_incoming_payments_from_IS_on_local_request["05.061 Decouple incoming payments from IS on local request"]
    class n_05_031_Couple_incoming_payments_with_IS_on_local_request["05.031 Couple incoming payments with IS on local request"]
    class SourceSystemEnumDto["SourceSystemEnumDto"]
    class PaymentTypeDto["PaymentTypeDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class PaymentPairingService["PaymentPairingService"]
    class ProcessingStatusDto["ProcessingStatusDto"]
    class PaymentProcessingNotificationDto["PaymentProcessingNotificationDto"]
    class PairPaymentResponse["PairPaymentResponse"]
    class UnpairPaymentResponse["UnpairPaymentResponse"]
    class UnpairPaymentRequest["UnpairPaymentRequest"]
    class PairPaymentRequest["PairPaymentRequest"]
    class PaymentDto["PaymentDto"]
    PaymentPairingService ..> n_05_031_Couple_incoming_payments_with_IS_on_local_request : unnamed
    PaymentPairingService ..> PairPaymentResponse : unnamed
    PaymentPairingService ..> PairPaymentRequest : unnamed
    PaymentPairingService ..> n_05_061_Decouple_incoming_payments_from_IS_on_local_request : unnamed
    UnpairPaymentResponse ..> PaymentProcessingNotificationDto : unnamed
    PairPaymentRequest ..> PaymentDto : unnamed
    UnpairPaymentRequest ..> TransactionSourceIdDto : unnamed
    PaymentProcessingNotificationDto ..> ProcessingStatusDto : unnamed
    PaymentProcessingNotificationDto ..> TransactionSourceIdDto : unnamed
    PaymentDto ..> PaymentTypeDto : unnamed
    TransactionSourceIdDto ..> SourceSystemEnumDto : unnamed
    PaymentDto ..> TransactionSourceIdDto : unnamed
```
