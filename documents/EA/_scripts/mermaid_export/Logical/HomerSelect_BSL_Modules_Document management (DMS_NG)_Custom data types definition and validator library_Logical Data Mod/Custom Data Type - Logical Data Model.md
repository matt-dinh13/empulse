# Custom Data Type - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Logical Data Model
- **Diagram ID**: 162094
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class ValidatorType["ValidatorType"]
    class DataType["DataType"]
    class CustomDataType["CustomDataType"]
    class CustomDataTypeDefinition["CustomDataTypeDefinition"]
    CustomDataTypeDefinition ..> CustomDataType : unnamed
    CustomDataTypeDefinition ..> ValidatorType : unnamed
    CustomDataTypeDefinition ..> DataType : unnamed
```
