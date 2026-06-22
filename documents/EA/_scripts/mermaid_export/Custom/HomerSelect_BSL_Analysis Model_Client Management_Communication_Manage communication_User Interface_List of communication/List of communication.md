# List of communication

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication
- **Diagram ID**: 147448
- **Elements**: 18
- **Connectors**: 4

```mermaid
graph TD
    ADD_CLC["{ADD}CLC"]
    VBOT["VBOT"]
    CCH["CCH"]
    Loxon["Loxon"]
    MSS["MSS"]
    MOD_BSL["{MOD}BSL"]
    Type["Type"]
    Channel["Channel"]
    System_source["System source"]
    Communication_filter["Communication filter"]
    Search["Search"]
    Create_communication["Create communication"]
    Show_communication_record["Show communication record"]
    MOD_07_040_Create_communication_record_manually["{MOD}07.040 Create communication record manually"]
    MOD_07_020_Show_list_of_communication["{MOD}07.020 Show list of communication"]
    Create_communication["Create communication"]
    List_of_communication["List of communication"]
    List_of_communication["List of communication"]
    Create_communication -->|unnamed| Create_communication
    List_of_communication -->|unnamed| Show_communication_record
    List_of_communication -->|unnamed| MOD_07_020_Show_list_of_communication
    MOD_07_040_Create_communication_record_manually -->|unnamed| Create_communication
```
