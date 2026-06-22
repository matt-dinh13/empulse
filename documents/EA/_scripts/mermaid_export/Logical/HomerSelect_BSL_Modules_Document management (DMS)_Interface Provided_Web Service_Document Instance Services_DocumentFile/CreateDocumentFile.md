# CreateDocumentFile

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/DocumentFiles_v2
- **Diagram ID**: 141335
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_FileCustomData["{ADD}FileCustomData"]
    class DocumentFile["DocumentFile"]
    class DocumentFiles["DocumentFiles"]
    class n_14_050_Create_Document_File["14.050 Create Document File"]
    class CreateDocumentFileRequest["CreateDocumentFileRequest"]
    class DocumentFileRequest["DocumentFileRequest"]
    class DocumentFiles["DocumentFiles"]
    CreateDocumentFileRequest ..> DocumentFileRequest : unnamed
    DocumentFiles ..> CreateDocumentFileRequest : unnamed
    DocumentFiles ..> n_14_050_Create_Document_File : unnamed
    DocumentFiles ..> DocumentFiles : unnamed
    DocumentFiles ..> DocumentFile : unnamed
    DocumentFileRequest ..> ADD_FileCustomData : unnamed
```
