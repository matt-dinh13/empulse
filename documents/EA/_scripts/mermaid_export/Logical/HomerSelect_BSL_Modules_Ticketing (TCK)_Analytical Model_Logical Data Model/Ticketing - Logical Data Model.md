# Ticketing - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model
- **Diagram ID**: 156031
- **Elements**: 17
- **Connectors**: 22

```mermaid
classDiagram
    class ADD_Queue["{ADD}Queue"]
    class ADD_Role2Queue["{ADD}Role2Queue"]
    class MOD_Ticket2Queue["{MOD}Ticket2Queue"]
    class TicketFlow["TicketFlow"]
    class TicketTypeSpecification["TicketTypeSpecification"]
    class Department["Department"]
    class RelatedSubjectType["RelatedSubjectType"]
    class RelatedSubject["RelatedSubject"]
    class Logical_Data_Model_Ticketing_setting_Logical_Data_Model["Logical Data Model :Ticketing setting - Logical Data Model"]
    class TicketCategory["TicketCategory"]
    class Attachment["Attachment"]
    class Priority["Priority"]
    class TicketModificationType["TicketModificationType"]
    class TicketType["TicketType"]
    class StatusTransition["StatusTransition"]
    class Ticket["Ticket"]
    class TicketStatus["TicketStatus"]
    StatusTransition ..> TicketModificationType : unnamed
    ADD_Role2Queue --> ADD_Queue : unnamed
    Ticket --> MOD_Ticket2Queue : unnamed
    TicketType --> TicketFlow : unnamed
    Ticket ..> TicketTypeSpecification : unnamed
    TicketType --> TicketTypeSpecification : unnamed
    Ticket --> Department : is solved by
    StatusTransition --> Department : unnamed
    RelatedSubject ..> RelatedSubjectType : unnamed
    TicketType --> TicketCategory : unnamed
    MOD_Ticket2Queue --> ADD_Queue : unnamed
    TicketType --> Priority : has
    Ticket --> TicketStatus : unnamed
    StatusTransition ..> TicketType : unnamed
    Ticket --> TicketType : unnamed
    StatusTransition --> StatusTransition : unnamed
    Ticket o-- RelatedSubject : unnamed
    Ticket o-- StatusTransition : unnamed
    Ticket o-- Attachment : unnamed
    TicketType --> TicketStatus : unnamed
    StatusTransition --> TicketStatus : unnamed
    Ticket ..> Priority : unnamed
```
