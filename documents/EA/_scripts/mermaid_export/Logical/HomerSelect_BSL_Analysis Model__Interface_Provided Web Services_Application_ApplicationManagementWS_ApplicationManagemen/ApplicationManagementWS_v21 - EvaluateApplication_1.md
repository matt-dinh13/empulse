# ApplicationManagementWS_v21 - EvaluateApplication

```mermaid
classDiagram
    class EvaluateApplicationResultCode["EvaluateApplicationResultCode"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class EvaluateApplicationFault["EvaluateApplicationFault"]
    class EvaluateApplicationResponse["EvaluateApplicationResponse"]
    class EvaluateApplicationRequest["EvaluateApplicationRequest"]
    class n_01_313_Evaluate_application["01.313 Evaluate application"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 --> n_01_313_Evaluate_application : unnamed
    ApplicationManagementWS_v21 --> EvaluateApplicationRequest : unnamed
    ApplicationManagementWS_v21 --> EvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v21 --> EvaluateApplicationFault : unnamed
    EvaluateApplicationFault --> ValidationError : unnamed
    ValidationError --> MessageAttribute : unnamed
    EvaluateApplicationFault --> EvaluateApplicationResultCode : unnamed
```
