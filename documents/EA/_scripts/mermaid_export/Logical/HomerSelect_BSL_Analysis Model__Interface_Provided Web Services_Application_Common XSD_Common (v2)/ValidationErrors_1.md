# ValidationErrors

```mermaid
classDiagram
    class MessageAttributes["MessageAttributes"]
    class ValidationErrors["ValidationErrors"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class KeyValueType["KeyValueType"]
    MessageAttribute --> KeyValueType : unnamed
    MessageAttributes --> MessageAttribute : unnamed
    ValidationErrors --> ValidationError : unnamed
    ValidationError --> MessageAttributes : unnamed
```
