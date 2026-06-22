# getContractApplicant

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/getContractApplicant
- **Diagram ID**: 162317
- **Elements**: 4
- **Connectors**: 10

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contracts["Contracts"]
    class ADD_ContractApplicant["{ADD}ContractApplicant"]
    class Get_contract_applicant["Get contract applicant"]
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path param(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ContractRequestPathParam : Request path parameter(s)
    Contracts ..> ADD_ContractApplicant : Response
    Contracts ..> Get_contract_applicant : unnamed
```
