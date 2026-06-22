# {DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4
- **Diagram ID**: 158343
- **Elements**: 15
- **Connectors**: 10

```mermaid
classDiagram
    class Common_v4_ValidationErrors["Common (v4) : ValidationErrors"]
    class ValidationErrors["ValidationErrors"]
    class DEL_ProcessDocumentFault["{DEL}ProcessDocumentFault"]
    class DEL_ProcessResultCode["{DEL}ProcessResultCode"]
    class Files["Files"]
    class DEL_ApplicationDocumentManagementWS_v4["{DEL}ApplicationDocumentManagementWS_v4"]
    class Common_v3_Document["Common (v3) : Document"]
    class Common_v4_Document["Common (v4) : Document"]
    class File["File"]
    class DEL_DocumentUpload["{DEL}DocumentUpload"]
    class DEL_UploadDocumentFileFault["{DEL}UploadDocumentFileFault"]
    class DEL_UploadDocumentFileResponse["{DEL}UploadDocumentFileResponse"]
    class DEL_UploadDocumentFileRequest["{DEL}UploadDocumentFileRequest"]
    class DEL_01_179_Upload_document_file["{DEL}01.179 Upload document file"]
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_01_179_Upload_document_file : unnamed
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_UploadDocumentFileRequest : unnamed
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_UploadDocumentFileResponse : unnamed
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_UploadDocumentFileFault : unnamed
    DEL_UploadDocumentFileRequest ..> DEL_DocumentUpload : unnamed
    DEL_DocumentUpload ..> Files : unnamed
    DEL_ProcessDocumentFault ..> DEL_ProcessResultCode : unnamed
    DEL_ProcessDocumentFault <|-- DEL_UploadDocumentFileFault : unnamed
    DEL_ProcessDocumentFault ..> ValidationErrors : unnamed
    Files ..> File : unnamed
```
