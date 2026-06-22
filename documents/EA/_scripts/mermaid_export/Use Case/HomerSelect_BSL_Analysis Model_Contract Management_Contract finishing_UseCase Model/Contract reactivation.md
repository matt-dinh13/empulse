# Contract reactivation

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/UseCase Model
- **Diagram ID**: 161768
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph LR
    ContractActivated_ADD_ContractActivated["ContractActivated : {ADD}ContractActivated"]
    Process_ContractActivated(("Process ContractActivated"))
    Contract_reactivation_job["Contract reactivation job"]
    MOD_01_720_Reactivate_finished_contracts(("{MOD}01.720 Reactivate finished contracts"))
    Time[/"Time"/]
    MOD_01_720_Reactivate_finished_contracts -->|unnamed| Contract_reactivation_job
    Time --> MOD_01_720_Reactivate_finished_contracts
```
