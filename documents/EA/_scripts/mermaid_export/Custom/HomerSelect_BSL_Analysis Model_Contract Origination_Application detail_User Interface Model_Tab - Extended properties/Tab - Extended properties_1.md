# Tab - Extended properties

```mermaid
graph TD
    Create_extended_property["Create extended property"]
    n_00_020_Show_list_of_extended_properties["00.020 Show list of extended properties"]
    MOD_00_030_Add_extended_property["{MOD}00.030 Add extended property"]
    Create_extended_property["Create extended property"]
    List_of_extended_properties["List of extended properties"]
    MOD_00_040_Remove_extended_property["{MOD}00.040 Remove extended property"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    Tab_Extended_properties["Tab - Extended properties"]
    Create_extended_property -->|unnamed| Create_extended_property
    List_of_extended_properties -->|unnamed| MOD_00_040_Remove_extended_property
    Create_extended_property -->|unnamed| MOD_00_030_Add_extended_property
    Tab_Extended_properties -->|unnamed| n_00_020_Show_list_of_extended_properties
```
