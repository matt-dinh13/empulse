# {ADD}Queue detail screen

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queue detail
- **Diagram ID**: 156054
- **Elements**: 11
- **Connectors**: 3

```mermaid
graph TD
    ADD_Users_with_permission_IDM_Managed["{ADD}Users with permission (IDM Managed)"]
    ADD_Users_with_permission_TCK_Managed["{ADD}Users with permission (TCK Managed)"]
    n_10_030_Show_ticket_detail["10.030 Show ticket detail"]
    n_10_017_Get_available_queues["10.017 Get available queues"]
    n_10_010_Search_for_tickets["10.010 Search for tickets"]
    n_["›"]
    n_["‹"]
    int["‹int›"]
    Tickets["Tickets"]
    Queue_picker["Queue picker"]
    MOD_Queue_detail_Queue_code["{MOD}Queue detail: ‹Queue code›"]
    Tickets -->|unnamed| n_10_010_Search_for_tickets
    Queue_picker -->|unnamed| n_10_017_Get_available_queues
    Tickets -->|unnamed| n_10_030_Show_ticket_detail
```
