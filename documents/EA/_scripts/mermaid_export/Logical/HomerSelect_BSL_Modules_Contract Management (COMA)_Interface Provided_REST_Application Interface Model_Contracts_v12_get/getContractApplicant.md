# getContractApplicant

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractApplicant
- **Diagram ID**: 160409
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class ADD_ContractApplicant["{ADD}ContractApplicant"]
    class Get_contract_applicant["Get contract applicant"]
    Contract ..> ADD_ContractApplicant : Response
    Contract ..> Get_contract_applicant : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
