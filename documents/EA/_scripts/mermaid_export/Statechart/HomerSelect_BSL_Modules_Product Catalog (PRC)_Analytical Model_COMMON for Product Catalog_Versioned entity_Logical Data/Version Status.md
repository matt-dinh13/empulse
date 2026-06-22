# Version Status

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Logical Data Model
- **Diagram ID**: 98414
- **Elements**: 7
- **Connectors**: 10

```mermaid
stateDiagram-v2
    state "For Activation (F)" as For_Activation_F
    state "Canceled (C)" as Canceled_C
    state "Terminated (T)" as Terminated_T
    state "Active (A)" as Active_A
    state "Final" as Final
    state "Initial" as Initial
    state "Inactive (N)" as Inactive_N
    For_Activation_F --> Inactive_N : unnamed
    Initial --> Inactive_N : unnamed
    Canceled_C --> Final : unnamed
    Terminated_T --> Final : unnamed
    For_Activation_F --> Active_A : unnamed
    Inactive_N --> Active_A : unnamed
    Active_A --> Terminated_T : unnamed
    For_Activation_F --> Canceled_C : unnamed
    Inactive_N --> Canceled_C : unnamed
    Inactive_N --> For_Activation_F : unnamed
```
