# ContractWS - GetContracts by CUID

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS
- **Diagram ID**: 159593
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class n_01_750_Get_contracts_by_client["01.750 Get contracts by client"]
    class ProductCategoryDto["ProductCategoryDto"]
    class MoneyDto["MoneyDto"]
    class GetContractsResponse["GetContractsResponse"]
    class GetContractsRequest["GetContractsRequest"]
    class ContractInfoDto["ContractInfoDto"]
    class MOD_ContractWS["(MOD)ContractWS"]
    GetContractsResponse ..> ContractInfoDto : unnamed
    MOD_ContractWS ..> GetContractsRequest : unnamed
    MOD_ContractWS ..> GetContractsResponse : unnamed
    MOD_ContractWS ..> n_01_750_Get_contracts_by_client : unnamed
    MOD_ContractWS ..> n_01_750_Get_contracts_by_client : unnamed
    ContractInfoDto --> ProductCategoryDto : unnamed
    ContractInfoDto ..> MoneyDto : unnamed
```
