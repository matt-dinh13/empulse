# getTicket

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/getTicket
- **Diagram ID**: 162955
- **Elements**: 15
- **Connectors**: 23

```mermaid
classDiagram
    class ADD_Transition["{ADD}Transition"]
    class ADD_Attachment["{ADD}Attachment"]
    class ADD_User["{ADD}User"]
    class n_10_032_Show_ticket_detail_service["10.032 Show ticket detail service"]
    class User["User"]
    class ADD_Queue["{ADD}Queue"]
    class ADD_Ticket["{ADD}Ticket"]
    class Type["Type"]
    class Status["Status"]
    class RelatedSubjectType["RelatedSubjectType"]
    class RelatedSubject["RelatedSubject"]
    class Priority["Priority"]
    class Department["Department"]
    class Category["Category"]
    class tickets_ticketCode["/tickets/{ticketCode} "]
    tickets_ticketCode ..> ADD_Ticket : unnamed
    ADD_Ticket ..> ADD_Attachment : unnamed
    ADD_Attachment ..> ADD_User : unnamed
    ADD_Attachment ..> ADD_User : unnamed
    RelatedSubject ..> RelatedSubjectType : unnamed
    ADD_Ticket ..> RelatedSubject : unnamed
    ADD_Ticket ..> Category : unnamed
    ADD_Ticket ..> User : unnamed
    ADD_Ticket ..> ADD_User : unnamed
    ADD_Ticket ..> ADD_Transition : unnamed
    ADD_Ticket ..> User : unnamed
    ADD_Ticket ..> ADD_User : unnamed
    ADD_Ticket ..> Priority : unnamed
    ADD_Ticket ..> Type : unnamed
    ADD_Ticket ..> Status : unnamed
    ADD_Ticket ..> ADD_Queue : unnamed
    ADD_Ticket ..> ADD_User : unnamed
    ADD_Ticket ..> Department : unnamed
    ADD_Transition ..> ADD_User : unnamed
    ADD_Transition ..> ADD_User : unnamed
    ADD_Transition ..> ADD_User : unnamed
    ADD_Transition ..> Status : unnamed
    ADD_Transition ..> Department : unnamed
```
