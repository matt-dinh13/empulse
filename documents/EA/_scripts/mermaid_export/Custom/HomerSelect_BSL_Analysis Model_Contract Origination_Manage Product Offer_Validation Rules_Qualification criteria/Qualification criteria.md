# Qualification criteria

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Validation Rules/Qualification criteria
- **Diagram ID**: 155151
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    ADD_Qualification_type_and_value_validation["{ADD} Qualification type and value validation"]
    ADD_Qualification_criteria["{ADD} Qualification criteria"]
    Mandatory_when_visible["Mandatory when visible"]
    Mobile_Phone["Mobile Phone"]
    Client_s_Mobile_Phone["Client's Mobile Phone"]
    ADD_Qualification_criteria -->|unnamed| ADD_Qualification_type_and_value_validation
    Client_s_Mobile_Phone -->|unnamed| Mobile_Phone
    Client_s_Mobile_Phone -->|unnamed| Mandatory_when_visible
```
