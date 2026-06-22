# Types - AttributesDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions/Types
- **Diagram ID**: 87801
- **Elements**: 9
- **Connectors**: 13

```mermaid
classDiagram
    class ObjectEntryDto["ObjectEntryDto"]
    class DateEntryDto["DateEntryDto"]
    class BoolEntryDto["BoolEntryDto"]
    class FloatEntryDto["FloatEntryDto"]
    class LongEntryDto["LongEntryDto"]
    class StringEntryDto["StringEntryDto"]
    class EntryDto["EntryDto"]
    class AttributeType["AttributeType"]
    class AttributesDto["AttributesDto"]
    AttributeType ..> ObjectEntryDto : unnamed
    AttributeType ..> DateEntryDto : unnamed
    AttributeType ..> BoolEntryDto : unnamed
    AttributeType ..> FloatEntryDto : unnamed
    AttributeType ..> LongEntryDto : unnamed
    AttributeType ..> StringEntryDto : unnamed
    EntryDto <|-- StringEntryDto : unnamed
    EntryDto <|-- LongEntryDto : unnamed
    EntryDto <|-- FloatEntryDto : unnamed
    EntryDto <|-- BoolEntryDto : unnamed
    EntryDto <|-- DateEntryDto : unnamed
    EntryDto <|-- ObjectEntryDto : unnamed
    AttributesDto --> AttributeType : unnamed
```
