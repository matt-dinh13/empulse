# Adding Insurance Service on CEL contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model
- **Diagram ID**: 164519
- **Elements**: 13
- **Connectors**: 14

```mermaid
graph LR
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    MOD_Check_for_an_active_insurance_existence["{MOD}Check for an active insurance existence"]
    v3_proposal_Contract_Insurance_Services_POST_Create_Contract["v3_proposal : Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal"]
    MOD_11_010_Create_insurance_contract(("{MOD}11.010 Create insurance contract"))
    User_Interface_Model_Insurance_Offer_Preview["User Interface Model : Insurance Offer Preview"]
    ADD_Check_Service_Eligibility_for_provided_contract["{ADD}Check Service Eligibility for provided contract"]
    MOD_08_346_Add_Insurance_service_on_Contract_common(("{MOD}08.346 Add Insurance service on Contract common"))
    External_system[/"External system"/]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    MOD_CreateContractInsurance_validations["{MOD}CreateContractInsurance validations"]
    User[/"User"/]
    MOD_08_347_Add_Insurance_service_on_Contract_service(("{MOD}08.347 Add Insurance service on Contract service"))
    n_08_345_Add_Insurance_on_Contract(("08.345 Add Insurance on Contract"))
    User_Interface_Model_Insurance_Offer_Preview -->|unnamed| n_08_345_Add_Insurance_on_Contract
    v3_proposal_Contract_Insurance_Services_POST_Create_Contract -->|unnamed| MOD_08_347_Add_Insurance_service_on_Contract_service
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| MOD_CreateContractInsurance_validations
    n_08_345_Add_Insurance_on_Contract -->|unnamed| Get_Service_definition_from_Services
    MOD_Check_for_an_active_insurance_existence -->|unnamed| Get_Service_definition_from_Services
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| Get_Service_definition_from_Services
    MOD_08_347_Add_Insurance_service_on_Contract_service -.->|include| MOD_08_346_Add_Insurance_service_on_Contract_common
    n_08_345_Add_Insurance_on_Contract -.->|include| MOD_08_346_Add_Insurance_service_on_Contract_common
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| ADD_Check_Service_Eligibility_for_provided_contract
    MOD_08_346_Add_Insurance_service_on_Contract_common -.->|include| MOD_11_010_Create_insurance_contract
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| MOD_Check_for_an_active_insurance_existence
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    User --> n_08_345_Add_Insurance_on_Contract
    External_system --> MOD_08_347_Add_Insurance_service_on_Contract_service
```
