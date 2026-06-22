# Ticketing - Assign ticket to department API usage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Assign ticket to department API usage
- **Diagram ID**: 159991
- **Elements**: 11
- **Connectors**: 14

```mermaid
classDiagram
    class Ticket["Ticket"]
    class Tickets["Tickets"]
    class CommentPreferenceType["CommentPreferenceType"]
    class n_10_062_Change_ticket_status_service["10.062 Change ticket status service"]
    class Ticketing["Ticketing"]
    class Ticket_detail_user_interface["Ticket detail - user interface"]
    class Assign_ticket_to_department_user_interface["Assign ticket to department - user interface"]
    class n_10_050_Assign_ticket_to_department["10.050 Assign ticket to department"]
    class StatusTransitions["StatusTransitions"]
    class StatusTransition["StatusTransition"]
    class Rule["Rule"]
    Ticket --> Rule : unnamed
    Ticket --> StatusTransition : unnamed
    StatusTransitions --> StatusTransition : unnamed
    Ticketing ..> StatusTransitions : /StatusTransitions
    Assign_ticket_to_department_user_interface ..> n_10_050_Assign_ticket_to_department : unnamed
    Ticket_detail_user_interface ..> n_10_050_Assign_ticket_to_department : unnamed
    n_10_050_Assign_ticket_to_department ..> n_10_062_Change_ticket_status_service : unnamed
    StatusTransitions ..> n_10_062_Change_ticket_status_service : unnamed
    Rule ..> CommentPreferenceType : unnamed
    Ticketing ..> Tickets : unnamed
    Tickets --> Ticket : unnamed
    Tickets --> Ticket : unnamed
    n_10_050_Assign_ticket_to_department ..> StatusTransitions : unnamed
    n_10_050_Assign_ticket_to_department ..> Tickets : unnamed
```
