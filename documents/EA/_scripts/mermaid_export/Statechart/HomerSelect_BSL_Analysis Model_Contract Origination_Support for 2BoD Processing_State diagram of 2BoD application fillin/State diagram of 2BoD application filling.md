# State diagram of 2BoD application filling

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/State diagram of 2BoD application filling
- **Diagram ID**: 63482
- **Elements**: 6
- **Connectors**: 5

```mermaid
stateDiagram-v2
    state "Final" as Final
    state "unnamed" as s_823925
    state "Add to Application filling queue" as Add_to_Application_filling_queue
    state "ASSIGNED" as ASSIGNED
    state "CLOSED" as CLOSED
    state "OPEN" as OPEN
    Add_to_Application_filling_queue --> OPEN : unnamed
    ASSIGNED --> OPEN : unnamed
    ASSIGNED --> CLOSED : unnamed
    OPEN --> ASSIGNED : unnamed
    CLOSED --> Final : unnamed
```
