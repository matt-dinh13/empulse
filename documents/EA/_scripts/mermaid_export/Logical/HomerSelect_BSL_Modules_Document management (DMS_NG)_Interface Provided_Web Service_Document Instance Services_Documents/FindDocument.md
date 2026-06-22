# FindDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Instance Services/Documents_v2
- **Diagram ID**: 162112
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class AttributeChangeHistory["AttributeChangeHistory"]
    class Page["Page"]
    class DocumentFile["DocumentFile"]
    class DocumentAttribute["DocumentAttribute"]
    class n_14_022_Find_Document["14.022 Find Document"]
    class Documents["Documents"]
    class FindDocumentRequest["FindDocumentRequest"]
    class Document["Document"]
    class Documents["Documents"]
    Documents ..> n_14_022_Find_Document : unnamed
    Documents ..> FindDocumentRequest : unnamed
    Documents ..> Documents : unnamed
    Document ..> DocumentAttribute : unnamed
    Document ..> DocumentFile : unnamed
    Documents ..> Document : unnamed
    Documents ..> Page : unnamed
    DocumentAttribute --> AttributeChangeHistory : unnamed
```
