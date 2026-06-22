# Ticketing API overview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1
- **Diagram ID**: 159972
- **Elements**: 18
- **Connectors**: 9

```mermaid
classDiagram
    class Ticketing_Related_subjects_API_usage["Ticketing - Related subjects API usage"]
    class Ticketing_Create_mistake_ticket_API_usage["Ticketing - Create mistake ticket API usage"]
    class Attachments["Attachments"]
    class Statuses["Statuses"]
    class StatusTransitions["StatusTransitions"]
    class Rule["Rule"]
    class Priorities["Priorities"]
    class Ticketing_search_for_ticket_usage["Ticketing - search for ticket usage"]
    class Ticketing_Change_ticket_status_API_usage["Ticketing - Change ticket status API usage"]
    class Ticketing_Attach_a_file_to_ticket_API_usage["Ticketing - Attach a file to ticket API usage"]
    class Ticketing_Assign_ticket_to_department_API_usage["Ticketing - Assign ticket to department API usage"]
    class Tickets["Tickets"]
    class TicketInfos["TicketInfos"]
    class Departments["Departments"]
    class Ticketing["Ticketing"]
    class Types["Types"]
    class Categories["Categories"]
    class TicketManagement_Create_ticket_API_REST["TicketManagement - Create ticket API (REST)"]
    Types ..> Departments : /{typeCode} | {role}
    Ticketing ..> Attachments : /Attachments
    Categories ..> Types : /{categoryCode}
    Ticketing ..> Categories : /categories
    Ticketing ..> Statuses : /statuses
    Ticketing ..> StatusTransitions : /StatusTransitions
    Ticketing ..> Priorities : /priorities
    Ticketing ..> Tickets : unnamed
    Ticketing ..> Rule : /{ticketCode}
```
