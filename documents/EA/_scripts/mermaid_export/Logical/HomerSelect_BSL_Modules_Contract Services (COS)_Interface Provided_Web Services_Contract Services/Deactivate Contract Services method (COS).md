# Deactivate Contract Services method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159906
- **Elements**: 5
- **Connectors**: 13

```mermaid
classDiagram
    class Service["Service"]
    class DeactivateLoanServiceRequest["DeactivateLoanServiceRequest"]
    class ContractService["ContractService"]
    class n_08_030_Deactivate_Loan_Service_method_COS["08.030 Deactivate Loan Service method (COS)"]
    class ContractServices["ContractServices"]
    ContractServices ..> n_08_030_Deactivate_Loan_Service_method_COS : unnamed
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
    ContractServices --> DeactivateLoanServiceRequest : unnamed
    ContractService --> Service : unnamed
```
