# Supplement Versioned entity

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Logical Data Model
- **Diagram ID**: 164449
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
