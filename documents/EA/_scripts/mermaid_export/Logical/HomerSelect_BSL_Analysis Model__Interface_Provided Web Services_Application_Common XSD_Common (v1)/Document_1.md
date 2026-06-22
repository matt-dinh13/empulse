# Document

```mermaid
classDiagram
    class Document["Document"]
    class DocumentAttributes["DocumentAttributes"]
    class DocumentAttribute["DocumentAttribute"]
    class DocumentFile["DocumentFile"]
    class DocumentBase["DocumentBase"]
    DocumentFile --> DocumentBase : unnamed
    Document --> DocumentFile : unnamed
    DocumentAttributes --> DocumentAttribute : unnamed
    DocumentBase --> DocumentAttributes : unnamed
```
