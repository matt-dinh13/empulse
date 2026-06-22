# {ADD}Get Account Contract Service Roles (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159913
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class n_08_114_Get_Account_Contract_Service_Role_COS["08.114 Get Account Contract Service Role (COS)"]
    class ADD_ContractServiceRole["{ADD}ContractServiceRole"]
    class AccountContractServiceRole["AccountContractServiceRole"]
    class ADD_Role["{ADD}Role"]
    class Service["Service"]
    class ADD_GetAccountContractServiceRole["{ADD}GetAccountContractServiceRole"]
    class ContractServices["ContractServices"]
    ContractServices --> ADD_GetAccountContractServiceRole : unnamed
    ADD_ContractServiceRole --> Service : unnamed
    ADD_ContractServiceRole --> ADD_Role : unnamed
    ContractServices --> AccountContractServiceRole : unnamed
    AccountContractServiceRole --> ADD_ContractServiceRole : unnamed
    ContractServices --> n_08_114_Get_Account_Contract_Service_Role_COS : unnamed
```
