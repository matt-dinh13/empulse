# PaymentsWS REST

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/PaymentsWS REST
- **Diagram ID**: 163116
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class CreateIncomingPaymentResponse["CreateIncomingPaymentResponse"]
    class IncomingPayment["IncomingPayment"]
    class CreateIncomingPaymentRequest["CreateIncomingPaymentRequest"]
    class PaymentsWS["PaymentsWS"]
    PaymentsWS ..> CreateIncomingPaymentResponse : unnamed
    CreateIncomingPaymentRequest ..> IncomingPayment : unnamed
    IncomingPayment ..> PaymentsWS : unnamed
    unnamed --> CreateIncomingPaymentRequest : unnamed
```
