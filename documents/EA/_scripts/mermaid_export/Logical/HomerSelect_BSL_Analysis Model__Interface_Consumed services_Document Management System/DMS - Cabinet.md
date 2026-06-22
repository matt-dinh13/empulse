# DMS - Cabinet

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Document Management System
- **Diagram ID**: 147347
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Big_Big["Big : Big"]
    class Standard_Standard["Standard : Standard"]
    class Core_Core["Core : Core"]
    class BigDocumentResource["BigDocumentResource"]
    class DocumentResource["DocumentResource"]
    Standard_Standard --> DocumentResource : unnamed
    Core_Core --> DocumentResource : unnamed
    Big_Big --> BigDocumentResource : unnamed
    Core_Core --> BigDocumentResource : unnamed
```
