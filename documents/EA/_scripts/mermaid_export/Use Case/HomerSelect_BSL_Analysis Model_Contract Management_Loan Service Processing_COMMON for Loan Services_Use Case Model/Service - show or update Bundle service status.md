# Service - show or update Bundle service status

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model
- **Diagram ID**: 164579
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    n_08_300_Show_Bundle_service_status(("08.300 Show Bundle service status"))
    n_08_330_Update_Bundle_service_status(("08.330 Update Bundle service status"))
    User[/"User"/]
    User --> n_08_330_Update_Bundle_service_status
    User --> n_08_300_Show_Bundle_service_status
```
