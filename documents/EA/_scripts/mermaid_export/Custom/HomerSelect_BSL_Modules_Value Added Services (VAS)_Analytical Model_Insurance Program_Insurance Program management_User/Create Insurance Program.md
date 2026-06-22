# Create Insurance Program

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model
- **Diagram ID**: 135209
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    Set_main_Insurance_Program_properties["Set main Insurance Program properties"]
    n_08_525_Create_Insurance_Program_by_copy["08.525 Create Insurance Program by copy"]
    n_08_520_Create_Insurance_Program["08.520 Create Insurance Program"]
    Insured_subject_type["Insured subject type"]
    Cancel["Cancel"]
    OK["OK"]
    Insurance_program_code["Insurance program code"]
    Create_Insurance_program["Create Insurance program"]
    Create_Insurance_program -->|unnamed| n_08_520_Create_Insurance_Program
    Create_Insurance_program -->|unnamed| n_08_525_Create_Insurance_Program_by_copy
    Create_Insurance_program -->|unnamed| Set_main_Insurance_Program_properties
```
