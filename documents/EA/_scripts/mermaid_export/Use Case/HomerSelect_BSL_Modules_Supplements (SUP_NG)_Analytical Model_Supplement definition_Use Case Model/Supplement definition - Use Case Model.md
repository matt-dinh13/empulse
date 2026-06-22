# Supplement definition - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Use Case Model
- **Diagram ID**: 161696
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Getting_Supplement_definition_service_Find_Supplement_defini["Getting Supplement definition service : Find Supplement definition service"]
    External_system[/"External system"/]
    ADD_13_500_Find_Supplement_setting_service_SUP["{ADD}13.500 Find Supplement setting service (SUP)"]
    n_13_500_Find_Supplement_setting_service_SUP(("13.500 Find Supplement setting service (SUP)"))
    Getting_Supplement_definition_service_Find_Supplement_defini -->|unnamed| n_13_500_Find_Supplement_setting_service_SUP
    n_13_500_Find_Supplement_setting_service_SUP -->|unnamed| ADD_13_500_Find_Supplement_setting_service_SUP
    External_system --- n_13_500_Find_Supplement_setting_service_SUP
```
