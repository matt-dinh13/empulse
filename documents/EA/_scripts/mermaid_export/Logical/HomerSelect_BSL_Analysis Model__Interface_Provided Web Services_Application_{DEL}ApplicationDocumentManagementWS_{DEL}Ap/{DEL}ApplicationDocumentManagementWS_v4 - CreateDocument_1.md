# {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument

```mermaid
classDiagram
    class Common_v4_ValidationErrors["Common (v4) : ValidationErrors"]
    class ValidationErrors["ValidationErrors"]
    class DEL_01_176_Create_document["{DEL}01.176 Create document"]
    class DEL_DocumentFiles["{DEL}DocumentFiles"]
    class Files["Files"]
    class Common_v4_Document["Common (v4) : Document"]
    class File["File"]
    class DEL_ProcessDocumentFault["{DEL}ProcessDocumentFault"]
    class DEL_ProcessResultCode["{DEL}ProcessResultCode"]
    class DEL_ApplicationDocumentManagementWS_v4["{DEL}ApplicationDocumentManagementWS_v4"]
    class DEL_CreateDocumentFault["{DEL}CreateDocumentFault"]
    class DEL_CreateDocumentResponse["{DEL}CreateDocumentResponse"]
    class DEL_CreateDocumentRequest["{DEL}CreateDocumentRequest"]
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_CreateDocumentRequest : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_CreateDocumentResponse : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_CreateDocumentFault : unnamed
    DEL_ProcessDocumentFault --> DEL_ProcessResultCode : unnamed
    DEL_CreateDocumentFault --> DEL_ProcessDocumentFault : unnamed
    DEL_DocumentFiles --> Files : unnamed
    DEL_CreateDocumentRequest --> DEL_DocumentFiles : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_01_176_Create_document : unnamed
    DEL_ProcessDocumentFault --> ValidationErrors : unnamed
    Files --> File : unnamed
```
