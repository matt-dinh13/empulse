# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/Replace service/Logical Data Model
- **Diagram ID**: 164335
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Validation_Status["Validation Status"]
    class Contract_Result["Contract Result"]
    class Replace_Service_Operation["Replace Service Operation"]
    class Bulk_Operation["Bulk Operation"]
    Bulk_Operation <|-- Replace_Service_Operation : unnamed
    Bulk_Operation o-- Contract_Result : unnamed
    Contract_Result ..> Validation_Status : unnamed
    Contract_Result ..> Validation_Status : unnamed
```
