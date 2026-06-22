# Service Qualification criteria

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model
- **Diagram ID**: 164604
- **Elements**: 3
- **Connectors**: 3

```mermaid
classDiagram
    class Quaification_criteria["Quaification criteria"]
    class ADD_Qualification_criteria_attributes["{ADD}Qualification criteria attributes"]
    class ADD_Qualification_criteria_type["{ADD}Qualification criteria type"]
    Quaification_criteria ..> ADD_Qualification_criteria_type : unnamed
    ADD_Qualification_criteria_type o-- ADD_Qualification_criteria_attributes : unnamed
    Quaification_criteria ..> ADD_Qualification_criteria_attributes : unnamed
```
