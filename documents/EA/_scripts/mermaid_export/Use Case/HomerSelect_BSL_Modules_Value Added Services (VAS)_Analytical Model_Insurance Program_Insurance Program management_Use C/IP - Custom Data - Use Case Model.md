# IP - Custom Data - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Use Case Model/Custom Data
- **Diagram ID**: 141039
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    ADD_Update_Insurance_Custom_Data_Def_on_a_custom_data_item_a["{ADD}Update Insurance Custom Data Def on a custom data item adding"]
    Custom_data_tab_Add_Update_Custom_data_definition["Custom data tab : Add/Update Custom data definition"]
    User[/"User"/]
    n_08_508_Remove_Custom_Data_Definition_from_Insurance_progra(("08.508 Remove Custom Data Definition from Insurance program"))
    n_08_506_Set_Custom_Data_Definition_for_Insurance_Program(("08.506 Set Custom Data Definition for Insurance Program"))
    n_08_506_Set_Custom_Data_Definition_for_Insurance_Program -->|unnamed| ADD_Update_Insurance_Custom_Data_Def_on_a_custom_data_item_a
    Custom_data_tab_Add_Update_Custom_data_definition -->|unnamed| n_08_506_Set_Custom_Data_Definition_for_Insurance_Program
    User --> n_08_506_Set_Custom_Data_Definition_for_Insurance_Program
    User --> n_08_508_Remove_Custom_Data_Definition_from_Insurance_progra
```
