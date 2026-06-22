# Get Account Contract Service Role - Use Case Model

```mermaid
graph TD
    Contract_Services_ADD_Get_Account_Contract_Service_Roles_COS["Contract Services : {ADD}Get Account Contract Service Roles (COS)"]
    Get_Service_definition_from_Services_COS["Get Service definition from Services (COS)"]
    Get_Service_definition_from_New_Service_Catalogue_COS["Get Service definition from New Service Catalogue (COS)"]
    n_08_114_Get_Account_Contract_Service_Role_COS["08.114 Get Account Contract Service Role (COS)"]
    External_System["External System"]
    n_08_114_Get_Account_Contract_Service_Role_COS -->|unnamed| External_System
    Contract_Services_ADD_Get_Account_Contract_Service_Roles_COS -->|unnamed| n_08_114_Get_Account_Contract_Service_Role_COS
    n_08_114_Get_Account_Contract_Service_Role_COS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue_COS
    n_08_114_Get_Account_Contract_Service_Role_COS -->|unnamed| Get_Service_definition_from_Services_COS
```
