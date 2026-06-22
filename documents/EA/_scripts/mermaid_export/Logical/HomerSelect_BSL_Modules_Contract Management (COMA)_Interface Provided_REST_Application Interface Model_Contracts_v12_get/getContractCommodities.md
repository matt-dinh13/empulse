# getContractCommodities

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractCommodities
- **Diagram ID**: 160398
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ADD_Get_contract_commodites["{ADD}Get contract commodites"]
    class ContractCommodity["ContractCommodity"]
    Contract ..> ContractCommodity : Response
    Contract ..> ADD_Get_contract_commodites : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
