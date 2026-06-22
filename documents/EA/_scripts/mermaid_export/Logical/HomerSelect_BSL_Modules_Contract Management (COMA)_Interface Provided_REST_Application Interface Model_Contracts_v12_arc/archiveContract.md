# archiveContract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/archiveContract
- **Diagram ID**: 160392
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class Archive_Contract_via_API["Archive Contract via API"]
    Contract ..> Archive_Contract_via_API : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
