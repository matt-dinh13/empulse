# CLM-531 (CBL-445) Extension of ContractWS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-531 (CBL-445) Extension of ContractWS
- **Diagram ID**: 103251
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    Use_case_model_Provide_contract_information["Use case model : Provide contract information"]
    ContractWS_ContractWS_GetContractForDisbursement["ContractWS : ContractWS - GetContractForDisbursement"]
    REQ_1_System_provides_a_web_service_to_support_getting_of_ou["REQ#1 - System provides a web service to support getting of outgoing payment status by external system."]
    ContractWS_ContractWS_GetContractForDisbursement -->|unnamed| REQ_1_System_provides_a_web_service_to_support_getting_of_ou
    Use_case_model_Provide_contract_information -->|unnamed| REQ_1_System_provides_a_web_service_to_support_getting_of_ou
```
