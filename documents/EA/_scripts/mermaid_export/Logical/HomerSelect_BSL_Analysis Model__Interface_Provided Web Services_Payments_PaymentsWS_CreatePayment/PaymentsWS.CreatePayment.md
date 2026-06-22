# PaymentsWS.CreatePayment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/CreatePayment
- **Diagram ID**: 97714
- **Elements**: 9
- **Connectors**: 7

```mermaid
classDiagram
    class External_Reference["External Reference"]
    class CreatePaymentResultType["CreatePaymentResultType"]
    class PayinCode["PayinCode"]
    class SourceSystemType["SourceSystemType"]
    class CreatePaymentResult["CreatePaymentResult"]
    class PaymentToCreate["PaymentToCreate"]
    class CreatePaymentResponse["CreatePaymentResponse"]
    class CreatePaymentRequest["CreatePaymentRequest"]
    class PaymentsWS["PaymentsWS"]
    PaymentsWS --> CreatePaymentResponse : unnamed
    PaymentsWS --> CreatePaymentRequest : unnamed
    CreatePaymentRequest --> PaymentToCreate : unnamed
    CreatePaymentResponse --> CreatePaymentResult : unnamed
    PaymentToCreate --> SourceSystemType : unnamed
    PaymentToCreate --> PayinCode : unnamed
    CreatePaymentResult --> CreatePaymentResultType : unnamed
```
