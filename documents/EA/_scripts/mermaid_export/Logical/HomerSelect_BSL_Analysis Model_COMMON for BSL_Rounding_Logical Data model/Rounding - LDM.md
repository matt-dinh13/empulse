# Rounding - LDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Logical Data model
- **Diagram ID**: 100292
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Rounding_Scale_Type["Rounding Scale Type"]
    class Rounding["Rounding"]
    class Rounding_Definition_Usage_Type["Rounding Definition Usage Type"]
    class Rounding_Definition["Rounding Definition"]
    Rounding_Definition ..> Rounding_Definition_Usage_Type : unnamed
    Rounding_Definition ..> Rounding : unnamed
    Rounding_Definition ..> Rounding_Scale_Type : unnamed
```
