# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/Add service /Logical Data Model
- **Diagram ID**: 164334
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Contract_Result["Contract Result"]
    class Add_Service_Operation["Add Service Operation"]
    class Bulk_Operation["Bulk Operation"]
    Bulk_Operation <|-- Add_Service_Operation : unnamed
    Bulk_Operation o-- Contract_Result : unnamed
```
