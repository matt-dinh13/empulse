# getContractCustomer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractCustomer
- **Diagram ID**: 160399
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ContractCustomer["ContractCustomer"]
    class MOD_Get_contract_customer["{MOD}Get contract customer"]
    Contract ..> MOD_Get_contract_customer : unnamed
    Contract ..> ContractCustomer : Response
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
