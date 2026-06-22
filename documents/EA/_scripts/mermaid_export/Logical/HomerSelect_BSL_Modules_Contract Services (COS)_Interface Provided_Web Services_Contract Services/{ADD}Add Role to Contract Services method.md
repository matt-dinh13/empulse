# {ADD}Add Role to Contract Services method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159911
- **Elements**: 4
- **Connectors**: 12

```mermaid
classDiagram
    class n_08_110_Add_Role_to_Contract_Service_COS["08.110 Add Role to Contract Service (COS)"]
    class ContractService["ContractService"]
    class ContractServices["ContractServices"]
    class ADD_AddRoleToContractServiceRequest["{ADD}AddRoleToContractServiceRequest"]
    ContractServices --> ADD_AddRoleToContractServiceRequest : unnamed
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
    ContractServices ..> n_08_110_Add_Role_to_Contract_Service_COS : unnamed
```
