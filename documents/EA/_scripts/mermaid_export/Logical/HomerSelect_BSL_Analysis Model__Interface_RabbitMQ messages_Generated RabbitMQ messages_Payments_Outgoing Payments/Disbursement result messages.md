# Disbursement result messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments
- **Diagram ID**: 163539
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class DisbursementDenialDto["DisbursementDenialDto"]
    class DisbursementDenial["DisbursementDenial"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class DisbursementConfirmationDto["DisbursementConfirmationDto"]
    class DisbursementConfirmation["DisbursementConfirmation"]
    DisbursementConfirmation ..> DisbursementConfirmationDto : unnamed
    DisbursementDenialDto ..> TransactionSourceIdDto : unnamed
    DisbursementConfirmationDto ..> TransactionSourceIdDto : unnamed
    DisbursementDenial ..> DisbursementDenialDto : unnamed
```
