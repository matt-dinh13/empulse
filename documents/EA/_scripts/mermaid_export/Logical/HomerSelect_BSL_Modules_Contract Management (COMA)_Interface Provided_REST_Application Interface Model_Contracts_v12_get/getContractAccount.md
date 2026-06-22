# getContractAccount

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractAccount
- **Diagram ID**: 160408
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractAccount["ContractAccount"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class MOD_Get_contract_account["{MOD}Get contract account"]
    Contract ..> ContractAccount : Response
    Contract ..> MOD_Get_contract_account : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
