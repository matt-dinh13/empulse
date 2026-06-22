# List of communication tickets

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication tickets
- **Diagram ID**: 156290
- **Elements**: 11
- **Connectors**: 7

```mermaid
graph TD
    Ticket_detail["Ticket detail"]
    Assign_tickets_to_communication["Assign tickets to communication"]
    n_07_110_Assign_ticket_to_communication["07.110 Assign ticket to communication"]
    Create_ticket["Create ticket"]
    Create_communication_Create_communication["Create communication : Create communication"]
    Communication_detail_Show_communication_record["Communication detail :Show communication record"]
    n_07_120_Show_communication_ticket_list["07.120 Show communication ticket list"]
    Create_ticket["Create ticket"]
    Assign_ticket["Assign ticket"]
    List_of_tickets["List of tickets"]
    List_of_tickets_panel["List of tickets panel"]
    Communication_detail_Show_communication_record -->|unnamed| List_of_tickets_panel
    Create_communication_Create_communication -->|unnamed| List_of_tickets
    n_07_110_Assign_ticket_to_communication -->|unnamed| Assign_ticket
    List_of_tickets_panel -->|unnamed| n_07_120_Show_communication_ticket_list
    Create_ticket -->|unnamed| Create_ticket
    Assign_ticket -->|unnamed| Assign_tickets_to_communication
    List_of_tickets -->|unnamed| Ticket_detail
```
