# getStatusTransitions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getStatusTransitions
- **Diagram ID**: 160414
- **Elements**: 5
- **Connectors**: 5

```mermaid
classDiagram
    class Get_contract_status_transitions["Get contract status transitions"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ContractStatusTransitionUser["ContractStatusTransitionUser"]
    class ContractStatusTransitions["ContractStatusTransitions"]
    ContractStatusTransitions --> ContractStatusTransitionUser : unnamed
    ContractStatusTransitions --> ContractStatusTransitionUser : unnamed
    Contract ..> ContractStatusTransitions : Response
    Contract ..> Get_contract_status_transitions : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
