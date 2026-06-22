# {DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4
- **Diagram ID**: 158340
- **Elements**: 17
- **Connectors**: 11

```mermaid
classDiagram
    class Common_v3_ValidationErrors["Common (v3) : ValidationErrors"]
    class Common_v4_ValidationErrors["Common (v4) : ValidationErrors"]
    class ValidationErrors["ValidationErrors"]
    class DEL_ProcessDocumentFault["{DEL}ProcessDocumentFault"]
    class DEL_ProcessResultCode["{DEL}ProcessResultCode"]
    class Common_v3_Document["Common (v3) : Document"]
    class DEL_DocumentFiles["{DEL}DocumentFiles"]
    class Files["Files"]
    class Common_v4_Document["Common (v4) : Document"]
    class File["File"]
    class DEL_ApplicationDocumentManagementWS_v4["{DEL}ApplicationDocumentManagementWS_v4"]
    class DEL_Document["{DEL}Document"]
    class DEL_UpdateDocumentResponse["{DEL}UpdateDocumentResponse"]
    class DEL_UpdateDocumentRequest["{DEL}UpdateDocumentRequest"]
    class DEL_UpdateDocumentFault["{DEL}UpdateDocumentFault"]
    class DEL_01_174_Update_document["{DEL}01.174 Update document"]
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_01_174_Update_document : unnamed
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_UpdateDocumentFault : unnamed
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_UpdateDocumentRequest : unnamed
    DEL_ApplicationDocumentManagementWS_v4 ..> DEL_UpdateDocumentResponse : unnamed
    DEL_UpdateDocumentRequest ..> DEL_Document : unnamed
    DEL_DocumentFiles ..> Files : unnamed
    DEL_DocumentFiles <|-- DEL_Document : unnamed
    DEL_ProcessDocumentFault ..> DEL_ProcessResultCode : unnamed
    DEL_ProcessDocumentFault <|-- DEL_UpdateDocumentFault : unnamed
    DEL_ProcessDocumentFault ..> ValidationErrors : unnamed
    Files ..> File : unnamed
```
