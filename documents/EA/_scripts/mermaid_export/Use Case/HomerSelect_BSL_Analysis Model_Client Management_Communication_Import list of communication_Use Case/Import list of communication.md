# Import list of communication

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Use Case
- **Diagram ID**: 152145
- **Elements**: 15
- **Connectors**: 15

```mermaid
graph LR
    Automatic_Import_response_Automatic_Import_response["Automatic Import response : Automatic Import response"]
    Create_communication_events_from_the_file["Create communication events from the file"]
    Validations_Validations["Validations : Validations"]
    Communication_file_content_validation["Communication file content validation"]
    hsCRMFile_CRMFile["hsCRMFile : CRMFile"]
    External_system[/"External system"/]
    ADD_IAHOSEL_190_Communication_list_CommunicationListWS["{ADD IAHOSEL-190}Communication list : CommunicationListWS"]
    n_07_061_Automatic_import_communication_list(("07.061 Automatic import communication list"))
    Message_structure_of_error_report["Message structure of error report"]
    Message_structure_of_success_report["Message structure of success report"]
    Communication_file_import_Communication_file_import["Communication file import : Communication file import"]
    Time[/"Time"/]
    User[/"User"/]
    MOD_07_060_Process_communication_list_file(("{MOD}07.060 Process communication list file"))
    n_07_010_Import_communication_list(("07.010 Import communication list"))
    Communication_file_import_Communication_file_import -->|unnamed| n_07_010_Import_communication_list
    n_07_010_Import_communication_list -->|unnamed| MOD_07_060_Process_communication_list_file
    hsCRMFile_CRMFile -->|unnamed| MOD_07_060_Process_communication_list_file
    n_07_061_Automatic_import_communication_list -->|unnamed| MOD_07_060_Process_communication_list_file
    Automatic_Import_response_Automatic_Import_response -->|unnamed| MOD_07_060_Process_communication_list_file
    MOD_07_060_Process_communication_list_file -->|unnamed| Message_structure_of_success_report
    MOD_07_060_Process_communication_list_file -->|unnamed| Message_structure_of_error_report
    n_07_061_Automatic_import_communication_list -->|unnamed| ADD_IAHOSEL_190_Communication_list_CommunicationListWS
    n_07_010_Import_communication_list -->|unnamed| hsCRMFile_CRMFile
    MOD_07_060_Process_communication_list_file -->|unnamed| Communication_file_content_validation
    Communication_file_content_validation -->|unnamed| Validations_Validations
    MOD_07_060_Process_communication_list_file -->|unnamed| Create_communication_events_from_the_file
    External_system --- n_07_061_Automatic_import_communication_list
    Time --> MOD_07_060_Process_communication_list_file
    User --> n_07_010_Import_communication_list
```
