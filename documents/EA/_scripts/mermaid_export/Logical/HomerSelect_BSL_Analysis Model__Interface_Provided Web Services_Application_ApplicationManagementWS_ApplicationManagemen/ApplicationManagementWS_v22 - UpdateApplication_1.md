# ApplicationManagementWS_v22 - UpdateApplication

```mermaid
classDiagram
    class Types_Application["Types : Application"]
    class UpdateApplicationResultCode["UpdateApplicationResultCode"]
    class UpdateApplicationFault["UpdateApplicationFault"]
    class UpdateApplicationResponse["UpdateApplicationResponse"]
    class Application["Application"]
    class MOD_01_310_Update_application_v9["{MOD}01.310 Update application v9"]
    class UpdateApplicationRequest["UpdateApplicationRequest"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    UpdateApplicationFault --> ValidationError : unnamed
    ValidationError --> MessageAttribute : unnamed
    ApplicationManagementWS_v22 --> UpdateApplicationRequest : unnamed
    ApplicationManagementWS_v22 --> MOD_01_310_Update_application_v9 : unnamed
    Types_Application --> Application : unnamed
    UpdateApplicationRequest --> Application : unnamed
    ApplicationManagementWS_v22 --> UpdateApplicationResponse : unnamed
    ApplicationManagementWS_v22 --> UpdateApplicationFault : unnamed
    UpdateApplicationFault --> UpdateApplicationResultCode : unnamed
```
