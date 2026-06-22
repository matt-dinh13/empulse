# Process refund message

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Use Case
- **Diagram ID**: 164239
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Cancel_refund_item_on_external_request_rule["Cancel refund item on external request rule"]
    Core_Banking_System[/"Core Banking System"/]
    Create_refund_item_on_external_request_rule["Create refund item on external request rule"]
    DEL_05_502_Process_refund_message(("{DEL}05.502 Process refund message"))
    DEL_05_502_Process_refund_message -->|unnamed| Create_refund_item_on_external_request_rule
    DEL_05_502_Process_refund_message -->|unnamed| Cancel_refund_item_on_external_request_rule
    Core_Banking_System --> DEL_05_502_Process_refund_message
```
