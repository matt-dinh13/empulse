# Refund Statechart Model

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Statechart Model
- **Diagram ID**: 164235
- **Elements**: 8
- **Connectors**: 12

```mermaid
stateDiagram-v2
    state "CANCELLED" as CANCELLED
    state "RETURNED" as RETURNED
    state "DELIVERED" as DELIVERED
    state "Final" as Final
    state "Initial" as Initial
    state "REFUNDED" as REFUNDED
    state "TO_REFUND" as TO_REFUND
    state "NEW" as NEW
    Initial --> NEW : unnamed
    RETURNED --> TO_REFUND : unnamed
    NEW --> TO_REFUND : unnamed
    TO_REFUND --> REFUNDED : unnamed
    CANCELLED --> Final : unnamed
    RETURNED --> Final : unnamed
    DELIVERED --> Final : unnamed
    REFUNDED --> DELIVERED : unnamed
    REFUNDED --> RETURNED : unnamed
    RETURNED --> CANCELLED : unnamed
    TO_REFUND --> CANCELLED : unnamed
    NEW --> CANCELLED : unnamed
```
