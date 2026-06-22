# getContractOwners

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractOwners
- **Diagram ID**: 160411
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ADD_ContractOwner["{ADD}ContractOwner"]
    class ADD_Get_contract_owners["{ADD}Get contract owners"]
    Contract ..> ADD_ContractOwner : Response
    Contract ..> ADD_Get_contract_owners : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
