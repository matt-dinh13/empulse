# CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication
- **Diagram ID**: 147474
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    n_07_130_Get_communication_from_external_systems["07.130 Get communication from external systems"]
    MOD_07_020_Show_list_of_communication["{MOD}07.020 Show list of communication"]
    CLM_Feature_Flags_CLM_Feature_Flags["CLM Feature Flags : CLM Feature Flags"]
    List_of_communication_tickets_List_of_communication_tickets_["List of communication tickets : List of communication tickets panel v2"]
    List_of_communication_List_of_communication["List of communication : List of communication"]
    CBL_16656_CLM_4941_Tab_List_of_communication_Add_integration["CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication"]
    CBL_16656_CLM_4941_Tab_List_of_communication_Add_integration -->|unnamed| CLM_Feature_Flags_CLM_Feature_Flags
    List_of_communication_tickets_List_of_communication_tickets_ -->|unnamed| CBL_16656_CLM_4941_Tab_List_of_communication_Add_integration
    List_of_communication_List_of_communication -->|unnamed| CBL_16656_CLM_4941_Tab_List_of_communication_Add_integration
    MOD_07_020_Show_list_of_communication -->|unnamed| n_07_130_Get_communication_from_external_systems
```
