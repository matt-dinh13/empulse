# Change ECS provider

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Change ECS provider (modal window)
- **Diagram ID**: 158052
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    Cancel["Cancel"]
    OK["OK"]
    ECS_Provider["ECS Provider"]
    Change_ECS_provider["Change ECS provider"]
    Change_ECS_provider["Change ECS provider"]
    Tab_Direct_debit_mandates["Tab - Direct debit mandates"]
    n_01_423_Change_ECS_provider_for_application_DDM["01.423 Change ECS provider for application DDM"]
    MOD_01_427_Change_DDM_ECS_provider["{MOD}01.427 Change DDM ECS provider"]
    Change_ECS_provider -->|unnamed| n_01_423_Change_ECS_provider_for_application_DDM
    Change_ECS_provider -->|unnamed| MOD_01_427_Change_DDM_ECS_provider
    Tab_Direct_debit_mandates -->|unnamed| Change_ECS_provider
```
