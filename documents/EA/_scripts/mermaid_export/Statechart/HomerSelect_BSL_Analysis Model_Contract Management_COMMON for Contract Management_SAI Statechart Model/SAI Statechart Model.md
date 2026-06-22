# SAI Statechart Model

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/SAI Statechart Model
- **Diagram ID**: 108575
- **Elements**: 6
- **Connectors**: 7

```mermaid
stateDiagram-v2
    state "SAI application is signed" as SAI_application_is_signed
    state "Final" as Final
    state "Finished (K)" as Finished_K
    state "Active (A)" as Active_A
    state "Signed (N)" as Signed_N
    state "Cancelled (T)" as Cancelled_T
    SAI_application_is_signed --> Signed_N : unnamed
    Active_A --> Cancelled_T : unnamed
    Signed_N --> Cancelled_T : unnamed
    Finished_K --> Final : unnamed
    Cancelled_T --> Final : unnamed
    Active_A --> Finished_K : unnamed
    Signed_N --> Active_A : unnamed
```
