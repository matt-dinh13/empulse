# Refinanced Contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Use Case Model
- **Diagram ID**: 163434
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph LR
    Refinanced_Contract_Refinanced_Contract["Refinanced Contract : Refinanced Contract"]
    n_08_392_Set_Refinanced_Contract_Closure_service(("08.392 Set Refinanced Contract Closure service"))
    n_08_390_Get_Refinanced_Contracts_service(("08.390 Get Refinanced Contracts service"))
    External_system[/"External system"/]
    n_08_392_Set_Refinanced_Contract_Closure_service --> External_system
    n_08_390_Get_Refinanced_Contracts_service --> External_system
    n_08_390_Get_Refinanced_Contracts_service -->|unnamed| Refinanced_Contract_Refinanced_Contract
    n_08_392_Set_Refinanced_Contract_Closure_service -->|unnamed| Refinanced_Contract_Refinanced_Contract
```
