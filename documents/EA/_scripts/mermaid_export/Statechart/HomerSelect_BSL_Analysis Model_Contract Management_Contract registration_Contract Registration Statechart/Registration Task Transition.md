# Registration Task Transition

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Contract Registration Statechart
- **Diagram ID**: 98164
- **Elements**: 5
- **Connectors**: 5

```mermaid
stateDiagram-v2
    state "Final (Contract is Registered (R))" as Final_Contract_is_Registered_R
    state "Mistake Investigation (MI)" as Mistake_Investigation_MI
    state "Registration in progress (RP)" as Registration_in_progress_RP
    state "Finish Processing (FP)" as Finish_Processing_FP
    state "Initial (Contract is Ready for Registration (RR))" as Initial_Contract_is_Ready_for_Registration_RR
    Mistake_Investigation_MI --> Finish_Processing_FP : unnamed
    Registration_in_progress_RP --> Finish_Processing_FP : unnamed
    Initial_Contract_is_Ready_for_Registration_RR --> Registration_in_progress_RP : unnamed
    Registration_in_progress_RP --> Mistake_Investigation_MI : unnamed
    Finish_Processing_FP --> Final_Contract_is_Registered_R : unnamed
```
