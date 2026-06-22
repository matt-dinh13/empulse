# Commodity status lifecycle

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Commodity status lifecycle
- **Diagram ID**: 136089
- **Elements**: 5
- **Connectors**: 6

```mermaid
stateDiagram-v2
    state "Final" as Final
    state "Canceled" as Canceled
    state "Used" as Used
    state "Draft" as Draft
    state "Initial" as Initial
    Used --> Final : unnamed
    Canceled --> Final : unnamed
    Draft --> Canceled : unnamed
    Used --> Canceled : unnamed
    Draft --> Used : unnamed
    Initial --> Draft : unnamed
```
