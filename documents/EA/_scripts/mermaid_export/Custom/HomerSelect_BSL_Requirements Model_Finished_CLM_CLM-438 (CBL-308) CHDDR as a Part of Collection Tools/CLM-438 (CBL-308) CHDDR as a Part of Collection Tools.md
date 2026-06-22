# CLM-438 (CBL-308) CHDDR as a Part of Collection Tools

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-438 (CBL-308) CHDDR as a Part of Collection Tools
- **Diagram ID**: 103335
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Use_case_model_Collection_tool_requests_evaluation["Use case model : Collection tool requests evaluation"]
    Use_Case_Change_due_date_request_creation_and_processing["Use Case : Change due date request creation and processing"]
    Use_case_model_Collection_tools_request["Use case model : Collection tools request"]
    Create_collection_tool_service_request_Create_collection_too["Create collection tool service request : Create collection tool service request"]
    REQ_1_System_provides_Change_of_Due_Date_on_Request_service_["REQ#1 - System provides Change of Due Date on Request service as a part of Collection Tools"]
    Create_collection_tool_service_request_Create_collection_too -->|unnamed| REQ_1_System_provides_Change_of_Due_Date_on_Request_service_
    Use_case_model_Collection_tools_request -->|unnamed| REQ_1_System_provides_Change_of_Due_Date_on_Request_service_
    Use_Case_Change_due_date_request_creation_and_processing -->|unnamed| REQ_1_System_provides_Change_of_Due_Date_on_Request_service_
    Use_case_model_Collection_tool_requests_evaluation -->|unnamed| REQ_1_System_provides_Change_of_Due_Date_on_Request_service_
```
