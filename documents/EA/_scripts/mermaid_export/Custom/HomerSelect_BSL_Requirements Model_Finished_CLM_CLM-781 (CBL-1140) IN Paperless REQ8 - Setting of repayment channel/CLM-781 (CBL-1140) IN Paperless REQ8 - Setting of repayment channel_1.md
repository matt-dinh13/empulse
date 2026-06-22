# CLM-781 (CBL-1140) IN Paperless REQ8 - Setting of repayment channel

```mermaid
graph TD
    Contract_Direct_Debit_Mandate_ContractDDMWS_GetContractDDMLi["Contract Direct Debit Mandate : ContractDDMWS - GetContractDDMList"]
    REQ_1_Change_repayment_channel["REQ #1 - Change repayment channel"]
    ContractOperationWS_ContractOperationWS_ChangeContractRepaym["ContractOperationWS : ContractOperationWS - ChangeContractRepaymentChannel"]
    ContractOperationWS_ContractOperationWS_ChangeContractRepaym -->|unnamed| REQ_1_Change_repayment_channel
```
