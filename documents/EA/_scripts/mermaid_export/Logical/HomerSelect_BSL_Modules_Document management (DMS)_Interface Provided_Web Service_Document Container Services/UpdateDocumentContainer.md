# UpdateDocumentContainer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Container Services
- **Diagram ID**: 141836
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class DocumentTypeIn["DocumentTypeIn"]
    class DocumentTypeOut["DocumentTypeOut"]
    class DocumentContainer["DocumentContainer"]
    class DocumentContainers["DocumentContainers"]
    class UpdateDocumentContainerRequest["UpdateDocumentContainerRequest"]
    class n_14_220_Update_Document_Container["14.220 Update Document Container"]
    class UpdateDocumentContainerResponse["UpdateDocumentContainerResponse"]
    UpdateDocumentContainerRequest ..> DocumentTypeIn : unnamed
    DocumentContainer ..> DocumentTypeOut : unnamed
    UpdateDocumentContainerResponse ..> DocumentContainer : unnamed
    DocumentContainers ..> UpdateDocumentContainerRequest : unnamed
    DocumentContainers ..> n_14_220_Update_Document_Container : unnamed
    DocumentContainers ..> UpdateDocumentContainerResponse : unnamed
```
