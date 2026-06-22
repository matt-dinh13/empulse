# Process Account Closure notification - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model
- **Diagram ID**: 163702
- **Elements**: 7
- **Connectors**: 12

```mermaid
graph LR
    n_08_050_Cancel_Loan_Service_method_COS(("08.050 Cancel Loan Service method (COS)"))
    n_08_040_Terminate_Loan_Service_COS(("08.040 Terminate Loan Service (COS)"))
    n_08_030_Deactivate_Loan_Service_method_COS(("08.030 Deactivate Loan Service method (COS)"))
    AM[/"AM"/]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    n_08_218_Process_Account_Closure_notifications(("08.218 Process Account Closure notifications"))
    AM --- n_08_218_Process_Account_Closure_notifications
    n_08_218_Process_Account_Closure_notifications -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_030_Deactivate_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_040_Terminate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_050_Cancel_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_030_Deactivate_Loan_Service_method_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_040_Terminate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_218_Process_Account_Closure_notifications -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_218_Process_Account_Closure_notifications -.->|include| n_08_030_Deactivate_Loan_Service_method_COS
    n_08_218_Process_Account_Closure_notifications -.->|include| n_08_040_Terminate_Loan_Service_COS
    n_08_218_Process_Account_Closure_notifications -.->|include| n_08_050_Cancel_Loan_Service_method_COS
```
