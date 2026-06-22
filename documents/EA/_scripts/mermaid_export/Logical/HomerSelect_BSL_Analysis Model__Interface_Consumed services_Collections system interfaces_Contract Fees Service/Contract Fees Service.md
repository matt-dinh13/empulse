# Contract Fees Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces/Contract Fees Service
- **Diagram ID**: 63976
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class n_01_478_Show_supposed_debt_for_CEL_contract["01.478 Show supposed debt for CEL contract"]
    class ContractFeesRespStatus["ContractFeesRespStatus"]
    class ContractFeeItem["ContractFeeItem"]
    class ContractFeesResp["ContractFeesResp"]
    class ContractFeesReq["ContractFeesReq"]
    class contractFeesResponse["contractFeesResponse"]
    class contractFees["contractFees"]
    class ContractFeesService["ContractFeesService"]
    ContractFeesService ..> contractFees : unnamed
    ContractFeesService ..> contractFeesResponse : unnamed
    contractFees ..> ContractFeesReq : unnamed
    contractFeesResponse ..> ContractFeesResp : unnamed
    ContractFeesResp ..> ContractFeeItem : unnamed
    ContractFeesResp ..> ContractFeesRespStatus : unnamed
```
