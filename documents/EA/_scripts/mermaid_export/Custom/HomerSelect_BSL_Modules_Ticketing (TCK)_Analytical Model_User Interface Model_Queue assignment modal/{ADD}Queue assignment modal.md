# {ADD}Queue assignment modal

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queue assignment modal
- **Diagram ID**: 156057
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph TD
    UI_Control["UI Control"]
    n_10_017_Get_available_queues["10.017 Get available queues"]
    n_10_033_Remove_ticket_from_queue["10.033 Remove ticket from queue"]
    n_10_032_Add_ticket_to_queue["10.032 Add ticket to queue"]
    Close["Close"]
    Queue_assignment["Queue assignment"]
    Queue_assignment["Queue assignment"]
    Queue_assignment -->|unnamed| n_10_032_Add_ticket_to_queue
    Queue_assignment -->|unnamed| n_10_033_Remove_ticket_from_queue
    Queue_assignment -->|unnamed| n_10_017_Get_available_queues
    n_10_032_Add_ticket_to_queue -->|unnamed| n_10_017_Get_available_queues
```
