# Debt Purchase support - Interaction dia

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-30268 (CSI-4570) Debt Purchase support
- **Diagram ID**: 164651
- **Elements**: 7
- **Connectors**: 23

```mermaid
sequenceDiagram
    participant BSL as BSL
    participant Zeebe_process as Zeebe process
    participant BSA as BSA
    participant PAYM as PAYM
    participant User_or_API as User or API
    participant PIF as PIF
    BSL->>+Zeebe_process: WriteOff response
    Zeebe_process->>+BSL: PayOff request
    Zeebe_process->>+BSA: ERROR notif
    BSL->>+Zeebe_process: ERROR notif or response
    BSL->>+Zeebe_process: Sequence
    Zeebe_process->>+PAYM: Create Repaym. Channel
    BSL->>+Zeebe_process: Application Signed notification
    Zeebe_process->>+BSL: Create Application
    User_or_API->>+BSA: Execute bulk oper 
    Zeebe_process->>+BSA: Process Finished notif
    PAYM->>+Zeebe_process: Sequence
    BSA->>+Zeebe_process: Create contract (item)
    BSL->>+Zeebe_process: Application Approval
    User_or_API->>+BSA: Create bulk oper 
    PIF->>+Zeebe_process: Sequence
    Zeebe_process->>+PIF: Create Applicant
    Zeebe_process->>+Zeebe_process: timeout
    Zeebe_process->>+BSA: Contract Signed notif
    Zeebe_process->>+BSL: Calc offer
    Zeebe_process->>+BSA: Contract Created notif
    BSL->>+Zeebe_process: PayOff response
    Zeebe_process->>+BSL: Application Sign
    Zeebe_process->>+BSL: WriteOff request
```
