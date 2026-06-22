# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/{ADD}Debt Purchase/Logical Data Model
- **Diagram ID**: 164654
- **Elements**: 5
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_Debt_Purchase_Result["{ADD}Debt Purchase Result"]
    class ADD_Debt_Purchase_Operation["{ADD}Debt Purchase Operation"]
    class Validation_Status["Validation Status"]
    class Contract_Result["Contract Result"]
    class Bulk_Operation["Bulk Operation"]
    Bulk_Operation <|-- ADD_Debt_Purchase_Operation : unnamed
    Bulk_Operation o-- Contract_Result : unnamed
    Contract_Result <|-- ADD_Debt_Purchase_Result : unnamed
    Contract_Result ..> Validation_Status : unnamed
    Contract_Result ..> Validation_Status : unnamed
```
