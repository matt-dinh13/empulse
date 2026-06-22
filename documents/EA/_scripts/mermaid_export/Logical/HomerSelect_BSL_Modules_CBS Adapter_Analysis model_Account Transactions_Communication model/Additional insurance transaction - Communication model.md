# Additional insurance transaction - Communication model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model
- **Diagram ID**: 92041
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Processing_InsuranceTransactionRequest["Processing InsuranceTransactionRequest"]
    class TRANSAC150_TransactionType["TRANSAC150 TransactionType"]
    class TRANSAC150["TRANSAC150"]
    class CELAccountTransaction["CELAccountTransaction"]
    class CELInsuranceAccountTransaction["CELInsuranceAccountTransaction"]
    class Legend["Legend"]
    class InsuranceTransactionRequest["InsuranceTransactionRequest"]
    CELInsuranceAccountTransaction ..> TRANSAC150 : unnamed
    InsuranceTransactionRequest ..> TRANSAC150 : unnamed
    TRANSAC150 ..> TRANSAC150_TransactionType : unnamed
    InsuranceTransactionRequest ..> CELInsuranceAccountTransaction : unnamed
    InsuranceTransactionRequest ..> Processing_InsuranceTransactionRequest : unnamed
    CELAccountTransaction <|-- CELInsuranceAccountTransaction : unnamed
```
