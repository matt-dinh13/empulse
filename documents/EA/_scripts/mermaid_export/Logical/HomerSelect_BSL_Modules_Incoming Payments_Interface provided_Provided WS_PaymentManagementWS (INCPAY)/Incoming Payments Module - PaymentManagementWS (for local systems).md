# Incoming Payments Module - PaymentManagementWS (for local systems)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentManagementWS (INCPAY)
- **Diagram ID**: 140189
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class MOD_05_345_Cancel_incoming_payment_on_local_request["{MOD}05.345 Cancel incoming payment on local request"]
    class MOD_05_380_Create_incoming_payment_on_local_request["{MOD}05.380 Create incoming payment on local request"]
    class PaymentDto["PaymentDto"]
    class PaymentTypeDto["PaymentTypeDto"]
    class CancelIncomingPaymentResponse["CancelIncomingPaymentResponse"]
    class CancelIncomingPaymentRequest["CancelIncomingPaymentRequest"]
    class CreateIncomingPaymentResponse["CreateIncomingPaymentResponse"]
    class CreateIncomingPaymentRequest["CreateIncomingPaymentRequest"]
    class PaymentManagementWS["PaymentManagementWS"]
    PaymentManagementWS ..> CreateIncomingPaymentRequest : unnamed
    PaymentManagementWS ..> CreateIncomingPaymentResponse : unnamed
    unnamed --> CreateIncomingPaymentResponse : unnamed
    PaymentManagementWS ..> CancelIncomingPaymentRequest : unnamed
    PaymentManagementWS ..> CancelIncomingPaymentResponse : unnamed
    PaymentDto ..> PaymentTypeDto : unnamed
    PaymentDto --> unnamed : unnamed
    CreateIncomingPaymentRequest ..> PaymentDto : unnamed
```
