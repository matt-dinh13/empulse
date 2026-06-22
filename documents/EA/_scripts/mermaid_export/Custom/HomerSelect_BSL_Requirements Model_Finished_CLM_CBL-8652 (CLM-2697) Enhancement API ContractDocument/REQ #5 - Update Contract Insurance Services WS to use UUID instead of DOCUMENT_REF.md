# REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument
- **Diagram ID**: 126636
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph TD
    Document["Document"]
    GetContractListInsurancesResponse["GetContractListInsurancesResponse"]
    Contract_Insurance_Services["Contract Insurance Services"]
    Contract["Contract"]
    LoanService["LoanService"]
    MOD_08_346_Add_Insurance_service_on_Contract_common["{MOD}08.346 Add Insurance service on Contract common"]
    n_08_454_Terminate_contract_insurance_service["08.454 Terminate contract insurance service"]
    n_08_452_Cancel_contract_insurance_service["08.452 Cancel contract insurance service"]
    MOD_08_347_Add_Insurance_service_on_Contract_service["{MOD}08.347 Add Insurance service on Contract service"]
    REQ_5_Update_Contract_Insurance_Services_WS_to_use_UUID_inst["REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF"]
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| MOD_08_346_Add_Insurance_service_on_Contract_common
    LoanService -->|unnamed| Contract
    LoanService -->|unnamed| Document
    Contract_Insurance_Services -->|unnamed| MOD_08_347_Add_Insurance_service_on_Contract_service
    Contract_Insurance_Services -->|unnamed| n_08_452_Cancel_contract_insurance_service
    Contract_Insurance_Services -->|unnamed| n_08_454_Terminate_contract_insurance_service
    Contract_Insurance_Services -->|unnamed| GetContractListInsurancesResponse
    Contract -->|unnamed| GetContractListInsurancesResponse
```
