# RefundServiceRestAPI - Cancel Refund Item

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/RefundServiceRestAPI/v2
- **Diagram ID**: 164307
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Cancel_Refund_Item_via_API["Cancel Refund Item via API"]
    class CancelRefundItem_Response["CancelRefundItem Response"]
    class CancelRefundItemRequest["CancelRefundItemRequest"]
    class RefundServiceRestAPI["RefundServiceRestAPI"]
    RefundServiceRestAPI ..> CancelRefundItemRequest : unnamed
    RefundServiceRestAPI ..> CancelRefundItem_Response : unnamed
    RefundServiceRestAPI --> Cancel_Refund_Item_via_API : unnamed
```
