# Adding Insurance Service on REL contract method

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model
- **Diagram ID**: 164518
- **Elements**: 11
- **Connectors**: 11

```mermaid
graph LR
    MOD_11_010_Create_insurance_contract(("{MOD}11.010 Create insurance contract"))
    User[/"User"/]
    n_08_345_Add_Insurance_on_Contract(("08.345 Add Insurance on Contract"))
    MOD_08_346_Add_Insurance_service_on_Contract_common(("{MOD}08.346 Add Insurance service on Contract common"))
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    Allowed_contract_statuses_for_insurance_activation["Allowed contract statuses for insurance activation"]
    MOD_CreateContractInsurance_validations["{MOD}CreateContractInsurance validations"]
    Contract_Insurance_Services_Contract_Insurance_Services_POST["Contract Insurance Services : Contract Insurance Services - POST: Contract Insurance Service"]
    External_system[/"External system"/]
    MOD_08_347_Add_Insurance_service_on_Contract_service(("{MOD}08.347 Add Insurance service on Contract service"))
    Contract_Insurance_Services_Contract_Insurance_Services_POST -->|unnamed| MOD_08_347_Add_Insurance_service_on_Contract_service
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| MOD_CreateContractInsurance_validations
    MOD_CreateContractInsurance_validations -->|unnamed| Allowed_contract_statuses_for_insurance_activation
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    n_08_345_Add_Insurance_on_Contract -->|unnamed| Get_Service_definition_from_Services
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| Get_Service_definition_from_Services
    MOD_08_347_Add_Insurance_service_on_Contract_service -.->|include| MOD_08_346_Add_Insurance_service_on_Contract_common
    n_08_345_Add_Insurance_on_Contract -.->|include| MOD_08_346_Add_Insurance_service_on_Contract_common
    MOD_08_346_Add_Insurance_service_on_Contract_common -.->|include| MOD_11_010_Create_insurance_contract
    User --> n_08_345_Add_Insurance_on_Contract
    External_system --> MOD_08_347_Add_Insurance_service_on_Contract_service
```
