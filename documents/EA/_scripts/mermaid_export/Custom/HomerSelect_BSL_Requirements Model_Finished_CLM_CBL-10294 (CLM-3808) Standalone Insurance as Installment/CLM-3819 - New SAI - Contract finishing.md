# CLM-3819 - New SAI - Contract finishing

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment
- **Diagram ID**: 144841
- **Elements**: 10
- **Connectors**: 2

```mermaid
graph TD
    MOD_01_714_Process_contract_registering_and_finishing["{MOD}01.714 Process contract registering and finishing"]
    DEL_01_252_Evaluate_Contract_Service_Parameters["{DEL}01.252 Evaluate Contract Service Parameters"]
    MOD_01_715_Finish_contract_automatically["{MOD}01.715 Finish contract automatically"]
    MOD_01_700_Choose_contracts_suitable_to_finishing["{MOD}01.700 Choose contracts suitable to finishing"]
    MOD_01_279_Choose_contracts_suitable_to_registration_and_fin["{MOD}01.279 Choose contracts suitable to registration and finishing"]
    n_01_710_Process_contracts_to_finishing["01.710 Process contracts to finishing"]
    DEL_01_712_Finish_contract_on_service_execution["{DEL}01.712 Finish contract on service execution"]
    MOD_Finish_contract["{MOD}Finish contract"]
    MOD_Business_type_of_loan["{MOD}Business type of loan"]
    n_01_730_Finish_contract_manually["01.730 Finish contract manually"]
    n_01_730_Finish_contract_manually -->|unnamed| MOD_Business_type_of_loan
    MOD_Finish_contract -->|unnamed| n_01_730_Finish_contract_manually
```
