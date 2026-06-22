# Activate Loan Service method (COS) v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services/v2
- **Diagram ID**: 159071
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class n_08_020_Activate_Loan_Service_COS["08.020 Activate Loan Service (COS)"]
    class ContractService["ContractService"]
    class ActivateLoanServiceRequest_v2["ActivateLoanServiceRequest_v2"]
    class ADD_DealPeriodParameters["{ADD}DealPeriodParameters"]
    class ContractServices["ContractServices"]
    ContractServices ..> n_08_020_Activate_Loan_Service_COS : unnamed
    ADD_DealPeriodParameters --> MoneyType : unnamed
    ActivateLoanServiceRequest_v2 --> ADD_DealPeriodParameters : unnamed
    ContractServices --> ActivateLoanServiceRequest_v2 : unnamed
    ContractServices --> ContractService : unnamed
```
