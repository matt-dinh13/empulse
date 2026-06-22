# Additional personal data

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Personal information/Additional personal data
- **Diagram ID**: 149327
- **Elements**: 9
- **Connectors**: 7

```mermaid
graph TD
    Citizenship["Citizenship"]
    Optional["Optional"]
    Accompaniment["Accompaniment"]
    Number_of_dependents["Number of dependents"]
    Mandatory["Mandatory"]
    Number_of_dependent_persons["Number of dependent persons"]
    Marital_status["Marital status"]
    House_type["House type"]
    Education["Education"]
    Education -->|unnamed| Mandatory
    House_type -->|unnamed| Mandatory
    Marital_status -->|unnamed| Mandatory
    Number_of_dependent_persons -->|unnamed| Number_of_dependents
    Number_of_dependent_persons -->|unnamed| Mandatory
    Accompaniment -->|unnamed| Optional
    Citizenship -->|unnamed| Mandatory
```
