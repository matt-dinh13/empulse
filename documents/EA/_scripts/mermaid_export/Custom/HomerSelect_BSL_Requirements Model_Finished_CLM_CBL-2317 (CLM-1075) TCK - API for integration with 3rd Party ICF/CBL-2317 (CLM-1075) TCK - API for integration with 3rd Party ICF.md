# CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2317 (CLM-1075) TCK - API for integration with 3rd Party ICF
- **Diagram ID**: 100554
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    Use_Case_Create_communication_on_external_request["Use Case : Create communication on external request"]
    CommunicationManagementWS_CommunicationManagementWS["CommunicationManagementWS : CommunicationManagementWS"]
    REQ_3_Exposing_a_new_service_for_communication_creation["REQ #3 - Exposing a new service for communication creation"]
    REQ_2_Change_ticket_status_from_external_system["REQ #2 - Change ticket status from external system"]
    REQ_1_Create_general_ticket_from_external_system["REQ #1 - Create general ticket from external system"]
    CommunicationManagementWS_CommunicationManagementWS -->|unnamed| REQ_3_Exposing_a_new_service_for_communication_creation
    Use_Case_Create_communication_on_external_request -->|unnamed| REQ_3_Exposing_a_new_service_for_communication_creation
```
