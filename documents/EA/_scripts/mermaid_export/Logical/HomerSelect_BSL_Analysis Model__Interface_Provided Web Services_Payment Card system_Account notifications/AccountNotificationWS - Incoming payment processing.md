# AccountNotificationWS - Incoming payment processing

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications
- **Diagram ID**: 107061
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class ProcessingStatusDto["ProcessingStatusDto"]
    class PaymentProcessingNotificationDto["PaymentProcessingNotificationDto"]
    class ProcessUnpairedPaymentResponse["ProcessUnpairedPaymentResponse"]
    class ProcessUnpairedPaymentRequest["ProcessUnpairedPaymentRequest"]
    class ProcessPairedPaymentResponse["ProcessPairedPaymentResponse"]
    class ProcessPairedPaymentRequest["ProcessPairedPaymentRequest"]
    class AccountNotificationWS["AccountNotificationWS"]
    AccountNotificationWS ..> ProcessPairedPaymentRequest : unnamed
    AccountNotificationWS ..> ProcessPairedPaymentResponse : unnamed
    AccountNotificationWS ..> ProcessUnpairedPaymentRequest : unnamed
    AccountNotificationWS ..> ProcessUnpairedPaymentResponse : unnamed
    ProcessUnpairedPaymentRequest ..> PaymentProcessingNotificationDto : unnamed
    ProcessPairedPaymentRequest ..> PaymentProcessingNotificationDto : unnamed
    PaymentProcessingNotificationDto ..> ProcessingStatusDto : unnamed
```
