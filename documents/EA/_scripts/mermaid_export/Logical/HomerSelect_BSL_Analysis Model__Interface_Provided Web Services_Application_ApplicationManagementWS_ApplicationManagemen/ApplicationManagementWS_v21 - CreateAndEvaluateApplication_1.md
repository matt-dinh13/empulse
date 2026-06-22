# ApplicationManagementWS_v21 - CreateAndEvaluateApplication

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
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 --> CreateAndEvaluateApplicationFault : unnamed
    ApplicationManagementWS_v21 --> CreateAndEvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v21 --> CreateAndEvaluateApplicationRequest : unnamed
    CreateAndEvaluateApplicationFault --> CreateAndEvaluateApplicationResultCode : unnamed
    CreateAndEvaluateApplicationFault --> ValidationError : unnamed
    ValidationError --> MessageAttribute : unnamed
    CreateAndEvaluateApplicationRequest --> ProcessType : unnamed
    Types_Application --> Application : unnamed
    CreateAndEvaluateApplicationRequest --> Application : unnamed
    ApplicationManagementWS_v21 --> n_01_095_Create_and_evaluate_application : unnamed
```
