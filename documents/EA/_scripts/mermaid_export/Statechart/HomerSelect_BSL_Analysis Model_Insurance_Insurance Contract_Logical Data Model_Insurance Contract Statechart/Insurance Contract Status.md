# Insurance Contract Status

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model/Insurance Contract Statechart
- **Diagram ID**: 98835
- **Elements**: 8
- **Connectors**: 11

```mermaid
stateDiagram-v2
    state "Final" as Final
    state "Expired draft (E)" as Expired_draft_E
    state "Terminated (T)" as Terminated_T
    state "Cancelled (C)" as Cancelled_C
    state "Active (A)" as Active_A
    state "Signed (S)" as Signed_S
    state "New (N)" as New_N
    state "Initial" as Initial
    Initial --> New_N : unnamed
    New_N --> Signed_S : unnamed
    Signed_S --> Active_A : unnamed
    Active_A --> Cancelled_C : unnamed
    Signed_S --> Cancelled_C : unnamed
    New_N --> Cancelled_C : unnamed
    Active_A --> Terminated_T : unnamed
    New_N --> Expired_draft_E : unnamed
    Expired_draft_E --> Final : unnamed
    Terminated_T --> Final : unnamed
    Cancelled_C --> Final : unnamed
```
