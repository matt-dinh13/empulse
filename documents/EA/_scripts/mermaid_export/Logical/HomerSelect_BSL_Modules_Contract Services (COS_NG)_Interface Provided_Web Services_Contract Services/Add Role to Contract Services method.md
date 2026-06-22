# Add Role to Contract Services method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 163480
- **Elements**: 4
- **Connectors**: 10

```mermaid
classDiagram
    class n_08_110_Add_Role_to_Contract_Service_COS["08.110 Add Role to Contract Service (COS)"]
    class ContractService["ContractService"]
    class ContractServices["ContractServices"]
    class AddRoleToContractServiceRequest["AddRoleToContractServiceRequest"]
    ContractServices --> AddRoleToContractServiceRequest : unnamed
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
