# Get Contract Accounts

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/getContractAccount
- **Diagram ID**: 163987
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class MOD_Get_contract_account["{MOD}Get contract account"]
    class ADD_ContractAccounts["{ADD}ContractAccounts"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class ContractAccount["ContractAccount"]
    class Contracts["Contracts"]
    Contracts ..> ADD_ContractAccounts : Response
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> MOD_Get_contract_account : unnamed
    ADD_ContractAccounts --> ContractAccount : unnamed
```
