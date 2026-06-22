# ApplicationManagementWS_v22 - CreateAndEvaluateApplication

```mermaid
classDiagram
    class Types_Application["Types : Application"]
    class n_01_095_Create_and_evaluate_application["01.095 Create and evaluate application"]
    class Application["Application"]
    class ProcessType["ProcessType"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class CreateAndEvaluateApplicationResultCode["CreateAndEvaluateApplicationResultCode"]
    class CreateAndEvaluateApplicationRequest["CreateAndEvaluateApplicationRequest"]
    class CreateAndEvaluateApplicationResponse["CreateAndEvaluateApplicationResponse"]
    class CreateAndEvaluateApplicationFault["CreateAndEvaluateApplicationFault"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 --> CreateAndEvaluateApplicationFault : unnamed
    ApplicationManagementWS_v22 --> CreateAndEvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v22 --> CreateAndEvaluateApplicationRequest : unnamed
    CreateAndEvaluateApplicationFault --> CreateAndEvaluateApplicationResultCode : unnamed
    CreateAndEvaluateApplicationFault --> ValidationError : unnamed
    ValidationError --> MessageAttribute : unnamed
    CreateAndEvaluateApplicationRequest --> ProcessType : unnamed
    CreateAndEvaluateApplicationRequest --> Application : unnamed
    Types_Application --> Application : unnamed
    ApplicationManagementWS_v22 --> n_01_095_Create_and_evaluate_application : unnamed
```
