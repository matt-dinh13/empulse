# Tab Custom Data

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Custom Data/User Interface
- **Diagram ID**: 69517
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph TD
    User_Interface_Custom_Data_Set["User Interface : Custom Data - Set"]
    n_08_560_Show_Insurance_Program_version_detail["08.560 Show Insurance Program version detail"]
    n_08_508_Remove_Custom_Data_Definition_from_Insurance_progra["08.508 Remove Custom Data Definition from Insurance program"]
    n_08_506_Set_Custom_Data_Definition_for_Insurance_Program["08.506 Set Custom Data Definition for Insurance Program"]
    Add_Custom_Data["Add Custom Data"]
    Custom_Data["Custom Data"]
    Custom_Data["Custom Data"]
    Add_Custom_Data -->|unnamed| n_08_506_Set_Custom_Data_Definition_for_Insurance_Program
    Custom_Data -->|unnamed| n_08_506_Set_Custom_Data_Definition_for_Insurance_Program
    Custom_Data -->|unnamed| n_08_508_Remove_Custom_Data_Definition_from_Insurance_progra
    Custom_Data -->|unnamed| n_08_560_Show_Insurance_Program_version_detail
    Custom_Data -->|unnamed| User_Interface_Custom_Data_Set
    Add_Custom_Data -->|unnamed| User_Interface_Custom_Data_Set
```
