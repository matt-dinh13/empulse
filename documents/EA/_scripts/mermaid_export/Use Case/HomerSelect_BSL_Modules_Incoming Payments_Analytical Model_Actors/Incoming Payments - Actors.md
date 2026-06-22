# Incoming Payments - Actors

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Actors
- **Diagram ID**: 164273
- **Elements**: 8
- **Connectors**: 4

```mermaid
graph LR
    BSL[/"BSL"/]
    Cabus_AM[/"Cabus AM"/]
    Installment_schedule[/"Installment schedule"/]
    Print_Server[/"Print Server"/]
    CIF[/"CIF"/]
    User[/"User"/]
    System[/"System"/]
    External_System[/"External System"/]
    CIF -->|unnamed| System
    Print_Server -->|unnamed| System
    Installment_schedule -->|unnamed| System
    Cabus_AM -->|unnamed| System
```
