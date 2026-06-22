# ApplicationManagementWS_v22 - CreateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158248
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class MOD_01_314_Create_application_externally["{MOD}01.314 Create application externally"]
    class CreateApplicationResultCode["CreateApplicationResultCode"]
    class ProcessType["ProcessType"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class Application["Application"]
    class CreateApplicationResponse["CreateApplicationResponse"]
    class CreateApplicationFault["CreateApplicationFault"]
    class CreateApplicationRequest["CreateApplicationRequest"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> CreateApplicationRequest : unnamed
    ApplicationManagementWS_v22 ..> CreateApplicationFault : unnamed
    ApplicationManagementWS_v22 ..> CreateApplicationResponse : unnamed
    CreateApplicationRequest ..> Application : unnamed
    CreateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    CreateApplicationRequest ..> ProcessType : unnamed
    CreateApplicationFault ..> CreateApplicationResultCode : unnamed
    MOD_01_314_Create_application_externally <|.. ApplicationManagementWS_v22 : unnamed
```
