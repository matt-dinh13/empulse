# GetDocumentContainer

```mermaid
classDiagram
    class DocumentTypeOut["DocumentTypeOut"]
    class n_14_200_Get_Document_Container["14.200 Get Document Container"]
    class DocumentContainer["DocumentContainer"]
    class GetDocumentContainerRequest["GetDocumentContainerRequest"]
    class GetDocumentContainerResponse["GetDocumentContainerResponse"]
    class DocumentContainers["DocumentContainers"]
    DocumentContainers --> GetDocumentContainerRequest : unnamed
    DocumentContainers --> n_14_200_Get_Document_Container : unnamed
    DocumentContainers --> GetDocumentContainerResponse : unnamed
    GetDocumentContainerResponse --> DocumentContainer : unnamed
    DocumentContainer --> DocumentTypeOut : unnamed
```
