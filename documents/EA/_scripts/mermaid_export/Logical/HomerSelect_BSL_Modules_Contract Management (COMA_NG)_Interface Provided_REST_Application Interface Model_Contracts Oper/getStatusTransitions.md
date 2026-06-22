# getStatusTransitions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/getStatusTransitions
- **Diagram ID**: 162319
- **Elements**: 5
- **Connectors**: 7

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Get_contract_status_transitions["Get contract status transitions"]
    class Contracts["Contracts"]
    class ContractStatusTransitionUser["ContractStatusTransitionUser"]
    class ContractStatusTransitions["ContractStatusTransitions"]
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path param(s)
    Contracts ..> Get_contract_status_transitions : unnamed
    Contracts ..> ContractStatusTransitions : Response
    ContractStatusTransitions --> ContractStatusTransitionUser : unnamed
    ContractStatusTransitions --> ContractStatusTransitionUser : unnamed
```
