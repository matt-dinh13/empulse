# Contract Service replacement (flip)

```mermaid
graph TD
    n_01_782_Replace_Contract_Service["01.782 Replace Contract Service"]
    Contract_Service_replacement_validation["Contract Service replacement validation"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    User["User"]
    n_08_085_Replace_Contract_Service_manually["08.085 Replace Contract Service manually"]
    External_system["External system"]
    Get_Service_list_of_a_Service_Type["Get Service list of a Service Type"]
    Check_Account_status_by_account_number_from_AM["Check Account status by account number from AM"]
    Contract_Isurance_Service_update_on_the_replacement["Contract Isurance Service update on the replacement"]
    User_Interface_Replace_service["User Interface : Replace service"]
    Get_initial_Contract_service_status["Get initial Contract service status"]
    Contract_Services_Contract_Services_POST_replace_contract_se["Contract Services : Contract Services - POST replace contract service"]
    Contract_Service_replacement_validation -->|unnamed| Check_Account_status_by_account_number_from_AM
    User_Interface_Replace_service -->|unnamed| n_08_085_Replace_Contract_Service_manually
    Contract_Services_Contract_Services_POST_replace_contract_se -->|unnamed| n_01_782_Replace_Contract_Service
```
