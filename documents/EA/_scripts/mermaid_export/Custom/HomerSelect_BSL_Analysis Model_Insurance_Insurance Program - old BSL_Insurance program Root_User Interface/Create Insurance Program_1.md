# Create Insurance Program

```mermaid
graph TD
    ADD_Insured_subject_type["{ADD}Insured subject type"]
    User_Interface_Set_main_Insurance_Program_properties["User Interface : Set main Insurance Program properties"]
    n_08_525_Create_Insurance_Program_by_copy["08.525 Create Insurance Program by copy"]
    n_08_520_Create_Insurance_Program["08.520 Create Insurance Program"]
    Cancel["Cancel"]
    OK["OK"]
    Insurance_program_code["Insurance program code"]
    Create_Insurance_program["Create Insurance program"]
    Create_Insurance_program -->|unnamed| n_08_520_Create_Insurance_Program
    Create_Insurance_program -->|unnamed| n_08_525_Create_Insurance_Program_by_copy
    OK -->|unnamed| User_Interface_Set_main_Insurance_Program_properties
```
