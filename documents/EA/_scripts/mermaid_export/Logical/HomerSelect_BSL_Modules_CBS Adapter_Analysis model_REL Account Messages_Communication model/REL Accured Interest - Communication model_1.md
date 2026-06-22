# REL Accured Interest - Communication model

```mermaid
classDiagram
    class Communication_tables_REL_Accured_Interest_Communication_tabl["Communication tables : REL Accured Interest - Communication tables"]
    class JMS_messages_Accured_Interest_JMS_messages["JMS messages : Accured Interest -  JMS messages"]
    class Process_AccruedInterestMessageDto["Process AccruedInterestMessageDto"]
    class AccruedInterestMessageDto["AccruedInterestMessageDto"]
    class ACCRUEDINTEREST162["ACCRUEDINTEREST162"]
    class Processing_MessageEnvelopeDto["Processing MessageEnvelopeDto
"]
    class ModelGroup1["ModelGroup1"]
    class MessageEnvelopeDto["MessageEnvelopeDto"]
    class Legend["Legend"]
    JMS_messages_Accured_Interest_JMS_messages --> AccruedInterestMessageDto : unnamed
    ModelGroup1 --> AccruedInterestMessageDto : accruedInterest
    Communication_tables_REL_Accured_Interest_Communication_tabl --> ACCRUEDINTEREST162 : unnamed
    MessageEnvelopeDto --> Processing_MessageEnvelopeDto : unnamed
    MessageEnvelopeDto --> ModelGroup1 : unnamed
    AccruedInterestMessageDto --> Process_AccruedInterestMessageDto : unnamed
    AccruedInterestMessageDto --> ACCRUEDINTEREST162 : unnamed
    Processing_MessageEnvelopeDto --> Process_AccruedInterestMessageDto : unnamed
```
