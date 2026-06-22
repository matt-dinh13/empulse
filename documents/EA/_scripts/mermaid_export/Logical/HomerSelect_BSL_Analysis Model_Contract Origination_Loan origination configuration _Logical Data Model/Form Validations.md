# Form Validations

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model
- **Diagram ID**: 129056
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class Field_Validation["Field Validation"]
    class Validation_Parameter["Validation Parameter"]
    class Validation_Type["Validation Type"]
    class Validation["Validation"]
    class Cross_Validation["Cross Validation"]
    class Subprocess["Subprocess"]
    Subprocess o-- Field_Validation : unnamed
    Subprocess o-- Cross_Validation : unnamed
    Cross_Validation o-- Validation : unnamed
    Field_Validation --> Validation : unnamed
    Validation o-- Validation_Parameter : unnamed
    Validation ..> Validation_Type : unnamed
```
