# Service timeline

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Service timeline/Use case model
- **Diagram ID**: 163990
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Renew_IBACK_periods["Renew IBACK periods"]
    Renew_CELREW_periods["Renew CELREW periods"]
    n_03_301_Rollback_service(("03.301 Rollback service"))
    n_03_300_Show_service_timeline(("03.300 Show service timeline"))
    User[/"User"/]
    User --- n_03_300_Show_service_timeline
    User --- n_03_301_Rollback_service
    n_03_301_Rollback_service -.->|include| Renew_CELREW_periods
    n_03_301_Rollback_service -.->|include| Renew_IBACK_periods
```
