# Replace Contract Services method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159909
- **Elements**: 6
- **Connectors**: 15

```mermaid
classDiagram
    class Service["Service"]
    class MOD_08_060_Replace_Loan_Service_method_COS["{MOD}08.060 Replace Loan Service method (COS)"]
    class NewService["NewService"]
    class ReplaceLoanServiceRequest["ReplaceLoanServiceRequest"]
    class ContractServices["ContractServices"]
    class ContractService["ContractService"]
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
    ContractServices --> ReplaceLoanServiceRequest : unnamed
    ReplaceLoanServiceRequest --> NewService : unnamed
    ContractService --> NewService : unnamed
    ContractServices ..> MOD_08_060_Replace_Loan_Service_method_COS : unnamed
    ContractService --> Service : unnamed
```
