# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Access Rights
- **Diagram ID**: 123546
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph TD
    n_00_040_Remove_extended_property_all_properties["00.040 Remove extended property (all properties)"]
    n_00_020_Show_list_of_extended_properties["00.020 Show list of extended properties"]
    n_00_040_Remove_extended_property["00.040 Remove extended property"]
    n_00_030_Add_extended_property["00.030 Add extended property"]
    n_00_020_Show_list_of_extended_properties["00.020 Show list of extended properties"]
    MOD_00_040_Remove_extended_property["{MOD}00.040 Remove extended property"]
    MOD_00_030_Add_extended_property["{MOD}00.030 Add extended property"]
    MOD_00_040_Remove_extended_property -->|unnamed| n_00_040_Remove_extended_property_all_properties
    MOD_00_040_Remove_extended_property -->|unnamed| n_00_040_Remove_extended_property
    n_00_020_Show_list_of_extended_properties -->|unnamed| n_00_020_Show_list_of_extended_properties
    MOD_00_030_Add_extended_property -->|unnamed| n_00_030_Add_extended_property
```
