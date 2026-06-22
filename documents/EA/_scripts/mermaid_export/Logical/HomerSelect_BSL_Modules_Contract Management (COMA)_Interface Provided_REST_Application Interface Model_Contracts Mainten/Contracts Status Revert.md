# Contracts Status Revert

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts Maintenance/v1/Contracts Status Revert
- **Diagram ID**: 156403
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MOD_15_109_Contract_Status_Revert_on_external_request["{MOD}15.109 Contract Status Revert on external request"]
    class contracts_status_revert["contracts-status-revert"]
    class contracts_maintenance["contracts-maintenance"]
    class Contract_Management["Contract Management"]
    class Contract["Contract"]
    class ContractsStatusRevertRequest["ContractsStatusRevertRequest"]
    contracts_status_revert ..> ContractsStatusRevertRequest : unnamed
    ContractsStatusRevertRequest ..> Contract : unnamed
    Contract_Management ..> contracts_maintenance : /contracts-maintenance
    contracts_maintenance ..> contracts_status_revert : /contracts-status-revert
    contracts_status_revert ..> MOD_15_109_Contract_Status_Revert_on_external_request : unnamed
```
