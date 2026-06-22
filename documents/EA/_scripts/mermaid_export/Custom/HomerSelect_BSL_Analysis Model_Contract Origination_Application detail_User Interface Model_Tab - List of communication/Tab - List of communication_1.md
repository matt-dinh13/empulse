# Tab - List of communication

```mermaid
graph TD
    CLC["CLC"]
    n_07_022_Show_list_of_communication_for_application["07.022 Show list of communication for application"]
    Search["Search"]
    System["System"]
    Channel["Channel"]
    Type["Type"]
    BSL["BSL"]
    MSS["MSS"]
    Loxon["Loxon"]
    CCH["CCH"]
    VBOT["VBOT"]
    Filter["Filter"]
    Search["Search"]
    Search["Search"]
    Create_communication["Create communication"]
    Show_communication_record["Show communication record"]
    MOD_07_040_Create_communication_record_manually["{MOD}07.040 Create communication record manually"]
    MOD_07_020_Show_list_of_communication["{MOD}07.020 Show list of communication"]
    Create_communication["Create communication"]
    Communication_records["Communication records"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    Tab_List_of_communication["Tab - List of communication"]
    n_07_030_Show_detail_of_communication["07.030 Show detail of communication"]
    Communication_records -->|unnamed| n_07_030_Show_detail_of_communication
    Tab_List_of_communication -->|unnamed| MOD_07_020_Show_list_of_communication
    Create_communication -->|unnamed| MOD_07_040_Create_communication_record_manually
    Communication_records -->|unnamed| Show_communication_record
    Create_communication -->|unnamed| Create_communication
    Tab_List_of_communication -->|{ADD LOR-8079/}| n_07_022_Show_list_of_communication_for_application
```
