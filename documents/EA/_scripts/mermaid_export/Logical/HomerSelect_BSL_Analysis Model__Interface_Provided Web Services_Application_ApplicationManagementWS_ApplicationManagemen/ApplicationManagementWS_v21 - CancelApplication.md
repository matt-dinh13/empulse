# ApplicationManagementWS_v21 - CancelApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158283
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_097_Cancel_application_externally["01.097 Cancel application externally"]
    class CancelApplicationResultCode["CancelApplicationResultCode"]
    class CancelApplicationResponse["CancelApplicationResponse"]
    class CancelApplicationRequest["CancelApplicationRequest"]
    class CancelApplicationFault["CancelApplicationFault"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 ..> CancelApplicationFault : unnamed
    ApplicationManagementWS_v21 ..> CancelApplicationRequest : unnamed
    ApplicationManagementWS_v21 ..> CancelApplicationResponse : unnamed
    CancelApplicationFault ..> CancelApplicationResultCode : unnamed
    n_01_097_Cancel_application_externally <|.. ApplicationManagementWS_v21 : unnamed
```
