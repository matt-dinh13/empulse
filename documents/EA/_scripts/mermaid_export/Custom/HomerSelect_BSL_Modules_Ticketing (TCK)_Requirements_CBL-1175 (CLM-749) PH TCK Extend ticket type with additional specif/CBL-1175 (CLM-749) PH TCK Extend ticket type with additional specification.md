# CBL-1175 (CLM-749) PH TCK Extend ticket type with additional specification

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-1175 (CLM-749) PH TCK Extend ticket type with additional specification
- **Diagram ID**: 156072
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Create_ticket_Create_ticket_user_interface["Create ticket : Create ticket - user interface"]
    Use_Case_Model_Ticket_creation_Use_Case_Model["Use Case Model : Ticket creation - Use Case Model"]
    Ticketing_Create_ticket_API_usage_Ticketing_Create_ticket_ov["Ticketing - Create ticket API usage : Ticketing - Create ticket overview (with TypeSpecification)"]
    Logical_Data_Model_TicketType_extension_Logical_Data_Model["Logical Data Model : TicketType extension - Logical Data Model"]
    REQ_1_Adding_additional_specification_to_Ticket_Type["REQ #1 Adding additional specification to Ticket Type"]
    Create_ticket_Create_ticket_user_interface -->|unnamed| REQ_1_Adding_additional_specification_to_Ticket_Type
    Use_Case_Model_Ticket_creation_Use_Case_Model -->|unnamed| REQ_1_Adding_additional_specification_to_Ticket_Type
    Ticketing_Create_ticket_API_usage_Ticketing_Create_ticket_ov -->|unnamed| REQ_1_Adding_additional_specification_to_Ticket_Type
    Logical_Data_Model_TicketType_extension_Logical_Data_Model -->|unnamed| REQ_1_Adding_additional_specification_to_Ticket_Type
```
