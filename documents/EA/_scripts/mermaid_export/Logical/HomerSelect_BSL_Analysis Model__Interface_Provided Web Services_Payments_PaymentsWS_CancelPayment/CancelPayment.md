# CancelPayment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/CancelPayment
- **Diagram ID**: 83233
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class External_Reference["External Reference"]
    class SourceSystemType["SourceSystemType"]
    class CancelPaymentResultType["CancelPaymentResultType"]
    class CancelPaymentResponse["CancelPaymentResponse"]
    class PaymentToCancel["PaymentToCancel"]
    class CancelPaymentRequest["CancelPaymentRequest"]
    class PaymentsWS["PaymentsWS"]
    CancelPaymentRequest --> PaymentToCancel : unnamed
    PaymentToCancel --> SourceSystemType : unnamed
    CancelPaymentResponse --> CancelPaymentResultType : unnamed
    PaymentsWS --> CancelPaymentRequest : unnamed
    PaymentsWS --> CancelPaymentResponse : unnamed
```
