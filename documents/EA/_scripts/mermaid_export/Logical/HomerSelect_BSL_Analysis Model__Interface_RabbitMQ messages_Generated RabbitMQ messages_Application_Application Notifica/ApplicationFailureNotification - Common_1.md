# ApplicationFailureNotification - Common

```mermaid
classDiagram
    class ApplicationFailureNotification["ApplicationFailureNotification"]
    class MessageAttributes["MessageAttributes"]
    class ValidationErrors["ValidationErrors"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class KeyValueType["KeyValueType"]
    MessageAttribute --> KeyValueType : unnamed
    ValidationError --> MessageAttributes : unnamed
    ValidationErrors --> ValidationError : unnamed
    MessageAttributes --> MessageAttribute : unnamed
    ApplicationFailureNotification --> ValidationErrors : {ADD LOR-7371/}
```
