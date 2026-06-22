# CBL-3916 (CLM-1492) TCK - messaging support for specific tickets

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3916 (CLM-1492) TCK - messaging support for specific tickets
- **Diagram ID**: 119118
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    Request_Parameters_Request_Parameters["Request Parameters : Request Parameters"]
    Ticketing_Create_ticket_API_usage_TicketManagement_Create_ti["Ticketing - Create ticket API usage : TicketManagement - Create ticket overview"]
    Logical_Data_Model_Ticket_notification_setting_Logical_Data_["Logical Data Model : Ticket notification setting - Logical Data Model"]
    Business_Rules_Business_Rules["Business Rules : Business Rules"]
    Ticketing_Change_ticket_status_API_usage_Ticketing_Change_ti["Ticketing - Change ticket status API usage : Ticketing - Change ticket status API usage"]
    REQ_2_Modification_of_Creation_a_Ticket_from_BSL_Communicati["REQ #2 - Modification of Creation a Ticket from BSL Communication"]
    REQ_1_Ticket_notification_configuration["REQ #1 - Ticket notification configuration"]
    Logical_Data_Model_Ticket_notification_setting_Logical_Data_ -->|unnamed| REQ_1_Ticket_notification_configuration
    Business_Rules_Business_Rules -->|unnamed| REQ_1_Ticket_notification_configuration
    Ticketing_Change_ticket_status_API_usage_Ticketing_Change_ti -->|unnamed| REQ_1_Ticket_notification_configuration
    Ticketing_Create_ticket_API_usage_TicketManagement_Create_ti -->|unnamed| REQ_2_Modification_of_Creation_a_Ticket_from_BSL_Communicati
    Request_Parameters_Request_Parameters -->|unnamed| REQ_2_Modification_of_Creation_a_Ticket_from_BSL_Communicati
```
