# StateTransitions

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model
- **Diagram ID**: 164483
- **Elements**: 5
- **Connectors**: 4

```mermaid
stateDiagram-v2
    state "Finished" as Finished
    state "Active" as Active
    state "Cancelled" as Cancelled
    state "Application" as Application
    state "Initial" as Initial
    Initial --> Application : unnamed
    Application --> Cancelled : unnamed
    Application --> Active : unnamed
    Active --> Finished : unnamed
```
