# ApplicationManagementWS_v23 - UpdateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153285
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Types_Application["Types : Application"]
    class UpdateApplicationResultCode["UpdateApplicationResultCode"]
    class UpdateApplicationFault["UpdateApplicationFault"]
    class UpdateApplicationResponse["UpdateApplicationResponse"]
    class MOD_Application["{MOD}Application"]
    class MOD_01_310_Update_application_v9["{MOD}01.310 Update application v9"]
    class UpdateApplicationRequest["UpdateApplicationRequest"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    UpdateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    ApplicationManagementWS_v23 ..> UpdateApplicationRequest : unnamed
    MOD_01_310_Update_application_v9 <|.. ApplicationManagementWS_v23 : unnamed
    UpdateApplicationRequest ..> MOD_Application : unnamed
    Types_Application --> MOD_Application : unnamed
    ApplicationManagementWS_v23 ..> UpdateApplicationResponse : unnamed
    ApplicationManagementWS_v23 ..> UpdateApplicationFault : unnamed
    UpdateApplicationFault ..> UpdateApplicationResultCode : unnamed
```
