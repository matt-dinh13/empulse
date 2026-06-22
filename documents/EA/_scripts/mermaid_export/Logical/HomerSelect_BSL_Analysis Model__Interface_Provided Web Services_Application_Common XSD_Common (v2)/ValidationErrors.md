# ValidationErrors

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Common XSD/Common (v2)
- **Diagram ID**: 139219
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class MessageAttributes["MessageAttributes"]
    class ValidationErrors["ValidationErrors"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class KeyValueType["KeyValueType"]
    KeyValueType <|-- MessageAttribute : unnamed
    MessageAttributes ..> MessageAttribute : unnamed
    ValidationErrors ..> ValidationError : unnamed
    ValidationError ..> MessageAttributes : unnamed
```
