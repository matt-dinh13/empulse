# ApplicationManagementWS_v22 - CancelApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158241
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_097_Cancel_application_externally["01.097 Cancel application externally"]
    class CancelApplicationResultCode["CancelApplicationResultCode"]
    class CancelApplicationResponse["CancelApplicationResponse"]
    class CancelApplicationRequest["CancelApplicationRequest"]
    class CancelApplicationFault["CancelApplicationFault"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> CancelApplicationFault : unnamed
    ApplicationManagementWS_v22 ..> CancelApplicationRequest : unnamed
    ApplicationManagementWS_v22 ..> CancelApplicationResponse : unnamed
    CancelApplicationFault ..> CancelApplicationResultCode : unnamed
    n_01_097_Cancel_application_externally <|.. ApplicationManagementWS_v22 : unnamed
```
