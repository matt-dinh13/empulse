# CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL
- **Diagram ID**: 144824
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    CommunicationEventType["CommunicationEventType"]
    CreateCommunicationRequest["CreateCommunicationRequest"]
    MOD_07_065_Create_communication_on_external_request["{MOD}07.065 Create communication on external request"]
    Communication_file_content_validation["Communication file content validation"]
    MOD_communicationRecordType["{MOD}communicationRecordType"]
    External_Reference["External Reference"]
    REQ_1_Modify_REST_API_createCommunicationRecord["REQ #1 - Modify REST API createCommunicationRecord"]
    MOD_07_065_Create_communication_on_external_request -->|unnamed| Communication_file_content_validation
    CreateCommunicationRequest -->|unnamed| CommunicationEventType
    CommunicationEventType -->|unnamed| MOD_communicationRecordType
```
