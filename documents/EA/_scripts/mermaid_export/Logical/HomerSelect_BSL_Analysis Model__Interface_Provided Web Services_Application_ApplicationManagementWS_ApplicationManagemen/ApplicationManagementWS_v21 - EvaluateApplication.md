# ApplicationManagementWS_v21 - EvaluateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158288
- **Elements**: 8
- **Connectors**: 7

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
    n_01_313_Evaluate_application <|.. ApplicationManagementWS_v21 : unnamed
    ApplicationManagementWS_v21 ..> EvaluateApplicationRequest : unnamed
    ApplicationManagementWS_v21 ..> EvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v21 ..> EvaluateApplicationFault : unnamed
    EvaluateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    EvaluateApplicationFault ..> EvaluateApplicationResultCode : unnamed
```
