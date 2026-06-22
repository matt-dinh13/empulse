# Ticketing - Change ticket status API usage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Change ticket status API usage
- **Diagram ID**: 159942
- **Elements**: 14
- **Connectors**: 15

```mermaid
classDiagram
    class Generate_Ticket_changed_notification["Generate Ticket changed notification"]
    class Generate_notification_about_Ticket_status_change["Generate notification about Ticket status change"]
    class ResolutionTime_calculation_rule["ResolutionTime calculation rule"]
    class ResponseTime_calculation_rule["ResponseTime calculation rule"]
    class Change_ticket_status_user_interface["Change ticket status - user interface"]
    class Ticketing["Ticketing"]
    class Ticket_detail_user_interface["Ticket detail - user interface"]
    class n_10_028_Get_ticket_rules_service["10.028 Get ticket rules service"]
    class n_10_062_Change_ticket_status_service["10.062 Change ticket status service"]
    class n_10_060_Change_ticket_status["10.060 Change ticket status"]
    class StatusTransitions["StatusTransitions"]
    class Rule["Rule"]
    class Rule["Rule"]
    class StatusTransition["StatusTransition"]
    StatusTransitions --> StatusTransition : unnamed
    Rule --> Rule : unnamed
    Ticketing ..> Rule : /{ticketCode}
    Ticketing ..> StatusTransitions : /StatusTransitions
    Change_ticket_status_user_interface ..> n_10_060_Change_ticket_status : unnamed
    Ticket_detail_user_interface ..> n_10_060_Change_ticket_status : unnamed
    StatusTransitions ..> n_10_062_Change_ticket_status_service : unnamed
    Rule ..> n_10_028_Get_ticket_rules_service : unnamed
    n_10_060_Change_ticket_status ..> Rule : unnamed
    n_10_060_Change_ticket_status ..> n_10_062_Change_ticket_status_service : unnamed
    n_10_060_Change_ticket_status ..> StatusTransitions : unnamed
    n_10_062_Change_ticket_status_service ..> ResponseTime_calculation_rule : unnamed
    n_10_062_Change_ticket_status_service ..> ResolutionTime_calculation_rule : unnamed
    n_10_062_Change_ticket_status_service ..> Generate_Ticket_changed_notification : unnamed
    n_10_062_Change_ticket_status_service ..> Generate_notification_about_Ticket_status_change : unnamed
```
