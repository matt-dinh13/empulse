# Cancel Contract Services method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 159908
- **Elements**: 5
- **Connectors**: 13

```mermaid
classDiagram
    class Service["Service"]
    class n_08_050_Cancel_Loan_Service_method_COS["08.050 Cancel Loan Service method (COS)"]
    class ContractService["ContractService"]
    class CancelLoanServiceRequest["CancelLoanServiceRequest"]
    class ContractServices["ContractServices"]
    ContractServices --> CancelLoanServiceRequest : unnamed
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
    ContractServices ..> n_08_050_Cancel_Loan_Service_method_COS : unnamed
    ContractService --> Service : unnamed
```
