# Extended properties

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Use Case
- **Diagram ID**: 164530
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph LR
    Add_extended_property_Add_extended_property["Add extended property : Add extended property"]
    List_of_extended_properties_List_of_extended_properties_pane["List of extended properties : List of extended properties panel"]
    User[/"User"/]
    MOD_00_040_Remove_extended_property(("{MOD}00.040 Remove extended property"))
    MOD_00_030_Add_extended_property(("{MOD}00.030 Add extended property"))
    n_00_020_Show_list_of_extended_properties(("00.020 Show list of extended properties"))
    MOD_00_040_Remove_extended_property -->|unnamed| List_of_extended_properties_List_of_extended_properties_pane
    n_00_020_Show_list_of_extended_properties -->|unnamed| List_of_extended_properties_List_of_extended_properties_pane
    MOD_00_030_Add_extended_property -->|unnamed| Add_extended_property_Add_extended_property
    User --> MOD_00_030_Add_extended_property
    User --> MOD_00_040_Remove_extended_property
    User --> n_00_020_Show_list_of_extended_properties
```
