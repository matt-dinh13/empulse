# Insurance Service Offers API - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model
- **Diagram ID**: 164517
- **Elements**: 21
- **Connectors**: 25

```mermaid
graph LR
    v3_Contract_Insurance_Services_POST_Contract_Insurance_Servi["v3 : Contract Insurance Services - POST: Contract Insurance Service v3"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    Determine_first_insurance_period["Determine first insurance period"]
    v3_Contract_Insurance_Services_PUT_Accept_Contract_Insurance["v3 : Contract Insurance Services - PUT: Accept Contract Insurance Service v3"]
    Logical_Data_Model_LSR_Insurance_Offer_Logical_Data_Model["Logical Data Model : LSR.Insurance Offer - Logical Data Model"]
    MOD_08_347_Add_Insurance_service_on_Contract_service(("{MOD}08.347 Add Insurance service on Contract service"))
    MOD_08_350_Accept_Contract_Insurance_Service(("{MOD}08.350 Accept Contract Insurance Service"))
    n_08_348_Calculate_Insurance_offer_parameters(("08.348 Calculate Insurance offer parameters"))
    Check_INSR_Insurance_Program_eligibility["Check INSR Insurance Program eligibility"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    MOD_08_349_Generate_Insurance_offer_preview(("{MOD}08.349 Generate Insurance offer preview"))
    MOD_Check_for_an_active_insurance_existence["{MOD}Check for an active insurance existence"]
    v3_Contract_Insurance_Services_GET_Insurance_Service_Offers_["v3 : Contract Insurance Services - GET: Insurance Service Offers v3"]
    ADD_Check_Service_Eligibility_for_provided_contract["{ADD}Check Service Eligibility for provided contract"]
    Allowed_contract_statuses_for_insurance_activation["Allowed contract statuses for insurance activation"]
    Insurance_Services_Insurance_Services_GET_Insurance_Service_["Insurance Services : Insurance Services - GET: Insurance Service Offer"]
    GetInsuranceServiceOffers_validations["GetInsuranceServiceOffers validations"]
    Service_Exclusivity_Check["Service Exclusivity Check"]
    External_system[/"External system"/]
    n_08_344_Generate_insurance_offers_for_contract(("08.344 Generate insurance offers for contract"))
    n_08_342_Get_contract_insurance_offers_service(("08.342 Get contract insurance offers service"))
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| MOD_Check_for_an_active_insurance_existence
    n_08_348_Calculate_Insurance_offer_parameters -->|unnamed| Determine_first_insurance_period
    Logical_Data_Model_LSR_Insurance_Offer_Logical_Data_Model -->|unnamed| MOD_08_347_Add_Insurance_service_on_Contract_service
    v3_Contract_Insurance_Services_POST_Contract_Insurance_Servi -->|unnamed| MOD_08_347_Add_Insurance_service_on_Contract_service
    v3_Contract_Insurance_Services_PUT_Accept_Contract_Insurance -->|unnamed| MOD_08_350_Accept_Contract_Insurance_Service
    MOD_08_349_Generate_Insurance_offer_preview -.->|include| n_08_348_Calculate_Insurance_offer_parameters
    n_08_344_Generate_insurance_offers_for_contract -->|unnamed| Check_INSR_Insurance_Program_eligibility
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| Get_Service_definition_from_Services
    MOD_Check_for_an_active_insurance_existence -->|unnamed| Get_Service_definition_from_Services
    n_08_348_Calculate_Insurance_offer_parameters -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
    v3_Contract_Insurance_Services_GET_Insurance_Service_Offers_ -->|unnamed| n_08_342_Get_contract_insurance_offers_service
    MOD_08_349_Generate_Insurance_offer_preview -->|unnamed| MOD_Check_for_an_active_insurance_existence
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| ADD_Check_Service_Eligibility_for_provided_contract
    n_08_344_Generate_insurance_offers_for_contract -->|unnamed| ADD_Check_Service_Eligibility_for_provided_contract
    GetInsuranceServiceOffers_validations -->|unnamed| Allowed_contract_statuses_for_insurance_activation
    MOD_08_349_Generate_Insurance_offer_preview -->|unnamed| Allowed_contract_statuses_for_insurance_activation
    n_08_342_Get_contract_insurance_offers_service -->|unnamed| GetInsuranceServiceOffers_validations
    n_08_344_Generate_insurance_offers_for_contract -->|unnamed| Service_Exclusivity_Check
    n_08_342_Get_contract_insurance_offers_service -.->|include| n_08_344_Generate_insurance_offers_for_contract
    Insurance_Services_Insurance_Services_GET_Insurance_Service_ -->|unnamed| n_08_342_Get_contract_insurance_offers_service
    MOD_08_349_Generate_Insurance_offer_preview -->|unnamed| Get_Service_definition_from_Services
    External_system --> MOD_08_349_Generate_Insurance_offer_preview
    External_system --> MOD_08_350_Accept_Contract_Insurance_Service
    External_system --> MOD_08_347_Add_Insurance_service_on_Contract_service
    External_system --> n_08_342_Get_contract_insurance_offers_service
```
