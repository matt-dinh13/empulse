# GetDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/Documents_v2
- **Diagram ID**: 164536
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class AttributeChangeHistory["AttributeChangeHistory"]
    class Document["Document"]
    class DocumentFile["DocumentFile"]
    class DocumentAttribute["DocumentAttribute"]
    class n_14_020_Get_Document["14.020 Get Document"]
    class GetDocumentRequest["GetDocumentRequest"]
    class Documents["Documents"]
    Documents ..> GetDocumentRequest : unnamed
    Documents ..> Document : unnamed
    Documents ..> n_14_020_Get_Document : unnamed
    DocumentAttribute --> AttributeChangeHistory : unnamed
    Document ..> DocumentAttribute : unnamed
    Document ..> DocumentFile : unnamed
```
