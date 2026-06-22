# CreateDocumentFile

```mermaid
classDiagram
    class ADD_FileCustomData["{ADD}FileCustomData"]
    class DocumentFile["DocumentFile"]
    class DocumentFiles["DocumentFiles"]
    class n_14_050_Create_Document_File["14.050 Create Document File"]
    class CreateDocumentFileRequest["CreateDocumentFileRequest"]
    class DocumentFileRequest["DocumentFileRequest"]
    class DocumentFiles["DocumentFiles"]
    CreateDocumentFileRequest --> DocumentFileRequest : unnamed
    DocumentFiles --> CreateDocumentFileRequest : unnamed
    DocumentFiles --> n_14_050_Create_Document_File : unnamed
    DocumentFiles --> DocumentFiles : unnamed
    DocumentFiles --> DocumentFile : unnamed
    DocumentFileRequest --> ADD_FileCustomData : unnamed
```
