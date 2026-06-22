# getRefinancedContracts

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getRefinancedContracts
- **Diagram ID**: 160413
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_Get_refinanced_contracts["{ADD}Get refinanced contracts"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class Money["Money"]
    class ContractRefinancedContract["ContractRefinancedContract"]
    ContractRefinancedContract --> Money : unnamed
    Contract ..> ContractRefinancedContract : Response
    Contract ..> ADD_Get_refinanced_contracts : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
