# Outgoing payment state

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Statechart
- **Diagram ID**: 100001
- **Elements**: 10
- **Connectors**: 21

```mermaid
stateDiagram-v2
    state "Ready for redisbursement" as Ready_for_redisbursement
    state "Waiting" as Waiting
    state "Not delivered" as Not_delivered
    state "Delivered" as Delivered
    state "Final" as Final
    state "Paid" as Paid
    state "Order generating" as Order_generating
    state "Cancelled" as Cancelled
    state "Unpaid" as Unpaid
    state "Initial" as Initial
    Unpaid --> Order_generating : unnamed
    Initial --> Waiting : unnamed
    Paid --> Not_delivered : unnamed
    Paid --> Delivered : unnamed
    Cancelled --> Final : unnamed
    Paid --> Final : unnamed
    Delivered --> Final : unnamed
    Not_delivered --> Final : unnamed
    Unpaid --> Paid : unnamed
    Not_delivered --> Ready_for_redisbursement : unnamed
    Unpaid --> Order_generating : unnamed
    Order_generating --> Unpaid : unnamed
    Not_delivered --> Order_generating : unnamed
    Ready_for_redisbursement --> Order_generating : unnamed
    Ready_for_redisbursement --> Cancelled : unnamed
    Paid --> Cancelled : unnamed
    Order_generating --> Cancelled : unnamed
    Unpaid --> Cancelled : unnamed
    Waiting --> Unpaid : unnamed
    Initial --> Unpaid : unnamed
    Order_generating --> Paid : unnamed
```
