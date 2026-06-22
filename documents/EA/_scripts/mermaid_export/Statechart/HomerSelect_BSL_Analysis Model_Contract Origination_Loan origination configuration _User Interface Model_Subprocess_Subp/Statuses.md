# Statuses

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /User Interface Model/Subprocess/Subprocess detail/Statuses
- **Diagram ID**: 124341
- **Elements**: 6
- **Connectors**: 6

```mermaid
stateDiagram-v2
    state "Dectivated" as Dectivated
    state "Final" as Final
    state "Cancelled" as Cancelled
    state "Active" as Active
    state "New" as New
    state "Initial" as Initial
    Initial --> New : unnamed
    New --> Active : unnamed
    Active --> Cancelled : unnamed
    Dectivated --> Final : unnamed
    Cancelled --> Final : unnamed
    Active --> Dectivated : unnamed
```
