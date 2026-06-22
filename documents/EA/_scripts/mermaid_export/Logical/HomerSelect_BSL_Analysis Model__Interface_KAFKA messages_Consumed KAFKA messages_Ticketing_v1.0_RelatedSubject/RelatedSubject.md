# RelatedSubject

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Consumed KAFKA messages/Ticketing/v1.0/RelatedSubject
- **Diagram ID**: 140928
- **Elements**: 5
- **Connectors**: 6

```mermaid
classDiagram
    class Item["Item"]
    class Ticket["Ticket"]
    class Subject["Subject"]
    class TicketEvent["TicketEvent"]
    class ADD_RelatedSubjectNotification["{ADD}RelatedSubjectNotification"]
    Ticket ..> Item : unnamed
    Ticket ..> Item : unnamed
    Ticket ..> Item : unnamed
    ADD_RelatedSubjectNotification ..> Ticket : unnamed
    ADD_RelatedSubjectNotification ..> Subject : unnamed
    ADD_RelatedSubjectNotification ..> TicketEvent : unnamed
```
