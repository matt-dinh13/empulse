# Terminate Contract Service method (COS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 163476
- **Elements**: 5
- **Connectors**: 11

```mermaid
classDiagram
    class Service["Service"]
    class ContractService["ContractService"]
    class TerminateContractServiceRequest["TerminateContractServiceRequest"]
    class ContractServices["ContractServices"]
    class n_08_040_Terminate_Loan_Service_COS["08.040 Terminate Loan Service (COS)"]
    ContractServices ..> n_08_040_Terminate_Loan_Service_COS : unnamed
    ContractServices --> TerminateContractServiceRequest : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractService --> Service : unnamed
```
