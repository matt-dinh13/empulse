# Entity Modification Notification - Interface

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Notifications/Entity Modification Notification
- **Diagram ID**: 162291
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class Entity_Modification_Notification_Entity_Modification_Notific["Entity Modification Notification : Entity Modification Notification - Involved Use Cases"]
    class EntityType["EntityType"]
    class NotificationResponse["NotificationResponse"]
    class NotificationRequest["NotificationRequest"]
    class ADD_NotificationWS["{ADD} NotificationWS"]
    ADD_NotificationWS ..> NotificationRequest : unnamed
    ADD_NotificationWS ..> NotificationResponse : unnamed
    NotificationRequest ..> EntityType : unnamed
```
