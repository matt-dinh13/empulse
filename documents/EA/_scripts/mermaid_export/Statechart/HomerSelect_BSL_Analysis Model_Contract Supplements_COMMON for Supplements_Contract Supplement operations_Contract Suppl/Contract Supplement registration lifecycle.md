# Contract Supplement registration lifecycle

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/Contract Supplement registration lifecycle
- **Diagram ID**: 162865
- **Elements**: 5
- **Connectors**: 4

```mermaid
stateDiagram-v2
    state "Final (reg)" as Final_reg
    state "R (Registered)" as R_Registered
    state "RR (Ready for Registration)" as RR_Ready_for_Registration
    state "NRR (Not ready for registration)" as NRR_Not_ready_for_registration
    state "Initial (reg)" as Initial_reg
    Initial_reg --> NRR_Not_ready_for_registration : unnamed
    NRR_Not_ready_for_registration --> RR_Ready_for_Registration : unnamed
    RR_Ready_for_Registration --> R_Registered : unnamed
    R_Registered --> Final_reg : unnamed
```
