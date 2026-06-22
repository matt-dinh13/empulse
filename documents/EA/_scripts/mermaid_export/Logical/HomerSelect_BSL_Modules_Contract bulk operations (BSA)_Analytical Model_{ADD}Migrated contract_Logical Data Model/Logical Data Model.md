# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/{ADD}Migrated contract/Logical Data Model
- **Diagram ID**: 164656
- **Elements**: 3
- **Connectors**: 3

```mermaid
classDiagram
    class Validation_Status["Validation Status"]
    class Contract_Result["Contract Result"]
    class Bulk_Operation["Bulk Operation"]
    Contract_Result ..> Validation_Status : unnamed
    Contract_Result ..> Validation_Status : unnamed
    Bulk_Operation o-- Contract_Result : unnamed
```
