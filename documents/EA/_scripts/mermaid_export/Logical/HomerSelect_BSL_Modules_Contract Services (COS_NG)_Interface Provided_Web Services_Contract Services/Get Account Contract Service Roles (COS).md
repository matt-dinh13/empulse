# Get Account Contract Service Roles (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 163482
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class n_08_114_Get_Account_Contract_Service_Role_COS["08.114 Get Account Contract Service Role (COS)"]
    class ContractServiceRole["ContractServiceRole"]
    class AccountContractServiceRole["AccountContractServiceRole"]
    class Role["Role"]
    class Service["Service"]
    class GetAccountContractServiceRole["GetAccountContractServiceRole"]
    class ContractServices["ContractServices"]
    ContractServices --> GetAccountContractServiceRole : unnamed
    ContractServiceRole --> Service : unnamed
    ContractServiceRole --> Role : unnamed
    ContractServices --> AccountContractServiceRole : unnamed
    AccountContractServiceRole --> ContractServiceRole : unnamed
    ContractServices --> n_08_114_Get_Account_Contract_Service_Role_COS : unnamed
```
