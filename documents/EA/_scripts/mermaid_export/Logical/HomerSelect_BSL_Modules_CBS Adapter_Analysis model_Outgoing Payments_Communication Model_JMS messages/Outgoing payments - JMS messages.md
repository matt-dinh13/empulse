# Outgoing payments - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model/JMS messages
- **Diagram ID**: 142877
- **Elements**: 14
- **Connectors**: 11

```mermaid
classDiagram
    class External_Reference["External Reference"]
    class OutgoingPaymentNotification["OutgoingPaymentNotification"]
    class OutgoingPaymentTransactionSubtype["OutgoingPaymentTransactionSubtype"]
    class DisbursementConfirmationResultTypeDto["DisbursementConfirmationResultTypeDto"]
    class PaymentOrderRequest["PaymentOrderRequest"]
    class CancelOutgoingPaymentRequest["CancelOutgoingPaymentRequest"]
    class DisbursementConfirmationResponse["DisbursementConfirmationResponse"]
    class BankAccountDto["BankAccountDto"]
    class OutgoingPaymentChannelDto["OutgoingPaymentChannelDto"]
    class OutgoingPaymentTypeDto["OutgoingPaymentTypeDto"]
    class OutgoingPaymentEventTypeDto["OutgoingPaymentEventTypeDto"]
    class Legend["Legend"]
    class DisbursementConfirmationRequest["DisbursementConfirmationRequest"]
    class OutgoingPaymentDto["OutgoingPaymentDto"]
    PaymentOrderRequest --> OutgoingPaymentDto : unnamed
    CancelOutgoingPaymentRequest ..> OutgoingPaymentDto : unnamed
    DisbursementConfirmationRequest ..> OutgoingPaymentEventTypeDto : unnamed
    OutgoingPaymentDto ..> OutgoingPaymentTypeDto : unnamed
    OutgoingPaymentDto ..> OutgoingPaymentChannelDto : unnamed
    OutgoingPaymentDto ..> BankAccountDto : unnamed
    OutgoingPaymentDto ..> BankAccountDto : unnamed
    DisbursementConfirmationResponse ..> DisbursementConfirmationResultTypeDto : unnamed
    OutgoingPaymentDto ..> OutgoingPaymentTransactionSubtype : unnamed
    OutgoingPaymentNotification ..> OutgoingPaymentTypeDto : unnamed
    OutgoingPaymentNotification ..> OutgoingPaymentEventTypeDto : unnamed
```
