# ApplicationManagementWS_v22 - UpdateAndEvaluateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158237
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Types_Application["Types : Application"]
    class MOD_01_098_Update_and_evaluate_application_v9["{MOD}01.098 Update and evaluate application v9"]
    class Application["Application"]
    class UpdateAndEvaluateApplicationRequest["UpdateAndEvaluateApplicationRequest"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class UpdateAndEvaluateApplicationResultCode["UpdateAndEvaluateApplicationResultCode"]
    class UpdateAndEvaluateApplicationFault["UpdateAndEvaluateApplicationFault"]
    class UpdateAndEvaluateApplicationResponse["UpdateAndEvaluateApplicationResponse"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> UpdateAndEvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v22 ..> UpdateAndEvaluateApplicationFault : unnamed
    UpdateAndEvaluateApplicationFault ..> UpdateAndEvaluateApplicationResultCode : unnamed
    UpdateAndEvaluateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    ApplicationManagementWS_v22 ..> UpdateAndEvaluateApplicationRequest : unnamed
    UpdateAndEvaluateApplicationRequest ..> Application : unnamed
    Types_Application --> Application : unnamed
    MOD_01_098_Update_and_evaluate_application_v9 <|.. ApplicationManagementWS_v22 : unnamed
```
