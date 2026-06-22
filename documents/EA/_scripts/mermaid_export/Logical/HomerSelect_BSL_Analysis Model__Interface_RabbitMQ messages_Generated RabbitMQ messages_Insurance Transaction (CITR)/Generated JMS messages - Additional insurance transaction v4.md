# Generated JMS messages - Additional insurance transaction v4

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)
- **Diagram ID**: 164339
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class InitialTransactionType["InitialTransactionType"]
    class CELAccountTransactionsOperationType["CELAccountTransactionsOperationType"]
    class CELInsuranceAccountTransaction["CELInsuranceAccountTransaction"]
    class CELAccountTransaction["CELAccountTransaction"]
    class Get_INSR_Insurance_Program_data["Get INSR Insurance Program data"]
    class InsuranceTransactionRequest["InsuranceTransactionRequest"]
    unnamed --> InsuranceTransactionRequest : unnamed
    CELInsuranceAccountTransaction ..> Get_INSR_Insurance_Program_data : unnamed
    CELAccountTransaction <|-- CELInsuranceAccountTransaction : unnamed
    InsuranceTransactionRequest ..> CELInsuranceAccountTransaction : unnamed
    InsuranceTransactionRequest ..> CELAccountTransactionsOperationType : unnamed
    InsuranceTransactionRequest ..> InitialTransactionType : unnamed
```
