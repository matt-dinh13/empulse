# REL Payment Pairing - Communication Model

```mermaid
classDiagram
    class JMS_messages_REL_Payment_Pairing_JMS_messages["JMS messages : REL Payment Pairing - JMS messages"]
    class Processing_MessageEnvelopeDto["Processing MessageEnvelopeDto
"]
    class MessageBaseTypeDto["MessageBaseTypeDto"]
    class ModelGroup1["ModelGroup1"]
    class MessageEnvelopeDto["MessageEnvelopeDto"]
    class Processing_PaidInstalmentMessageDto["Processing PaidInstalmentMessageDto"]
    class PaidInstallmentMessageDto["PaidInstallmentMessageDto"]
    class INSTALPAY126["INSTALPAY126"]
    class Legend["Legend"]
    PaidInstallmentMessageDto --> INSTALPAY126 : unnamed
    PaidInstallmentMessageDto --> Processing_PaidInstalmentMessageDto : unnamed
    MessageEnvelopeDto --> ModelGroup1 : unnamed
    PaidInstallmentMessageDto --> MessageBaseTypeDto : unnamed
    MessageEnvelopeDto --> Processing_MessageEnvelopeDto : unnamed
    ModelGroup1 --> PaidInstallmentMessageDto : unnamed
    Processing_MessageEnvelopeDto --> Processing_PaidInstalmentMessageDto : unnamed
```
