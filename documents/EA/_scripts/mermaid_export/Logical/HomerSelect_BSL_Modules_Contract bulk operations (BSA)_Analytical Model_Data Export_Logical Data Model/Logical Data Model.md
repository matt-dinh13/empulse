# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/Data Export/Logical Data Model
- **Diagram ID**: 164356
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Bulk_Operation_Type["Bulk Operation Type"]
    class Data_Export_Result["Data Export Result"]
    class Data_Export_System_Config["Data Export System Config"]
    class Data_Export_Operation["Data Export Operation"]
    class Bulk_Operation["Bulk Operation"]
    Bulk_Operation <|-- Data_Export_Operation : unnamed
    Bulk_Operation ..> Bulk_Operation_Type : unnamed
    Bulk_Operation o-- Data_Export_Result : unnamed
```
