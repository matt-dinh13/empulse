# CBL-6448 (CLM-2058) New Web Service for Contract Validation in OCTOPUS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6448 (CLM-2058) New Web Service for Contract Validation in OCTOPUS
- **Diagram ID**: 119737
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Contract_ContractAccount_GET_ContractAccountOverview["Contract :ContractAccount - GET ContractAccountOverview"]
    ContractWS_ContractWS_GetContracts_by_CUID_2["ContractWS : ContractWS - GetContracts by CUID 2"]
    ContractWS_ContractWS_GetPersonCUIDByContract_method["ContractWS : ContractWS - GetPersonCUIDByContract method"]
    REQ_1_New_REST_service_for_getting_contract_account_data["REQ #1 - New REST service for getting contract account data"]
    The_current_OPTOCUS_calling["The current OPTOCUS calling"]
    ContractWS_ContractWS_GetContracts_by_CUID_2 -->|unnamed| REQ_1_New_REST_service_for_getting_contract_account_data
    ContractWS_ContractWS_GetPersonCUIDByContract_method -->|unnamed| REQ_1_New_REST_service_for_getting_contract_account_data
    Contract_ContractAccount_GET_ContractAccountOverview -->|unnamed| REQ_1_New_REST_service_for_getting_contract_account_data
```
