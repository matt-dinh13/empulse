# OutgoingPaymentRestAPI - Create Outgoing Payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI
- **Diagram ID**: 163413
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_05_099_Create_outgoing_payment_via_REST_API["05.099 Create outgoing payment via REST API"]
    class OutgoingPaymentResultCode["OutgoingPaymentResultCode"]
    class CreateOutgoingPaymentAttribute["CreateOutgoingPaymentAttribute"]
    class CreateOutgoingPaymentResponse["CreateOutgoingPaymentResponse"]
    class CreateOutgoingPaymentRequest["CreateOutgoingPaymentRequest"]
    class OutgoingPaymentRestAPI["OutgoingPaymentRestAPI"]
    OutgoingPaymentRestAPI ..> CreateOutgoingPaymentRequest : unnamed
    OutgoingPaymentRestAPI ..> CreateOutgoingPaymentResponse : unnamed
    CreateOutgoingPaymentRequest ..> CreateOutgoingPaymentAttribute : unnamed
    CreateOutgoingPaymentResponse ..> OutgoingPaymentResultCode : unnamed
    OutgoingPaymentRestAPI ..> n_05_099_Create_outgoing_payment_via_REST_API : unnamed
```
