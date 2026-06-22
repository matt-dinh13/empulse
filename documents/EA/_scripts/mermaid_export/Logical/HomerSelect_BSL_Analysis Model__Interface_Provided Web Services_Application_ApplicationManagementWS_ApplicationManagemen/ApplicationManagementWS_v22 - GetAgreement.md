# ApplicationManagementWS_v22 - GetAgreement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158249
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class GetAgreementResultCode["GetAgreementResultCode"]
    class PreparedDocument["PreparedDocument"]
    class PrintoutDataSource["PrintoutDataSource"]
    class PrintoutDataSources["PrintoutDataSources"]
    class PreparedDocuments["PreparedDocuments"]
    class GetAgreementResponse["GetAgreementResponse"]
    class GetAgreementRequest["GetAgreementRequest"]
    class GetAgreementFault["GetAgreementFault"]
    class n_01_335_Get_agreement_documentation_externally["01.335 Get agreement documentation externally"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> n_01_335_Get_agreement_documentation_externally : unnamed
    ApplicationManagementWS_v22 ..> GetAgreementFault : unnamed
    ApplicationManagementWS_v22 ..> GetAgreementRequest : unnamed
    ApplicationManagementWS_v22 ..> GetAgreementResponse : unnamed
    GetAgreementResponse ..> PreparedDocuments : unnamed
    GetAgreementResponse ..> PrintoutDataSources : unnamed
    PrintoutDataSources ..> PrintoutDataSource : unnamed
    PreparedDocuments ..> PreparedDocument : unnamed
    GetAgreementFault ..> GetAgreementResultCode : unnamed
    GetAgreementFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
```
