# CBL-4968 (CLM-1779) Extension of Self-Care API GetContractListInsurances by Custom data attributes

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4968 (CLM-1779) Extension of Self-Care API GetContractListInsurances by Custom data attributes
- **Diagram ID**: 113129
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Logical_Data_Model_Insurance_Contract["Logical Data Model : Insurance Contract"]
    REQ_1_Extension_of_API_GetContractListInsurances_by_Custom_d["REQ#1 - Extension of API GetContractListInsurances by Custom data attributes"]
    MOD_01_772_Get_contract_list_insurances_for_self_care["{MOD}01.772 Get contract list insurances for self-care"]
    Contract_Insurance_Services_Contract_Insurance_Services_GET_["Contract Insurance Services : Contract Insurance Services - GET: Contract list Insurances"]
    Contract_Insurance_Services_Contract_Insurance_Services_GET_ -->|unnamed| MOD_01_772_Get_contract_list_insurances_for_self_care
    REQ_1_Extension_of_API_GetContractListInsurances_by_Custom_d -->|unnamed| Contract_Insurance_Services_Contract_Insurance_Services_GET_
    MOD_01_772_Get_contract_list_insurances_for_self_care -->|unnamed| Logical_Data_Model_Insurance_Contract
```
