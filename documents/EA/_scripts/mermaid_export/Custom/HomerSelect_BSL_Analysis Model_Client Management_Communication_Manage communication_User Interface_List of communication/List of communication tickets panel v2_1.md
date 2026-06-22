# List of communication tickets panel v2

```mermaid
graph TD
    Create_ticket_user_interface["Create ticket - user interface"]
    Show_communication_record["Show communication record"]
    Assign_tickets_to_communication_V2["Assign tickets to communication V2"]
    n_07_120_Show_communication_ticket_list_v2["07.120 Show communication ticket list v2"]
    n_07_110_Assign_ticket_to_communication_v2["07.110 Assign ticket to communication v2"]
    Create_ticket["Create ticket"]
    Assign_ticket["Assign ticket"]
    List_of_tickets_v2["List of tickets v2"]
    List_of_tickets_panel_v2["List of tickets panel v2"]
    MOD_10_020_Create_ticket_manually["{MOD}10.020 Create ticket manually"]
    Assign_ticket -->|unnamed| n_07_110_Assign_ticket_to_communication_v2
    List_of_tickets_panel_v2 -->|unnamed| n_07_120_Show_communication_ticket_list_v2
    Assign_ticket -->|unnamed| Assign_tickets_to_communication_V2
    List_of_tickets_panel_v2 -->|unnamed| Show_communication_record
    Create_ticket -->|unnamed| Create_ticket_user_interface
```
