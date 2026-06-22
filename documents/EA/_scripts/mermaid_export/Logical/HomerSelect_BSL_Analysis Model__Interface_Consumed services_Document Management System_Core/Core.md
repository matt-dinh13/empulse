# Core

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Document Management System/Core
- **Diagram ID**: 85262
- **Elements**: 30
- **Connectors**: 10

```mermaid
classDiagram
    class AttributesBatchEntry["AttributesBatchEntry"]
    class JournalEntry["JournalEntry"]
    class Order["Order"]
    class Sort["Sort"]
    class Page["Page"]
    class Criterion["Criterion"]
    class Criteria["Criteria"]
    class Attribute["Attribute"]
    class DocumentFull["DocumentFull"]
    class FileRevision["FileRevision"]
    class entryStatus["entryStatus"]
    class operation["operation"]
    class direction["direction"]
    class notEmptyString["notEmptyString"]
    class fileName["fileName"]
    class documentName["documentName"]
    class path["path"]
    class uuid["uuid"]
    class attributesBatch["attributesBatch"]
    class uuidList["uuidList"]
    class journal["journal"]
    class pageable["pageable"]
    class digest["digest"]
    class searchByMetadata["searchByMetadata"]
    class metadata["metadata"]
    class pathListing["pathListing"]
    class documentFullListing["documentFullListing"]
    class documentDetailListing["documentDetailListing"]
    class documentDetail["documentDetail"]
    class document["document"]
    document ..> digest : unnamed
    document ..> metadata : unnamed
    document <|-- documentDetail : unnamed
    documentDetailListing ..> documentDetail : unnamed
    metadata ..> Attribute : unnamed
    Page <|-- pageable : unnamed
    documentDetail <|-- DocumentFull : unnamed
    Criteria ..> Criterion : unnamed
    Criterion ..> operation : unnamed
    Attribute <|-- Criterion : unnamed
```
