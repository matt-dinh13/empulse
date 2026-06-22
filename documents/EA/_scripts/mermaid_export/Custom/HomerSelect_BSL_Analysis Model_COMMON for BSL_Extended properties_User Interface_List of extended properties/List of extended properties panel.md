# List of extended properties panel

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/User Interface/List of extended properties
- **Diagram ID**: 107139
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    MOD_00_040_Remove_extended_property["{MOD}00.040 Remove extended property"]
    MOD_00_030_Add_extended_property["{MOD}00.030 Add extended property"]
    Add_property["Add property"]
    List_of_extended_properties["List of extended properties"]
    Extended_properties["Extended properties"]
    Add_property -->|unnamed| MOD_00_030_Add_extended_property
    List_of_extended_properties -->|unnamed| MOD_00_040_Remove_extended_property
```
