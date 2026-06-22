# Adding Loan Service to Contract method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159904
- **Elements**: 8
- **Connectors**: 17

```mermaid
classDiagram
    class ADD_Role["{ADD}Role"]
    class ADD_ServiceRole["{ADD}ServiceRole"]
    class Service["Service"]
    class NewService["NewService"]
    class ContractService["ContractService"]
    class AddServiceToLoanRequest["AddServiceToLoanRequest"]
    class ContractServices["ContractServices"]
    class MOD_08_010_Add_Service_to_Loan_COS["{MOD}08.010 Add Service to Loan (COS)"]
    ContractServices --> ContractService : unnamed
    AddServiceToLoanRequest --> ADD_ServiceRole : unnamed
    ContractService --> Service : unnamed
    ContractService --> NewService : unnamed
    AddServiceToLoanRequest --> NewService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractService --> ADD_Role : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices ..> MOD_08_010_Add_Service_to_Loan_COS : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> AddServiceToLoanRequest : unnamed
    ContractServices --> ContractService : unnamed
```
