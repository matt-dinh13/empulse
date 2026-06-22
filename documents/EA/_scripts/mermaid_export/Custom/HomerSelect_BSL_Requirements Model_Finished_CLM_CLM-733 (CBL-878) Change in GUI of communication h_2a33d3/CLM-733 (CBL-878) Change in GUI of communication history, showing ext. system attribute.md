# CLM-733 (CBL-878) Change in GUI of communication history, showing ext. system attribute

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-733 (CBL-878) Change in GUI of communication history, showing ext. system attribute
- **Diagram ID**: 103337
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph TD
    Logical_Data_Model_Communication["Logical Data Model : Communication"]
    hsCRMFile_CRMFile["hsCRMFile : CRMFile"]
    List_of_communication_List_of_communication["List of communication : List of communication"]
    Use_Case_Import_list_of_communication["Use Case : Import list of communication"]
    REQ_1_System_imports_external_system_name_data_contained_in_["REQ#1 - System imports external system name data contained in AutomaticCommunicationListImportRequest to distinguish the particular imported communication does not originated in BSL but different external system."]
    REQ_3_System_displays_empty_Created_By_attribute_in_case_the["REQ#3 - System displays empty 'Created By' attribute in case there was no value obtained from external system."]
    REQ_2_System_displays_external_system_name_in_List_of_commun["REQ#2 - System displays external system name in 'List of communication' tab."]
    Use_Case_Import_list_of_communication -->|unnamed| REQ_3_System_displays_empty_Created_By_attribute_in_case_the
    Use_Case_Import_list_of_communication -->|unnamed| REQ_1_System_imports_external_system_name_data_contained_in_
    List_of_communication_List_of_communication -->|unnamed| REQ_3_System_displays_empty_Created_By_attribute_in_case_the
    List_of_communication_List_of_communication -->|unnamed| REQ_2_System_displays_external_system_name_in_List_of_commun
    hsCRMFile_CRMFile -->|unnamed| REQ_1_System_imports_external_system_name_data_contained_in_
    Logical_Data_Model_Communication -->|unnamed| REQ_1_System_imports_external_system_name_data_contained_in_
```
