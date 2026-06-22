# Source of income and economical status relation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model/Enums&Types
- **Diagram ID**: 158520
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Economical_Status["Economical Status"]
    class Source_Of_Income["Source Of Income"]
    class Source_Of_Income_to_Economical_Status["Source Of Income to Economical Status"]
    Source_Of_Income_to_Economical_Status --> Source_Of_Income : unnamed
    Source_Of_Income_to_Economical_Status ..> Economical_Status : unnamed
```
