# {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent

```mermaid
classDiagram
    class File["File"]
    class Files["Files"]
    class Common_v3_ValidationErrors["Common (v3) : ValidationErrors"]
    class Common_v4_ValidationErrors["Common (v4) : ValidationErrors"]
    class ValidationErrors["ValidationErrors"]
    class DEL_ProcessDocumentFault["{DEL}ProcessDocumentFault"]
    class ValidationErrors["ValidationErrors"]
    class DEL_ProcessResultCode["{DEL}ProcessResultCode"]
    class DEL_ApplicationDocumentManagementWS_v4["{DEL}ApplicationDocumentManagementWS_v4"]
    class DEL_GetDocumentContentFault["{DEL}GetDocumentContentFault"]
    class DEL_GetDocumentContentResponse["{DEL}GetDocumentContentResponse"]
    class DEL_GetDocumentContentRequest["{DEL}GetDocumentContentRequest"]
    class DEL_01_169_Get_document_content["{DEL}01.169 Get document content"]
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_01_169_Get_document_content : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_GetDocumentContentRequest : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_GetDocumentContentResponse : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> DEL_GetDocumentContentFault : unnamed
    DEL_ProcessDocumentFault --> DEL_ProcessResultCode : unnamed
    DEL_GetDocumentContentFault --> DEL_ProcessDocumentFault : unnamed
    DEL_ProcessDocumentFault --> ValidationErrors : unnamed
    DEL_GetDocumentContentResponse --> Files : unnamed
    Files --> File : unnamed
```
