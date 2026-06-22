# Deactivate Role on Contract Service - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model
- **Diagram ID**: 163705
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Contract_Services_ADD_Deactivate_Role_on_Contract_Services_m["Contract Services : {ADD}Deactivate Role on Contract Services method"]
    External_System[/"External System"/]
    n_08_112_Deactivate_Role_on_Contract_Service_COS(("08.112 Deactivate Role on Contract Service (COS)"))
    Contract_Services_ADD_Deactivate_Role_on_Contract_Services_m -->|unnamed| n_08_112_Deactivate_Role_on_Contract_Service_COS
    n_08_112_Deactivate_Role_on_Contract_Service_COS --- External_System
```
