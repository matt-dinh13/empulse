# CBL-2967 (CLM-2133) Serial number validation post contract signing for Home appliances

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2967 (CLM-2133) Serial number validation post contract signing for Home appliances
- **Diagram ID**: 101258
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph TD
    UseCase_Model_Cancel_contract_automatically_Use_case_diagram["UseCase Model : Cancel contract automatically - Use case diagram"]
    UseCase_Model_Contract_registration["UseCase Model : Contract registration"]
    Access_Rights_Access_Rights["Access Rights : Access Rights"]
    UseCase_Model_Manage_contract_commodities["UseCase Model : Manage contract commodities"]
    ValidateCommodityData_DEL_ValidateCommodityData["ValidateCommodityData :{DEL}ValidateCommodityData"]
    Interface_Provided_DEL_CommodityWS["Interface Provided :{DEL}CommodityWS"]
    Tab_Commodity_Tab_Commodity["Tab-Commodity : Tab-Commodity"]
    REQ_2_Automatic_cancelation_signed_contract_with_not_validat["REQ#2 Automatic cancelation signed contract with not validated commodity"]
    REQ_1_Commodity_validation_after_sign_and_prior_to_registrat["REQ#1 Commodity validation after sign and prior to registration."]
    Serial_number_validation_post_contract_signing_for_Home_appl["Serial number validation post contract signing for Home appliances."]
    REQ_2_Automatic_cancelation_signed_contract_with_not_validat -->|unnamed| Serial_number_validation_post_contract_signing_for_Home_appl
    REQ_1_Commodity_validation_after_sign_and_prior_to_registrat -->|unnamed| Serial_number_validation_post_contract_signing_for_Home_appl
    UseCase_Model_Contract_registration -->|unnamed| REQ_1_Commodity_validation_after_sign_and_prior_to_registrat
    Access_Rights_Access_Rights -->|unnamed| REQ_1_Commodity_validation_after_sign_and_prior_to_registrat
    UseCase_Model_Manage_contract_commodities -->|unnamed| REQ_1_Commodity_validation_after_sign_and_prior_to_registrat
    ValidateCommodityData_DEL_ValidateCommodityData -->|unnamed| REQ_1_Commodity_validation_after_sign_and_prior_to_registrat
    Interface_Provided_DEL_CommodityWS -->|unnamed| REQ_1_Commodity_validation_after_sign_and_prior_to_registrat
    Tab_Commodity_Tab_Commodity -->|unnamed| REQ_1_Commodity_validation_after_sign_and_prior_to_registrat
    UseCase_Model_Cancel_contract_automatically_Use_case_diagram -->|unnamed| REQ_2_Automatic_cancelation_signed_contract_with_not_validat
```
