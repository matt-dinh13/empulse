# User Interface Model

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface
- **Diagram ID**: 91316
- **Elements**: 7
- **Connectors**: 12

```mermaid
graph TD
    Ticket_detail["Ticket detail"]
    Create_ticket["Create ticket"]
    Assign_tickets_to_communication["Assign tickets to communication"]
    Update_communication_record["Update communication record"]
    Show_communication_record["Show communication record"]
    Create_communication["Create communication"]
    List_of_communication["List of communication"]
    List_of_communication -->|unnamed| Create_communication
    List_of_communication -->|unnamed| Show_communication_record
    Show_communication_record -->|unnamed| Update_communication_record
    Update_communication_record -->|unnamed| Assign_tickets_to_communication
    Show_communication_record -->|unnamed| Assign_tickets_to_communication
    Create_communication -->|unnamed| Assign_tickets_to_communication
    Update_communication_record -->|unnamed| Create_ticket
    Show_communication_record -->|unnamed| Create_ticket
    Create_communication -->|unnamed| Create_ticket
    Update_communication_record -->|unnamed| Ticket_detail
    Show_communication_record -->|unnamed| Ticket_detail
    Create_communication -->|unnamed| Ticket_detail
```
