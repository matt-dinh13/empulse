# DDM confirmation via RMQ

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/UseCase Model
- **Diagram ID**: 164127
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    DDM_DDM_confirmation["DDM : DDM confirmation"]
    n_01_586_Process_DDM_confirmation(("01.586 Process DDM confirmation "))
    External_system[/"External system"/]
    User[/"User"/]
    Confirm_DDM_via_RMQ(("Confirm DDM via RMQ"))
    DDM_DDM_confirmation -->|unnamed| Confirm_DDM_via_RMQ
    Confirm_DDM_via_RMQ -->|unnamed| n_01_586_Process_DDM_confirmation
    External_system --- Confirm_DDM_via_RMQ
    User --- Confirm_DDM_via_RMQ
```
