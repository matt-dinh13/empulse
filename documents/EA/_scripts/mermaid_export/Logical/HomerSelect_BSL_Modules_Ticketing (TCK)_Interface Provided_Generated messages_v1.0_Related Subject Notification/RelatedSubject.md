# RelatedSubject

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/Related Subject Notification
- **Diagram ID**: 156089
- **Elements**: 5
- **Connectors**: 6

```mermaid
classDiagram
    class Item["Item"]
    class Ticket["Ticket"]
    class Subject["Subject"]
    class TicketEvent["TicketEvent"]
    class ADD_RelatedSubjectNotification["{ADD}RelatedSubjectNotification"]
    ADD_RelatedSubjectNotification ..> TicketEvent : unnamed
    ADD_RelatedSubjectNotification ..> Subject : unnamed
    ADD_RelatedSubjectNotification ..> Ticket : unnamed
    Ticket ..> Item : unnamed
    Ticket ..> Item : unnamed
    Ticket ..> Item : unnamed
```
