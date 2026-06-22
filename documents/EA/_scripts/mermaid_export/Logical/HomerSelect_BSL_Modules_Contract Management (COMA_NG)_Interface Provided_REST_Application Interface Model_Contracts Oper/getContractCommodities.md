# getContractCommodities

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/getContractCommodities
- **Diagram ID**: 162309
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contracts["Contracts"]
    class ADD_Get_contract_commodites["{ADD}Get contract commodites"]
    class ContractCommodity["ContractCommodity"]
    Contracts ..> ADD_Get_contract_commodites : unnamed
    Contracts ..> ContractCommodity : Response
```
