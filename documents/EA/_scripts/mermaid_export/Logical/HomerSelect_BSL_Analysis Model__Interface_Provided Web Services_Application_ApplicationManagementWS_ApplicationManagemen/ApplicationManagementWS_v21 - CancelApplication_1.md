# ApplicationManagementWS_v21 - CancelApplication

```mermaid
classDiagram
    class n_01_097_Cancel_application_externally["01.097 Cancel application externally"]
    class CancelApplicationResultCode["CancelApplicationResultCode"]
    class CancelApplicationResponse["CancelApplicationResponse"]
    class CancelApplicationRequest["CancelApplicationRequest"]
    class CancelApplicationFault["CancelApplicationFault"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 --> CancelApplicationFault : unnamed
    ApplicationManagementWS_v21 --> CancelApplicationRequest : unnamed
    ApplicationManagementWS_v21 --> CancelApplicationResponse : unnamed
    CancelApplicationFault --> CancelApplicationResultCode : unnamed
    ApplicationManagementWS_v21 --> n_01_097_Cancel_application_externally : unnamed
```
