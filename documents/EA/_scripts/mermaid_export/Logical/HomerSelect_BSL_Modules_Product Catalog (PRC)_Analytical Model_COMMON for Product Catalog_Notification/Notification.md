# Notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Notification
- **Diagram ID**: 162297
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Entity_Type["Entity Type"]
    class Event_Type["Event Type"]
    class Originator["Originator"]
    class entityId["entityId"]
    class NotificationRequest["NotificationRequest"]
    class Application_events["Application events"]
    Application_events ..> NotificationRequest : unnamed
    NotificationRequest ..> entityId : unnamed
    NotificationRequest ..> Originator : unnamed
    NotificationRequest ..> Event_Type : unnamed
    NotificationRequest ..> Entity_Type : unnamed
```
