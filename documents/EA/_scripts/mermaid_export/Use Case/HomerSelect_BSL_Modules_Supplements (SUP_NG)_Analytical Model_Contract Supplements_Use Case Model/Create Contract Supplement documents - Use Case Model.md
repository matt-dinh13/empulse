# Create Contract Supplement documents - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model
- **Diagram ID**: 163941
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph LR
    Logical_Data_Model_Contract_Supplement_Logical_Data_Model["Logical Data Model : Contract Supplement - Logical Data Model"]
    Change_status_of_Contract_Supplement_SUP["Change status of Contract Supplement (SUP)"]
    Create_Contract_Supplement_Documents_Create_Contract_Supplem["Create Contract Supplement Documents : Create Contract Supplement Documents"]
    Get_client_documents_needed_to_service_request_SUP["Get client documents needed to service request (SUP)"]
    Get_Documents_required_for_Contract_Supplement["Get Documents required for Contract Supplement"]
    n_13_200_Generate_Contract_Supplement_Documents(("13.200 Generate Contract Supplement Documents"))
    External_system[/"External system"/]
    n_13_030_Create_Document_to_Contract_Supplement(("13.030 Create Document to Contract Supplement"))
    Create_Contract_Supplement_Documents_Create_Contract_Supplem -->|unnamed| n_13_030_Create_Document_to_Contract_Supplement
    External_system --- n_13_030_Create_Document_to_Contract_Supplement
    n_13_030_Create_Document_to_Contract_Supplement -.->|include| n_13_200_Generate_Contract_Supplement_Documents
    n_13_200_Generate_Contract_Supplement_Documents -->|unnamed| Get_Documents_required_for_Contract_Supplement
    n_13_200_Generate_Contract_Supplement_Documents -->|unnamed| Get_client_documents_needed_to_service_request_SUP
    n_13_030_Create_Document_to_Contract_Supplement -->|unnamed| Change_status_of_Contract_Supplement_SUP
```
