# Manage communication tickets - Use Case

```mermaid
graph TD
    n_10_030_Show_ticket_detail["10.030 Show ticket detail"]
    n_10_020_Create_ticket_manually["10.020 Create ticket manually"]
    User["User"]
    Time["Time"]
    ADD_Consume_outbox_communication_event["{ADD}Consume outbox communication event"]
    Assign_tickets_to_communication_Assign_tickets_to_communicat["Assign tickets to communication : Assign tickets to communication V2"]
    MOD_07_030_Show_communication_record["{MOD}07.030 Show communication record"]
    n_07_120_Show_communication_ticket_list_v2["07.120 Show communication ticket list v2"]
    n_07_110_Assign_ticket_to_communication_v2["07.110 Assign ticket to communication v2"]
    New_TCK_module["New TCK module"]
    User -->|unnamed| n_10_030_Show_ticket_detail
    Time -->|unnamed| ADD_Consume_outbox_communication_event
    Assign_tickets_to_communication_Assign_tickets_to_communicat -->|unnamed| n_07_110_Assign_ticket_to_communication_v2
    MOD_07_030_Show_communication_record -->|unnamed| n_07_120_Show_communication_ticket_list_v2
    User -->|unnamed| n_10_020_Create_ticket_manually
    User -->|unnamed| n_07_110_Assign_ticket_to_communication_v2
    User -->|unnamed| MOD_07_030_Show_communication_record
```
