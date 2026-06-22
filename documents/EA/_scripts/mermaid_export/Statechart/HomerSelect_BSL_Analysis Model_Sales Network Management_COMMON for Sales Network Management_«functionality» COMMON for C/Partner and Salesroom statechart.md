# Partner and Salesroom statechart

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/Partner and Salesroom Statechart Model
- **Diagram ID**: 93633
- **Elements**: 7
- **Connectors**: 8

```mermaid
stateDiagram-v2
    state "unnamed" as s_1166508
    state "Final" as Final
    state "Closed (C)" as Closed_C
    state "Blocked (B)" as Blocked_B
    state "Active (A)" as Active_A
    state "Not active (N)" as Not_active_N
    state "Initial" as Initial
    Initial --> Not_active_N : unnamed
    Closed_C --> Active_A : unnamed
    Blocked_B --> Active_A : unnamed
    Not_active_N --> Active_A : unnamed
    Active_A --> Blocked_B : unnamed
    Blocked_B --> Closed_C : unnamed
    Active_A --> Closed_C : unnamed
    Closed_C --> Final : unnamed
```
