# ContractWS - GetContractList method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS
- **Diagram ID**: 159588
- **Elements**: 11
- **Connectors**: 11

```mermaid
classDiagram
    class MoneyDto["MoneyDto"]
    class External_system["External system"]
    class MOD_01_753_Get_contract_list["{MOD}01.753 Get contract list"]
    class ContractFound["ContractFound"]
    class GetContractListResponse["GetContractListResponse"]
    class CreditType["CreditType"]
    class InitialTransactionType["InitialTransactionType"]
    class ContractStatusType["ContractStatusType"]
    class ContractFilter["ContractFilter"]
    class GetContractListRequest["GetContractListRequest"]
    class MOD_ContractWS["(MOD)ContractWS"]
    MOD_ContractWS ..> GetContractListResponse : unnamed
    GetContractListResponse ..> ContractFound : unnamed
    MOD_ContractWS ..> MOD_01_753_Get_contract_list : unnamed
    MOD_ContractWS ..> GetContractListRequest : unnamed
    GetContractListRequest ..> ContractFilter : unnamed
    ContractFilter ..> ContractStatusType : unnamed
    ContractFound ..> CreditType : unnamed
    ContractFound ..> MoneyDto : unnamed
    ContractFilter ..> CreditType : unnamed
    ContractFilter ..> InitialTransactionType : unnamed
    External_system --> MOD_01_753_Get_contract_list : unnamed
```
