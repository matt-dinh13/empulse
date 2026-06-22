# Photo component

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Photo component/UseCase Model
- **Diagram ID**: 147371
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    diagram_41CF2AFC_483D_491f_91BE_C06F170F5460["$diagram://{41CF2AFC-483D-491f-91BE-C06F170F5460}"]
    Second_block_of_data_Fill_in_application_2SP_2BoD["Second block of data : Fill in application - 2SP - 2BoD"]
    First_block_of_data_Fill_in_application_2SP_1BoD["First block of data : Fill in application - 2SP - 1BoD"]
    User_Interface_Model_Fill_in_application_1SP["User Interface Model : Fill in application - 1SP"]
    n_01_083_Fill_in_application_2BoD(("01.083 Fill in application - 2BoD"))
    MOD_01_082_Fill_in_application_1BoD(("{MOD}01.082 Fill in application - 1BoD"))
    MOD_01_081_Fill_in_application_1SP(("{MOD}01.081 Fill in application - 1SP"))
    User[/"User"/]
    n_01_085_Capture_Photo(("01.085 Capture Photo"))
    User_Interface_Model_Fill_in_application_1SP -->|unnamed| MOD_01_081_Fill_in_application_1SP
    First_block_of_data_Fill_in_application_2SP_1BoD -->|unnamed| MOD_01_082_Fill_in_application_1BoD
    Second_block_of_data_Fill_in_application_2SP_2BoD -->|unnamed| n_01_083_Fill_in_application_2BoD
    n_01_085_Capture_Photo -->|unnamed| diagram_41CF2AFC_483D_491f_91BE_C06F170F5460
    User --- n_01_085_Capture_Photo
    User --- n_01_083_Fill_in_application_2BoD
    User --- MOD_01_082_Fill_in_application_1BoD
    User --> MOD_01_081_Fill_in_application_1SP
```
