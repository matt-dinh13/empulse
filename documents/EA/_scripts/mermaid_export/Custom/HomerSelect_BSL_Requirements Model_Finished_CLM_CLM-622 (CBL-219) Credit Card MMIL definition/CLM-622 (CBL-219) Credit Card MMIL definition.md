# CLM-622 (CBL-219) Credit Card MMIL definition

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-622 (CBL-219) Credit Card MMIL definition
- **Diagram ID**: 103277
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    Use_case_model_Provide_contract_information["Use case model : Provide contract information"]
    MOD_01_754_Get_contract_detail["{MOD}01.754 Get contract detail"]
    ContractWS_ContractWS_GetContractList_method["ContractWS : ContractWS - GetContractList method"]
    ContractWS_ContractWS_GetContractDetail_method["ContractWS : ContractWS - GetContractDetail method"]
    REQ_1_Extension_of_GetContractDetail_method["REQ#1 Extension of GetContractDetail method"]
    ContractWS_ContractWS_GetContractDetail_method -->|unnamed| REQ_1_Extension_of_GetContractDetail_method
```
