# ApplicationManagementWS_v21 - UpdateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158286
- **Elements**: 10
- **Connectors**: 9

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
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    UpdateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    ApplicationManagementWS_v21 ..> UpdateApplicationRequest : unnamed
    MOD_01_310_Update_application_v9 <|.. ApplicationManagementWS_v21 : unnamed
    UpdateApplicationRequest ..> Application : unnamed
    Types_Application --> Application : unnamed
    ApplicationManagementWS_v21 ..> UpdateApplicationResponse : unnamed
    ApplicationManagementWS_v21 ..> UpdateApplicationFault : unnamed
    UpdateApplicationFault ..> UpdateApplicationResultCode : unnamed
```
