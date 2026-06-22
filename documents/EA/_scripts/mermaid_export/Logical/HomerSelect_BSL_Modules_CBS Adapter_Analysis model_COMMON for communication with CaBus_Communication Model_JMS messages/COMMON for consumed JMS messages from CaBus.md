# COMMON for consumed JMS messages from CaBus

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model/JMS messages
- **Diagram ID**: 75332
- **Elements**: 10
- **Connectors**: 12

```mermaid
classDiagram
    class AccruedInterestMessageDto["AccruedInterestMessageDto"]
    class Legend["Legend"]
    class PaidInstallmentMessageDto["PaidInstallmentMessageDto"]
    class InstalmentMessageDto["InstalmentMessageDto"]
    class TransactionMessageDto["TransactionMessageDto"]
    class SystemEventTypeDto["SystemEventTypeDto"]
    class AccountSystemMessageDto["AccountSystemMessageDto"]
    class ModelGroup1["ModelGroup1"]
    class MessageEnvelopeDto["MessageEnvelopeDto"]
    class MessageBaseTypeDto["MessageBaseTypeDto"]
    MessageBaseTypeDto <|-- PaidInstallmentMessageDto : unnamed
    MessageBaseTypeDto <|-- AccountSystemMessageDto : unnamed
    AccountSystemMessageDto --> SystemEventTypeDto : unnamed
    MessageEnvelopeDto --> ModelGroup1 : unnamed
    ModelGroup1 --> InstalmentMessageDto : unnamed
    ModelGroup1 --> AccountSystemMessageDto : unnamed
    ModelGroup1 --> TransactionMessageDto : unnamed
    ModelGroup1 --> PaidInstallmentMessageDto : unnamed
    ModelGroup1 --> AccruedInterestMessageDto : accruedInterest
    MessageBaseTypeDto <|-- TransactionMessageDto : unnamed
    MessageBaseTypeDto <|-- InstalmentMessageDto : unnamed
    MessageBaseTypeDto <|-- AccruedInterestMessageDto : unnamed
```
