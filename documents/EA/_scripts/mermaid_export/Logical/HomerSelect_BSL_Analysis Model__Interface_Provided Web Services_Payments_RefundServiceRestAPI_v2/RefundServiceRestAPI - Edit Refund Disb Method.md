# RefundServiceRestAPI - Edit Refund Disb Method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/RefundServiceRestAPI/v2
- **Diagram ID**: 164304
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Edit_Refund_Disbursement_Method_via_API["Edit Refund Disbursement Method via API"]
    class EditRefundDisbMethodResponse["EditRefundDisbMethodResponse"]
    class EditRefundDisbMethodRequest["EditRefundDisbMethodRequest"]
    class RefundServiceRestAPI["RefundServiceRestAPI"]
    RefundServiceRestAPI ..> EditRefundDisbMethodRequest : unnamed
    RefundServiceRestAPI ..> EditRefundDisbMethodResponse : unnamed
    RefundServiceRestAPI --> Edit_Refund_Disbursement_Method_via_API : unnamed
```
