# Document

```mermaid
classDiagram
    class Files["Files"]
    class DocumentAttributes["DocumentAttributes"]
    class DocumentAttribute["DocumentAttribute"]
    class File["File"]
    class DocumentBase["DocumentBase"]
    Files --> File : unnamed
    DocumentAttributes --> DocumentAttribute : unnamed
    DocumentBase --> DocumentAttributes : unnamed
```
