# CBL-19215 (CLM-5364) Implement select2 component

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5364) Implement select2 component
- **Diagram ID**: 156061
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    n_10_062_Assign_ticket_to_user["10.062 Assign ticket to user"]
    n_10_063_Unassign_ticket_from_user["10.063 Unassign ticket from user"]
    User_assignment_modal_ADD_User_assignment_modal["User assignment modal : {ADD}User assignment modal"]
    Show_User_assignment_modal["Show User assignment modal"]
    ADD_Assignee["{ADD}Assignee"]
    CBL_19215_CLM_5364_Implement_select2_component["CBL-19215 (CLM-5364) Implement select2 component"]
    ADD_Assignee -->|unnamed| Show_User_assignment_modal
    Show_User_assignment_modal -->|unnamed| n_10_063_Unassign_ticket_from_user
    Show_User_assignment_modal -->|unnamed| n_10_062_Assign_ticket_to_user
```
