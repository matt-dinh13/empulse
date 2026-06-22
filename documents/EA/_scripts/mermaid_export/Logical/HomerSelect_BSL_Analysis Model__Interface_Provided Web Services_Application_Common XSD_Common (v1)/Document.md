# Document

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Common XSD/Common (v1)
- **Diagram ID**: 138999
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Document["Document"]
    class DocumentAttributes["DocumentAttributes"]
    class DocumentAttribute["DocumentAttribute"]
    class DocumentFile["DocumentFile"]
    class DocumentBase["DocumentBase"]
    DocumentBase <|-- DocumentFile : unnamed
    DocumentFile <|-- Document : unnamed
    DocumentAttributes ..> DocumentAttribute : unnamed
    DocumentBase ..> DocumentAttributes : unnamed
```
