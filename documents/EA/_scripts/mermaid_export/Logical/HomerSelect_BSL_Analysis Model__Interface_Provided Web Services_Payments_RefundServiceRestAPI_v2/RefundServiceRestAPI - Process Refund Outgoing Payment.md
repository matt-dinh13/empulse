# RefundServiceRestAPI - Process Refund Outgoing Payment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/RefundServiceRestAPI/v2
- **Diagram ID**: 164305
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Process_Refund_Outgoing_Payment_via_API["Process Refund Outgoing Payment via API"]
    class ProcessRefundOutgoingPaymentResponse["ProcessRefundOutgoingPaymentResponse"]
    class ProcessRefundOutgoingPaymentRequest["ProcessRefundOutgoingPaymentRequest"]
    class RefundServiceRestAPI["RefundServiceRestAPI"]
    RefundServiceRestAPI ..> ProcessRefundOutgoingPaymentRequest : unnamed
    RefundServiceRestAPI ..> ProcessRefundOutgoingPaymentResponse : unnamed
    RefundServiceRestAPI ..> Process_Refund_Outgoing_Payment_via_API : unnamed
```
