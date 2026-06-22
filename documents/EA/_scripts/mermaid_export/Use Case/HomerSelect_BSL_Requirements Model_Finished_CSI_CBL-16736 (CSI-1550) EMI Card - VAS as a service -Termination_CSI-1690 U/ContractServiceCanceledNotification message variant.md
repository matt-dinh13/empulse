# ContractServiceCanceledNotification message variant

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1690 Use ContractServiceNotification message variants for notifications
- **Diagram ID**: 145017
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph LR
    User[/"User"/]
    System_event[/"System event"/]
    unnamed["unnamed"]
    unnamed["unnamed"]
    MOD_08_096_Cancel_contract_service_common(("{MOD}08.096 Cancel contract service common"))
    n_08_292_Process_Contract_Service_Change_event(("08.292 Process Contract Service Change event"))
    MOD_08_095_Cancel_contract_service_manually(("{MOD}08.095 Cancel contract service manually"))
    unnamed -->|unnamed| n_08_292_Process_Contract_Service_Change_event
    unnamed -->|unnamed| MOD_08_096_Cancel_contract_service_common
    User --> MOD_08_095_Cancel_contract_service_manually
```
