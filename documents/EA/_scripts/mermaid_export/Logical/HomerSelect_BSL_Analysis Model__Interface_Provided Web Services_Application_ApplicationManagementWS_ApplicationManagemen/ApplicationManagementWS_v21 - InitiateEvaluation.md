# ApplicationManagementWS_v21 - InitiateEvaluation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158285
- **Elements**: 7
- **Connectors**: 3

```mermaid
classDiagram
    class Types_Application["Types : Application"]
    class MessageAttribute["MessageAttribute"]
    class External_Reference["External Reference"]
    class ValidationError["ValidationError"]
    class CreateAndEvaluateApplicationResultCode["CreateAndEvaluateApplicationResultCode"]
    class Application["Application"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    Types_Application --> Application : unnamed
    ApplicationManagementWS_v21 ..> External_Reference : External Reference
    ValidationError ..> MessageAttribute : unnamed
```
