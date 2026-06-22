# ValidationErrors

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Common XSD/Common (v4)
- **Diagram ID**: 158503
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class MessageAttribute["MessageAttribute"]
    class MessageAttributes["MessageAttributes"]
    class ValidationError["ValidationError"]
    class ValidationErrors["ValidationErrors"]
    ValidationErrors ..> ValidationError : unnamed
    ValidationError ..> MessageAttributes : unnamed
    MessageAttributes ..> MessageAttribute : unnamed
```
