# Resolving registration action

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Allocation tool orchestration
- **Diagram ID**: 161616
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph LR
    MOD_Missing_registration_data_retrieval["{MOD}Missing registration data retrieval"]
    REM[/"REM"/]
    TCK[/"TCK"/]
    COMA[/"COMA"/]
    BSL[/"BSL"/]
    Resolve_an_action_for_contract(("Resolve an action for contract"))
    REM_orchestrates_registration["REM orchestrates registration"]
    Resolve_an_action_for_contract --- REM
    Resolve_an_action_for_contract --- TCK
    Resolve_an_action_for_contract -->|unnamed| MOD_Missing_registration_data_retrieval
    BSL --- Resolve_an_action_for_contract
```
