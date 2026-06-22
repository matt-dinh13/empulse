# Transaction Supplement lifecycle

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model/Transaction Supplement lifecycle
- **Diagram ID**: 144138
- **Elements**: 17
- **Connectors**: 20

```mermaid
stateDiagram-v2
    state "Final POS" as Final_POS
    state "unnamed" as s_1682017
    state "SIGNED" as SIGNED
    state "unnamed" as s_1682020
    state "unnamed" as s_1682014
    state "unnamed" as s_1682019
    state "unnamed" as s_1682016
    state "unnamed" as s_1682015
    state "Final CASH" as Final_CASH
    state "ExitPoint" as ExitPoint
    state "PAID" as PAID
    state "ACCEPTED" as ACCEPTED
    state "REJECTED" as REJECTED
    state "CANCELED" as CANCELED
    state "APPROVED" as APPROVED
    state "IN_PROCESS" as IN_PROCESS
    state "Create Transaction Supplement request" as Create_Transaction_Supplement_request
    s_1682014 --> REJECTED : unnamed
    PAID --> Final_CASH : unnamed
    REJECTED --> ExitPoint : unnamed
    CANCELED --> ExitPoint : unnamed
    s_1682019 --> PAID : unnamed
    ACCEPTED --> PAID : unnamed
    s_1682016 --> ACCEPTED : unnamed
    SIGNED --> ACCEPTED : unnamed
    APPROVED --> SIGNED : unnamed
    APPROVED --> REJECTED : unnamed
    ACCEPTED --> Final_POS : unnamed
    SIGNED --> CANCELED : unnamed
    s_1682017 --> CANCELED : unnamed
    IN_PROCESS --> CANCELED : unnamed
    APPROVED --> CANCELED : unnamed
    s_1682020 --> APPROVED : unnamed
    IN_PROCESS --> APPROVED : unnamed
    Create_Transaction_Supplement_request --> IN_PROCESS : unnamed
    s_1682015 --> IN_PROCESS : unnamed
    IN_PROCESS --> REJECTED : unnamed
```
