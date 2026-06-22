# Client on Contract change

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract
- **Diagram ID**: 160877
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_01_910_Change_Client_on_Contract_v2["01.910 Change Client on Contract v2"]
    class ClientOnContractChangeRequest["ClientOnContractChangeRequest"]
    class MOD_contracts["(MOD)contracts"]
    class contract["contract"]
    class BSL_OpenAPI["BSL OpenAPI"]
    BSL_OpenAPI ..> MOD_contracts : /contracts
    MOD_contracts ..> contract : /{contractNumber}
    contract ..> n_01_910_Change_Client_on_Contract_v2 : unnamed
    contract ..> ClientOnContractChangeRequest : unnamed
```
