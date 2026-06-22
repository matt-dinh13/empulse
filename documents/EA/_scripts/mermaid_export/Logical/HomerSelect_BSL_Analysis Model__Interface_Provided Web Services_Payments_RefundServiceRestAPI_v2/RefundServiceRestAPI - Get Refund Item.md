# RefundServiceRestAPI - Get Refund Item

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/RefundServiceRestAPI/v2
- **Diagram ID**: 164306
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Get_Refund_Item_via_API["Get Refund Item via API"]
    class GetRefundItemResponse["GetRefundItemResponse"]
    class GetRefundItemRequest["GetRefundItemRequest"]
    class RefundServiceRestAPI["RefundServiceRestAPI"]
    RefundServiceRestAPI ..> GetRefundItemRequest : unnamed
    RefundServiceRestAPI ..> GetRefundItemResponse : unnamed
    RefundServiceRestAPI --> Get_Refund_Item_via_API : unnamed
```
