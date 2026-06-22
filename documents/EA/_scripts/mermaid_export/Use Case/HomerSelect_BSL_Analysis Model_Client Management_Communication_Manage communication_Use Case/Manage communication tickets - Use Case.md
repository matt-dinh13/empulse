# Manage communication tickets - Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Use Case
- **Diagram ID**: 164534
- **Elements**: 10
- **Connectors**: 10

```mermaid
graph LR
    Assign_tickets_to_communication_Assign_tickets_to_communicat["Assign tickets to communication : Assign tickets to communication V2"]
    TCK[/"TCK"/]
    MOD_10_012_Search_for_tickets_service["{MOD}10.012 Search for tickets service"]
    n_10_034_Create_related_subject_to_ticket_service["10.034 Create related subject to ticket service"]
    MOD_10_020_Create_ticket_manually["{MOD}10.020 Create ticket manually"]
    User[/"User"/]
    n_07_030_Show_detail_of_communication(("07.030 Show detail of communication"))
    n_07_120_Show_communication_ticket_list_v2(("07.120 Show communication ticket list v2"))
    n_07_110_Assign_ticket_to_communication_v2(("07.110 Assign ticket to communication v2"))
    New_TCK_module["New TCK module"]
    Assign_tickets_to_communication_Assign_tickets_to_communicat -->|unnamed| n_07_110_Assign_ticket_to_communication_v2
    n_07_030_Show_detail_of_communication -.->|include| n_07_120_Show_communication_ticket_list_v2
    n_07_110_Assign_ticket_to_communication_v2 -.->|include| n_10_034_Create_related_subject_to_ticket_service
    n_07_120_Show_communication_ticket_list_v2 -.->|include| MOD_10_012_Search_for_tickets_service
    TCK --> n_07_110_Assign_ticket_to_communication_v2
    TCK --> n_07_120_Show_communication_ticket_list_v2
    TCK --- MOD_10_020_Create_ticket_manually
    User --> MOD_10_020_Create_ticket_manually
    User --> n_07_110_Assign_ticket_to_communication_v2
    User --> n_07_030_Show_detail_of_communication
```
