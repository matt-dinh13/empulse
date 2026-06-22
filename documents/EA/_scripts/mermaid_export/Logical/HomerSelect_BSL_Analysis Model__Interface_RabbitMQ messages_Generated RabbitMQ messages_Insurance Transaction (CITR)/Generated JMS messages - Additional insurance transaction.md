# Generated JMS messages - Additional insurance transaction

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)
- **Diagram ID**: 164338
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class CELAccountTransactionsOperationType["CELAccountTransactionsOperationType"]
    class InitialTransactionType["InitialTransactionType"]
    class CELAccountTransaction["CELAccountTransaction"]
    class External_Reference["External Reference"]
    class InsuranceTransactionRequest["InsuranceTransactionRequest"]
    unnamed --> InsuranceTransactionRequest : unnamed
    InsuranceTransactionRequest ..> External_Reference : External Reference
    External_Reference ..> CELAccountTransaction : External Reference
```
