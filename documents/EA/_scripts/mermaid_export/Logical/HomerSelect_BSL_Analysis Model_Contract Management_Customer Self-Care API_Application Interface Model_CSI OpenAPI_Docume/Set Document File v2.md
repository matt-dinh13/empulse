# Set Document File v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SetDocumentFile_v2
- **Diagram ID**: 131740
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class DocumentFile["DocumentFile"]
    class Document["Document"]
    class SetDocumentFileResponse["SetDocumentFileResponse"]
    class MOD_SetDocumentFileRequest_validation["{MOD}SetDocumentFileRequest validation"]
    class n_01_791_Set_Document_File_service["01.791 Set Document File service"]
    class SetDocumentFileRequest["SetDocumentFileRequest"]
    class documents["documents"]
    class Document_Services["Document Services"]
    n_01_791_Set_Document_File_service ..> MOD_SetDocumentFileRequest_validation : unnamed
    Document_Services ..> SetDocumentFileResponse : unnamed
    Document_Services ..> n_01_791_Set_Document_File_service : unnamed
    documents o-- Document_Services : unnamed
    Document_Services ..> SetDocumentFileRequest : unnamed
    Document o-- DocumentFile : unnamed
```
