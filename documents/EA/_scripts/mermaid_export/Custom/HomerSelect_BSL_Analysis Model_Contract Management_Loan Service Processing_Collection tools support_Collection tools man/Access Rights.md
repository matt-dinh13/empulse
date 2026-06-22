# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools management/Access Rights
- **Diagram ID**: 156728
- **Elements**: 10
- **Connectors**: 6

```mermaid
graph TD
    ADD_08_360_Accept_Loan_Service_Request_Supplement_document["{ADD}08.360 Accept Loan Service Request Supplement document"]
    n_08_360_Accept_Loan_Service_Request_Supplement_document["08.360 Accept Loan Service Request Supplement document"]
    n_08_353_Browse_requests_for_services["08.353 Browse requests for services"]
    n_08_353_Browse_requests_for_services["08.353 Browse requests for services"]
    ADD_08_925_Cancel_expired_loan_service_requests["{ADD}08.925 Cancel expired loan service requests"]
    n_08_925_Cancel_expired_loan_service_requests["08.925 Cancel expired loan service requests"]
    ADD_08_920_Evaluate_collection_tool_service_request["{ADD}08.920 Evaluate collection tool service request"]
    n_08_920_Evaluate_collection_tool_service_request["08.920 Evaluate collection tool service request"]
    ADD_08_910_Manage_Collection_tool_service_requests["{ADD}08.910 Manage Collection tool service requests"]
    n_08_910_Manage_Collection_tool_service_requests["08.910 Manage Collection tool service requests"]
    n_08_910_Manage_Collection_tool_service_requests -->|unnamed| ADD_08_910_Manage_Collection_tool_service_requests
    n_08_360_Accept_Loan_Service_Request_Supplement_document -->|unnamed| n_08_920_Evaluate_collection_tool_service_request
    n_08_920_Evaluate_collection_tool_service_request -->|unnamed| ADD_08_920_Evaluate_collection_tool_service_request
    n_08_925_Cancel_expired_loan_service_requests -->|unnamed| ADD_08_925_Cancel_expired_loan_service_requests
    n_08_353_Browse_requests_for_services -->|unnamed| n_08_353_Browse_requests_for_services
    n_08_360_Accept_Loan_Service_Request_Supplement_document -->|unnamed| ADD_08_360_Accept_Loan_Service_Request_Supplement_document
```
