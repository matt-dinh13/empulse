# ApplicationManagementWS_v21 - PrepareDocumentation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158282
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class n_01_096_Prepare_documentation_externally["01.096 Prepare documentation externally"]
    class PrepareDocumentationResultCode["PrepareDocumentationResultCode"]
    class PrintDataSource["PrintDataSource"]
    class PreparedDocument["PreparedDocument"]
    class PrepareDocumentationResponse["PrepareDocumentationResponse"]
    class PrepareDocumentationRequest["PrepareDocumentationRequest"]
    class PrepareDocumentationFault["PrepareDocumentationFault"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 ..> PrepareDocumentationFault : unnamed
    ApplicationManagementWS_v21 ..> PrepareDocumentationRequest : unnamed
    ApplicationManagementWS_v21 ..> PrepareDocumentationResponse : unnamed
    PrepareDocumentationResponse ..> PreparedDocument : unnamed
    PrepareDocumentationResponse ..> PrintDataSource : unnamed
    PrepareDocumentationFault ..> PrepareDocumentationResultCode : unnamed
    n_01_096_Prepare_documentation_externally <|.. ApplicationManagementWS_v21 : unnamed
    PrepareDocumentationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
```
