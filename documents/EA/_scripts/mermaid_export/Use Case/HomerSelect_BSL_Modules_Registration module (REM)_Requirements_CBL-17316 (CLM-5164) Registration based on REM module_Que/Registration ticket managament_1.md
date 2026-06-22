# Registration ticket managament

```mermaid
graph TD
    Finish_ticket["Finish ticket"]
    Ticketing["Ticketing"]
    Set_ticke_to_idle["Set ticke to  idle"]
    Cancel_ticket["Cancel ticket"]
    Create_ticket["Create ticket"]
    Register_contract_from_ticket_in_BSL["Register contract from ticket in BSL"]
    Assign_ticket_from_queue["Assign ticket from queue"]
    Operator["Operator"]
    Monitor_queue["Monitor queue"]
    Assign_unassign_operator_from_queue["Assign/unassign operator from queue"]
    Set_queue_priority["Set queue priority"]
    Administrator["Administrator"]
    Administrator -->|unnamed| Set_queue_priority
    Administrator -->|unnamed| Assign_unassign_operator_from_queue
    Administrator -->|unnamed| Monitor_queue
    Operator -->|unnamed| Assign_ticket_from_queue
    Operator -->|unnamed| Register_contract_from_ticket_in_BSL
    Ticketing -->|unnamed| Create_ticket
    Ticketing -->|unnamed| Cancel_ticket
    Ticketing -->|unnamed| Set_ticke_to_idle
    Ticketing -->|unnamed| Finish_ticket
```
