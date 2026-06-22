# REL Account Transactions - Communication model

```mermaid
classDiagram
    class Communication_tables_REL_Account_Transactions_Communication_["Communication tables :REL Account Transactions - Communication tables"]
    class Processing_TransactionReconciliationDto["Processing TransactionReconciliationDto"]
    class Processing_TransactionMessageDto["Processing TransactionMessageDto"]
    class Processing_MessageEnvelopeDto["Processing MessageEnvelopeDto
"]
    class JMS_messages_REL_Account_Transactions_JMS_messages["JMS messages : REL Account Transactions - JMS messages"]
    class ModelGroup1["ModelGroup1"]
    class MessageEnvelopeDto["MessageEnvelopeDto"]
    class TransactionReconciliationDto["TransactionReconciliationDto"]
    class TransactionMessageDto["TransactionMessageDto"]
    class Legend["Legend"]
    class TRANSAC161["TRANSAC161"]
    class TRANSACHEAD160["TRANSACHEAD160"]
    TransactionMessageDto --> TRANSACHEAD160 : unnamed
    Communication_tables_REL_Account_Transactions_Communication_ --> TRANSACHEAD160 : unnamed
    TransactionReconciliationDto --> TRANSAC161 : unnamed
    ModelGroup1 --> TransactionMessageDto : unnamed
    MessageEnvelopeDto --> ModelGroup1 : unnamed
    MessageEnvelopeDto --> Processing_MessageEnvelopeDto : unnamed
    Processing_TransactionMessageDto --> Processing_TransactionReconciliationDto : unnamed
    Processing_MessageEnvelopeDto --> Processing_TransactionMessageDto : unnamed
    TransactionReconciliationDto --> Processing_TransactionReconciliationDto : unnamed
    TransactionMessageDto --> Processing_TransactionMessageDto : unnamed
    TransactionMessageDto --> TransactionReconciliationDto : unnamed
```
