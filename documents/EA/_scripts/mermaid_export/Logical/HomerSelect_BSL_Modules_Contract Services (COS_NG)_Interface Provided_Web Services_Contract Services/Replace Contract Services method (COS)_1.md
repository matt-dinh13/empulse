# Replace Contract Services method (COS)

```mermaid
classDiagram
    class Service["Service"]
    class n_08_060_Replace_Loan_Service_method_COS["08.060 Replace Loan Service method (COS)"]
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
    ContractServices --> ReplaceLoanServiceRequest : unnamed
    ReplaceLoanServiceRequest --> NewService : unnamed
    ContractServices --> n_08_060_Replace_Loan_Service_method_COS : unnamed
    ContractService --> Service : unnamed
```
