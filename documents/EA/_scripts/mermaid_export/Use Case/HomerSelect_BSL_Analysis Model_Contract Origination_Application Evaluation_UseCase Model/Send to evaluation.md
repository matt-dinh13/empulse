# Send to evaluation

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/UseCase Model
- **Diagram ID**: 158276
- **Elements**: 11
- **Connectors**: 12

```mermaid
graph LR
    External_Reference["External Reference"]
    External_Reference["External Reference"]
    n_01_162_Preparation_of_LAP_vector(("01.162 Preparation of LAP vector"))
    Getting_LAP_vector_data_from_other_modules["Getting LAP vector data from other modules"]
    n_01_161_Send_to_clients_evaluation(("01.161 Send to clients evaluation"))
    MOD_Structure_of_LAP_vector["{MOD}Structure of LAP vector"]
    BSL["BSL"]
    LAP[/"LAP"/]
    n_01_152_Send_to_offer_evaluation(("01.152 Send to offer evaluation"))
    n_01_151_Send_to_preliminary_evaluation(("01.151 Send to preliminary evaluation"))
    n_01_150_Send_to_application_evaluation(("01.150 Send to application evaluation"))
    n_01_150_Send_to_application_evaluation -.->|include| n_01_162_Preparation_of_LAP_vector
    n_01_150_Send_to_application_evaluation --- LAP
    n_01_151_Send_to_preliminary_evaluation -.->|include| n_01_162_Preparation_of_LAP_vector
    n_01_151_Send_to_preliminary_evaluation --- LAP
    n_01_152_Send_to_offer_evaluation -.->|include| n_01_162_Preparation_of_LAP_vector
    n_01_152_Send_to_offer_evaluation --- LAP
    n_01_161_Send_to_clients_evaluation -.->|include| n_01_162_Preparation_of_LAP_vector
    Getting_LAP_vector_data_from_other_modules -->|unnamed| MOD_Structure_of_LAP_vector
    n_01_162_Preparation_of_LAP_vector -->|unnamed| Getting_LAP_vector_data_from_other_modules
    n_01_162_Preparation_of_LAP_vector -->|unnamed| MOD_Structure_of_LAP_vector
    External_Reference -->|External Reference| n_01_162_Preparation_of_LAP_vector
    LAP --> n_01_161_Send_to_clients_evaluation
```
