# Versioned entity lifecycle

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Versioned entity lifecycle
- **Diagram ID**: 161059
- **Elements**: 7
- **Connectors**: 10

```mermaid
stateDiagram-v2
    state "Terminated" as Terminated
    state "For activation" as For_activation
    state "Canceled" as Canceled
    state "Active" as Active
    state "Inactive" as Inactive
    state "Final" as Final
    state "Initial" as Initial
    Active --> Terminated : unnamed
    Inactive --> For_activation : unnamed
    Inactive --> Canceled : unnamed
    For_activation --> Canceled : unnamed
    Inactive --> Active : unnamed
    For_activation --> Active : unnamed
    Initial --> Inactive : unnamed
    Active --> Final : unnamed
    Canceled --> Final : unnamed
    Terminated --> Final : unnamed
```
