# {ADD}Deactivate Role on Contract Services method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159912
- **Elements**: 4
- **Connectors**: 12

```mermaid
classDiagram
    class n_08_112_Deactivate_Role_on_Contract_Service_COS["08.112 Deactivate Role on Contract Service (COS)"]
    class ContractService["ContractService"]
    class ADD_DeactivateRoleOnContractServiceRequest["{ADD}DeactivateRoleOnContractServiceRequest"]
    class ContractServices["ContractServices"]
    ContractServices --> ADD_DeactivateRoleOnContractServiceRequest : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> n_08_112_Deactivate_Role_on_Contract_Service_COS : unnamed
```
