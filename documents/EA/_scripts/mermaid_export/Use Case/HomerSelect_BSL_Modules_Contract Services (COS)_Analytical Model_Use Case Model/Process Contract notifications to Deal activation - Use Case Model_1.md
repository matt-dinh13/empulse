# Process Contract notifications to Deal activation - Use Case Model

```mermaid
graph TD
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    n_08_020_Activate_Loan_Service_COS["08.020 Activate Loan Service (COS)"]
    BSL["BSL"]
    n_08_200_Process_Contract_notifications_to_Deal_activation["08.200 Process Contract notifications to Deal activation"]
    BSL -->|unnamed| n_08_200_Process_Contract_notifications_to_Deal_activation
    n_08_200_Process_Contract_notifications_to_Deal_activation -->|unnamed| n_08_020_Activate_Loan_Service_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_200_Process_Contract_notifications_to_Deal_activation -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_020_Activate_Loan_Service_COS -->|unnamed| Get_Service_definition_from_Services_COS
    n_08_200_Process_Contract_notifications_to_Deal_activation -->|unnamed| Get_Service_definition_from_Services_COS
```
