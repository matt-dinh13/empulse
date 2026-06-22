# Types - AttributeDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model/JMS messages/Types
- **Diagram ID**: 102769
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
    AttributesDto --> AttributeType : unnamed
    EntryDto <|-- ObjectEntryDto : unnamed
    EntryDto <|-- DateEntryDto : unnamed
    EntryDto <|-- BoolEntryDto : unnamed
    EntryDto <|-- FloatEntryDto : unnamed
    EntryDto <|-- LongEntryDto : unnamed
    EntryDto <|-- StringEntryDto : unnamed
    AttributeType ..> StringEntryDto : unnamed
    AttributeType ..> LongEntryDto : unnamed
    AttributeType ..> FloatEntryDto : unnamed
    AttributeType ..> BoolEntryDto : unnamed
    AttributeType ..> DateEntryDto : unnamed
    AttributeType ..> ObjectEntryDto : unnamed
```
