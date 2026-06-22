# Acceptation Insurance Service on CEL contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model
- **Diagram ID**: 164521
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph LR
    n_11_110_Cancel_insurance_contract(("11.110 Cancel insurance contract"))
    ADD_Accept_ContractInsuranceService_validations["{ADD}Accept ContractInsuranceService validations"]
    Allowed_contract_statuses_for_insurance_activation["Allowed contract statuses for insurance activation"]
    v3_proposal_Contract_Insurance_Services_PUT_Accept_Contract_["v3_proposal : Contract Insurance Services - PUT: Accept Contract Insurance Service v3_proposal"]
    External_system[/"External system"/]
    MOD_08_350_Accept_Contract_Insurance_Service(("{MOD}08.350 Accept Contract Insurance Service"))
    n_11_020_Add_insurance_period(("11.020 Add insurance period"))
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    MOD_08_350_Accept_Contract_Insurance_Service -.->|include| n_11_040_Activate_insurance_contract
    MOD_08_350_Accept_Contract_Insurance_Service -.->|include| n_11_020_Add_insurance_period
    v3_proposal_Contract_Insurance_Services_PUT_Accept_Contract_ -->|unnamed| MOD_08_350_Accept_Contract_Insurance_Service
    ADD_Accept_ContractInsuranceService_validations -->|unnamed| Allowed_contract_statuses_for_insurance_activation
    MOD_08_350_Accept_Contract_Insurance_Service -->|unnamed| ADD_Accept_ContractInsuranceService_validations
    MOD_08_350_Accept_Contract_Insurance_Service -.->|include| n_11_110_Cancel_insurance_contract
    External_system --> MOD_08_350_Accept_Contract_Insurance_Service
```
