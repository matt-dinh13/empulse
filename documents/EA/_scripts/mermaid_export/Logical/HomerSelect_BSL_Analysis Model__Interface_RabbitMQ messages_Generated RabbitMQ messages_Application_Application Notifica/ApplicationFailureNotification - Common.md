# ApplicationFailureNotification - Common

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification
- **Diagram ID**: 158221
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class ApplicationFailureNotification["ApplicationFailureNotification"]
    class MessageAttributes["MessageAttributes"]
    class ValidationErrors["ValidationErrors"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class KeyValueType["KeyValueType"]
    KeyValueType <|-- MessageAttribute : unnamed
    ValidationError ..> MessageAttributes : unnamed
    ValidationErrors ..> ValidationError : unnamed
    MessageAttributes ..> MessageAttribute : unnamed
    ApplicationFailureNotification ..> ValidationErrors : {ADD LOR-7371/}
```
