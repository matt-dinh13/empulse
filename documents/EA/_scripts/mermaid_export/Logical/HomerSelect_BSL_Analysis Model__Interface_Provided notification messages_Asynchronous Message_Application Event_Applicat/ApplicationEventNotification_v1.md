# ApplicationEventNotification_v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v1
- **Diagram ID**: 132800
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class identificationAttribute["identificationAttribute"]
    class EventCode["EventCode"]
    class AsynchronousMessage["AsynchronousMessage"]
    class ApplicationEventNotification_v1["ApplicationEventNotification_v1"]
    AsynchronousMessage <|-- ApplicationEventNotification_v1 : unnamed
    ApplicationEventNotification_v1 ..> EventCode : unnamed
    ApplicationEventNotification_v1 ..> identificationAttribute : unnamed
```
