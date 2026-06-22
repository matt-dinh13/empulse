# {DEL}ApplicationDocumentManagementWS_v4

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/{DEL}ApplicationDocumentManagementWS/{DEL}ApplicationDocumentManagementWS_v4
- **Diagram ID**: 158342
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa["ApplicationDocumentManagementWS_v4 :{DEL}ApplicationDocumentManagementWS_v4 - UploadDocumentFile"]
    class ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa["ApplicationDocumentManagementWS_v4 :{DEL}ApplicationDocumentManagementWS_v4 - UpdateDocument"]
    class ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa["ApplicationDocumentManagementWS_v4 :{DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent"]
    class ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa["ApplicationDocumentManagementWS_v4 :{DEL}ApplicationDocumentManagementWS_v4 - CreateDocument"]
    class DEL_ApplicationDocumentManagementWS_v4["{DEL}ApplicationDocumentManagementWS_v4"]
    DEL_ApplicationDocumentManagementWS_v4 --> ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa : unnamed
    DEL_ApplicationDocumentManagementWS_v4 --> ApplicationDocumentManagementWS_v4_DEL_ApplicationDocumentMa : unnamed
```
