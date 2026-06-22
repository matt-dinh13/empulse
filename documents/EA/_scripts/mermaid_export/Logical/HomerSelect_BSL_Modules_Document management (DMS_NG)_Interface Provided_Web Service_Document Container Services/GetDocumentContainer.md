# GetDocumentContainer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Container Services
- **Diagram ID**: 162104
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class DocumentTypeOut["DocumentTypeOut"]
    class n_14_200_Get_Document_Container["14.200 Get Document Container"]
    class DocumentContainer["DocumentContainer"]
    class GetDocumentContainerRequest["GetDocumentContainerRequest"]
    class GetDocumentContainerResponse["GetDocumentContainerResponse"]
    class DocumentContainers["DocumentContainers"]
    DocumentContainers ..> GetDocumentContainerRequest : unnamed
    DocumentContainers ..> n_14_200_Get_Document_Container : unnamed
    DocumentContainers ..> GetDocumentContainerResponse : unnamed
    GetDocumentContainerResponse ..> DocumentContainer : unnamed
    DocumentContainer ..> DocumentTypeOut : unnamed
```
