# System Messages - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/System Messages/Communication model/JMS messages
- **Diagram ID**: 55332
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class Legend["Legend"]
    class MessageBaseTypeDto["MessageBaseTypeDto"]
    class ModelGroup1["ModelGroup1"]
    class MessageEnvelopeDto["MessageEnvelopeDto"]
    class SystemEventTypeDto["SystemEventTypeDto"]
    class AccountSystemMessageDto["AccountSystemMessageDto"]
    AccountSystemMessageDto --> SystemEventTypeDto : unnamed
    MessageBaseTypeDto <|-- AccountSystemMessageDto : unnamed
    MessageEnvelopeDto --> ModelGroup1 : unnamed
    ModelGroup1 --> AccountSystemMessageDto : unnamed
```
