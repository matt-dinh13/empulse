# Registration Status Transition

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Contract Registration Statechart
- **Diagram ID**: 98163
- **Elements**: 5
- **Connectors**: 5

```mermaid
stateDiagram-v2
    state "Final" as Final
    state "Registered" as Registered
    state "Ready for Registration (RR)" as Ready_for_Registration_RR
    state "Not Ready for Registration (NRR)" as Not_Ready_for_Registration_NRR
    state "Initial (01.180 Fill in AF)" as Initial_01_180_Fill_in_AF
    Ready_for_Registration_RR --> Registered : unnamed
    Not_Ready_for_Registration_NRR --> Registered : unnamed
    Registered --> Final : unnamed
    Initial_01_180_Fill_in_AF --> Not_Ready_for_Registration_NRR : unnamed
    Not_Ready_for_Registration_NRR --> Ready_for_Registration_RR : unnamed
```
