# {ADD}setContractParty

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/{ADD}setContractParty
- **Diagram ID**: 162327
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Contracts["Contracts"]
    class ErrorMessageRestApi["ErrorMessageRestApi"]
    class ADD_createContractPartyRoleRequest["{ADD}createContractPartyRoleRequest"]
    class ADD_Create_Contract_Party["{ADD}Create Contract Party"]
    Contracts ..> ADD_createContractPartyRoleRequest : unnamed
    Contracts ..> ADD_Create_Contract_Party : unnamed
    Contracts ..> ErrorMessageRestApi : unnamed
```
