# ApplicationManagementWS_v22 - EvaluateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158245
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class EvaluateApplicationResultCode["EvaluateApplicationResultCode"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class EvaluateApplicationFault["EvaluateApplicationFault"]
    class EvaluateApplicationResponse["EvaluateApplicationResponse"]
    class MOD_EvaluateApplicationRequest["{MOD}EvaluateApplicationRequest"]
    class n_01_313_Evaluate_application["01.313 Evaluate application"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    n_01_313_Evaluate_application <|.. ApplicationManagementWS_v22 : unnamed
    ApplicationManagementWS_v22 ..> MOD_EvaluateApplicationRequest : unnamed
    ApplicationManagementWS_v22 ..> EvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v22 ..> EvaluateApplicationFault : unnamed
    EvaluateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    EvaluateApplicationFault ..> EvaluateApplicationResultCode : unnamed
```
