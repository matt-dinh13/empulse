# OutgoingPaymentRestAPI - Cancel Outgoing Payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI
- **Diagram ID**: 163417
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_05_096_Cancel_outgoing_payment_via_REST_API["{ADD}05.096 Cancel outgoing payment via REST API"]
    class OutgoingPaymentResultCode["OutgoingPaymentResultCode"]
    class sourceTrx["sourceTrx"]
    class CancelOutgoingPaymentResponse["CancelOutgoingPaymentResponse"]
    class CancelOutgoingPaymentRequest["CancelOutgoingPaymentRequest"]
    class OutgoingPaymentRestAPI["OutgoingPaymentRestAPI"]
    OutgoingPaymentRestAPI ..> CancelOutgoingPaymentRequest : unnamed
    OutgoingPaymentRestAPI ..> CancelOutgoingPaymentResponse : unnamed
    CancelOutgoingPaymentRequest ..> sourceTrx : unnamed
    CancelOutgoingPaymentResponse ..> OutgoingPaymentResultCode : unnamed
    OutgoingPaymentRestAPI --> ADD_05_096_Cancel_outgoing_payment_via_REST_API : unnamed
```
