# Part 1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip
- **Diagram ID**: 156029
- **Elements**: 10
- **Connectors**: 15

```mermaid
classDiagram
    class Department["Department"]
    class RelatedSubjectType["RelatedSubjectType"]
    class RelatedSubject["RelatedSubject"]
    class Category["Category"]
    class Attachment["Attachment"]
    class Priority["Priority"]
    class Type["Type"]
    class StatusTransition["StatusTransition"]
    class Ticket["Ticket"]
    class Status["Status"]
    Type --> Status : unnamed
    Ticket --> Status : unnamed
    StatusTransition --> Status : unnamed
    Ticket o-- StatusTransition : unnamed
    Ticket o-- Attachment : unnamed
    Ticket o-- RelatedSubject : unnamed
    StatusTransition --> StatusTransition : unnamed
    StatusTransition ..> Type : unnamed
    Ticket --> Type : unnamed
    Ticket --> Priority : unnamed
    Type --> Priority : has
    Type --> Category : unnamed
    RelatedSubject ..> RelatedSubjectType : unnamed
    Ticket --> Department : is solved by
    StatusTransition --> Department : unnamed
```
