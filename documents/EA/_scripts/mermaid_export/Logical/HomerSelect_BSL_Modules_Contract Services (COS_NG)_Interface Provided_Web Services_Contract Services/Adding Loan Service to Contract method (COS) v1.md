# Adding Loan Service to Contract method (COS) v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services
- **Diagram ID**: 163483
- **Elements**: 8
- **Connectors**: 14

```mermaid
classDiagram
    class ContractService["ContractService"]
    class n_08_010_Add_Service_to_Loan_COS["08.010 Add Service to Loan (COS)"]
    class ServiceParameter["ServiceParameter"]
    class FinancialParameter["FinancialParameter"]
    class ServiceRole["ServiceRole"]
    class NewService["NewService"]
    class AddServiceToLoanRequest_v1["AddServiceToLoanRequest_v1"]
    class ContractServices["ContractServices"]
    ContractServices --> AddServiceToLoanRequest_v1 : unnamed
    AddServiceToLoanRequest_v1 --> NewService : unnamed
    AddServiceToLoanRequest_v1 --> ServiceRole : unnamed
    AddServiceToLoanRequest_v1 --> FinancialParameter : unnamed
    AddServiceToLoanRequest_v1 --> ServiceParameter : unnamed
    ContractServices ..> n_08_010_Add_Service_to_Loan_COS : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
    ContractServices --> ContractService : unnamed
```
