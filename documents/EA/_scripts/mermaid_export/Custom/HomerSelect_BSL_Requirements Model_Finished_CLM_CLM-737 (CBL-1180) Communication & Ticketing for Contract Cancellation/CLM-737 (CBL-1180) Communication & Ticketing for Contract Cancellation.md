# CLM-737 (CBL-1180) Communication & Ticketing for Contract Cancellation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-737 (CBL-1180) Communication & Ticketing for Contract Cancellation
- **Diagram ID**: 103414
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    Use_Case_Model_Ticket_Management["Use Case Model : Ticket Management"]
    Ticket_detail_Ticket_detail["Ticket detail : Ticket detail"]
    REQ_1_System_displays_Contract_detail_screen_by_clicking_on_["REQ#1 - System displays 'Contract detail' screen by clicking on 'Open contract' button for 'Contract cancellation' tickets when Contract is in status Signed, Active or Paid-off"]
    Ticket_detail_Ticket_detail -->|unnamed| REQ_1_System_displays_Contract_detail_screen_by_clicking_on_
    Use_Case_Model_Ticket_Management -->|unnamed| REQ_1_System_displays_Contract_detail_screen_by_clicking_on_
```
