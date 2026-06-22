# ApplicationManagementWS_v23 - EvaluateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153287
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
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    n_01_313_Evaluate_application <|.. ApplicationManagementWS_v23 : unnamed
    ApplicationManagementWS_v23 ..> MOD_EvaluateApplicationRequest : unnamed
    ApplicationManagementWS_v23 ..> EvaluateApplicationResponse : unnamed
    ApplicationManagementWS_v23 ..> EvaluateApplicationFault : unnamed
    EvaluateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    EvaluateApplicationFault ..> EvaluateApplicationResultCode : unnamed
```
