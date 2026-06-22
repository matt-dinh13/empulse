# CSI-608 Adding InsuranceProgram identifier into InsuranceContract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- **Diagram ID**: 135395
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    MOD_11_010_Create_insurance_contract["{MOD}11.010 Create insurance contract"]
    MOD_01_186_Prepare_documentation["{MOD}01.186 Prepare documentation"]
    Copy_chosen_offer_financial_parameters_to_contract["Copy chosen offer financial parameters to contract"]
    Create_insurance_contracts_for_insurance_services["Create insurance contracts for insurance services"]
    n_11_780_Process_Insurance_cancellation_or_termination_event["11.780 Process Insurance cancellation or termination event"]
    MOD_08_346_Add_Insurance_service_on_Contract_common["{MOD}08.346 Add Insurance service on Contract common"]
    REQ_2_Migration_of_Insurance_Program_externalId_to_Insurance["REQ #2 - Migration of Insurance Program externalId to Insurance Program"]
    Insurance_Contract["Insurance Contract"]
    REQ_1_Adding_InsuranceProgram_identifier_into_InsuranceContr["REQ #1 - Adding InsuranceProgram identifier into InsuranceContract"]
    n_11_780_Process_Insurance_cancellation_or_termination_event -->|unnamed| MOD_11_010_Create_insurance_contract
    MOD_08_346_Add_Insurance_service_on_Contract_common -->|unnamed| MOD_11_010_Create_insurance_contract
    MOD_01_186_Prepare_documentation -->|unnamed| Create_insurance_contracts_for_insurance_services
    Create_insurance_contracts_for_insurance_services -->|unnamed| MOD_11_010_Create_insurance_contract
```
