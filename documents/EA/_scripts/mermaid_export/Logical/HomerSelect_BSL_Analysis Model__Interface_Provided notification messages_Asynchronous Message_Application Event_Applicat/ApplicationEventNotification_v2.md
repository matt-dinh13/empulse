# ApplicationEventNotification_v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/Application Event/ApplicationEventNotification_v2
- **Diagram ID**: 136921
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class AsynchronousMessage["AsynchronousMessage"]
    class EventData["EventData"]
    class ApplicationNotifivation_v2["ApplicationNotifivation_v2"]
    ApplicationNotifivation_v2 ..> EventData : unnamed
    AsynchronousMessage <|-- ApplicationNotifivation_v2 : unnamed
```
