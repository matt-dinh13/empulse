# ApplicationManagementWS_v21 - CreateApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158291
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class MOD_01_314_Create_application_externally["{MOD}01.314 Create application externally"]
    class ADD_CreateApplicationResultCode["{ADD}CreateApplicationResultCode"]
    class ProcessType["ProcessType"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class Application["Application"]
    class CreateApplicationResponse["CreateApplicationResponse"]
    class CreateApplicationFault["CreateApplicationFault"]
    class CreateApplicationRequest["CreateApplicationRequest"]
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 ..> CreateApplicationRequest : unnamed
    ApplicationManagementWS_v21 ..> CreateApplicationFault : unnamed
    ApplicationManagementWS_v21 ..> CreateApplicationResponse : unnamed
    CreateApplicationRequest ..> Application : unnamed
    CreateApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    CreateApplicationRequest ..> ProcessType : unnamed
    CreateApplicationFault ..> ADD_CreateApplicationResultCode : unnamed
    MOD_01_314_Create_application_externally <|.. ApplicationManagementWS_v21 : unnamed
```
