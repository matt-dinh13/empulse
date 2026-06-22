# getContractProduct

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractProduct
- **Diagram ID**: 160401
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ContractProduct["ContractProduct"]
    class ADD_Get_contract_product["{ADD}Get contract product"]
    Contract ..> ADD_Get_contract_product : unnamed
    Contract ..> ContractProduct : Response
    Contract ..> ContractRequestPathParam : Request path parameter(s)
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
