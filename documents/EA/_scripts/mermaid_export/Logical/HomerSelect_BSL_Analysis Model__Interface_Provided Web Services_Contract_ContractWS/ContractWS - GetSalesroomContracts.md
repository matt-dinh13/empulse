# ContractWS - GetSalesroomContracts

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS
- **Diagram ID**: 159595
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class PageableResponse["PageableResponse"]
    class PageableRequest["PageableRequest"]
    class GetSalesroomContractsResultCode["GetSalesroomContractsResultCode"]
    class GetSalesroomContractsFault["GetSalesroomContractsFault"]
    class SalesroomContract["SalesroomContract"]
    class n_01_767_Get_contracts_created_on_salesroom["01.767 Get contracts created on salesroom"]
    class GetSalesroomContractsResponse["GetSalesroomContractsResponse"]
    class GetSalesroomContractsRequest["GetSalesroomContractsRequest"]
    class MOD_ContractWS["(MOD)ContractWS"]
    MOD_ContractWS ..> GetSalesroomContractsRequest : unnamed
    MOD_ContractWS ..> GetSalesroomContractsResponse : unnamed
    MOD_ContractWS --> n_01_767_Get_contracts_created_on_salesroom : unnamed
    GetSalesroomContractsResponse ..> SalesroomContract : unnamed
    MOD_ContractWS --> GetSalesroomContractsFault : unnamed
    GetSalesroomContractsFault ..> GetSalesroomContractsResultCode : unnamed
    PageableRequest <|-- GetSalesroomContractsRequest : unnamed
    PageableResponse <|-- GetSalesroomContractsResponse : unnamed
```
