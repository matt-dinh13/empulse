# CLM-1147 (CBL-2581) E-wallet - Update Disbursement service

```mermaid
graph TD
    ContractWS_ContractWS_GetContractForDisbursement["ContractWS : ContractWS - GetContractForDisbursement"]
    REQ_1_Extend_GetContractForDisbursement_with_Partner_name_an["REQ #1 - Extend GetContractForDisbursement  with Partner name and Partner branch name."]
    n_01_771_Get_contracts_for_disbursement_service["01.771 Get contracts for disbursement service"]
    ContractWS_ContractWS_GetContractForDisbursement -->|unnamed| REQ_1_Extend_GetContractForDisbursement_with_Partner_name_an
```
