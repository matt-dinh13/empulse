# Types - AttributesDto

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
    AttributeType --> ObjectEntryDto : unnamed
    AttributeType --> DateEntryDto : unnamed
    AttributeType --> BoolEntryDto : unnamed
    AttributeType --> FloatEntryDto : unnamed
    AttributeType --> LongEntryDto : unnamed
    AttributeType --> StringEntryDto : unnamed
    StringEntryDto --> EntryDto : unnamed
    LongEntryDto --> EntryDto : unnamed
    FloatEntryDto --> EntryDto : unnamed
    BoolEntryDto --> EntryDto : unnamed
    DateEntryDto --> EntryDto : unnamed
    ObjectEntryDto --> EntryDto : unnamed
    AttributesDto --> AttributeType : unnamed
```
