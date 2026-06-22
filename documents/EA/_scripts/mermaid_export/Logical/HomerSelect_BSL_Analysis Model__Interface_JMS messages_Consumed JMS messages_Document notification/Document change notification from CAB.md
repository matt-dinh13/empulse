# Document change notification from CAB

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Document notification
- **Diagram ID**: 132129
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_01_132_Process_Document_change_notification_CAB["{MOD}01.132 Process Document change notification (CAB)"]
    class DocumentNotificationMessage["DocumentNotificationMessage"]
    class ActionTypeDto["ActionTypeDto"]
    class DocumentChangeNotificationRequestDto["DocumentChangeNotificationRequestDto"]
    DocumentChangeNotificationRequestDto ..> ActionTypeDto : unnamed
    DocumentNotificationMessage ..> DocumentChangeNotificationRequestDto : unnamed
```
