# Statuses

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /User Interface Model/Personal Document Container/Personal Document Container Detail/Statuses
- **Diagram ID**: 118864
- **Elements**: 5
- **Connectors**: 4

```mermaid
stateDiagram-v2
    state "Final" as Final
    state "Cancelled" as Cancelled
    state "Active" as Active
    state "New" as New
    state "Initial" as Initial
    Initial --> New : unnamed
    New --> Active : unnamed
    Active --> Cancelled : unnamed
    Cancelled --> Final : unnamed
```
