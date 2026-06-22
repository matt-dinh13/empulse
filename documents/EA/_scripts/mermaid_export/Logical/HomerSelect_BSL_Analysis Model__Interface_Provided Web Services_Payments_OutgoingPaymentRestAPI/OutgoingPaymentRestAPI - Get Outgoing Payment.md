# OutgoingPaymentRestAPI - Get Outgoing Payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI
- **Diagram ID**: 163414
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class OutgoingPaymentResultCode["OutgoingPaymentResultCode"]
    class n_05_703_Get_outgoing_payments_via_REST_API["05.703 Get outgoing payments via REST API"]
    class OutgoingPaymentData["OutgoingPaymentData"]
    class GetOutgoingPaymentResponse["GetOutgoingPaymentResponse"]
    class GetOutgoingPaymentRequest["GetOutgoingPaymentRequest"]
    class OutgoingPaymentRestAPI["OutgoingPaymentRestAPI"]
    OutgoingPaymentRestAPI ..> GetOutgoingPaymentRequest : unnamed
    OutgoingPaymentRestAPI ..> GetOutgoingPaymentResponse : unnamed
    GetOutgoingPaymentResponse ..> OutgoingPaymentData : unnamed
    OutgoingPaymentRestAPI ..> n_05_703_Get_outgoing_payments_via_REST_API : unnamed
    GetOutgoingPaymentResponse ..> OutgoingPaymentResultCode : unnamed
```
