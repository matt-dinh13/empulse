# Additional insurance transaction - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/JMS messages
- **Diagram ID**: 102225
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class InitialTransactionType["InitialTransactionType"]
    class CELAccountTransaction["CELAccountTransaction"]
    class CELInsuranceAccountTransaction["CELInsuranceAccountTransaction"]
    class Legend["Legend"]
    class InsuranceTransactionRequest["InsuranceTransactionRequest"]
    CELAccountTransaction <|-- CELInsuranceAccountTransaction : unnamed
    InsuranceTransactionRequest ..> CELInsuranceAccountTransaction : unnamed
    InsuranceTransactionRequest ..> InitialTransactionType : unnamed
```
