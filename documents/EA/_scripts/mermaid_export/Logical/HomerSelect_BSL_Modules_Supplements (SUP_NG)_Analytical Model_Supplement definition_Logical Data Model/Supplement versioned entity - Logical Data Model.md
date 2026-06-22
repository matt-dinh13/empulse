# Supplement versioned entity - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model
- **Diagram ID**: 163997
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Supplement["Supplement"]
    class Supplement_Version_Status["Supplement Version Status"]
    class Supplement_Versioned_entity["Supplement Versioned entity"]
    Supplement_Versioned_entity <|-- Supplement : unnamed
    Supplement_Versioned_entity ..> Supplement_Version_Status : unnamed
```
