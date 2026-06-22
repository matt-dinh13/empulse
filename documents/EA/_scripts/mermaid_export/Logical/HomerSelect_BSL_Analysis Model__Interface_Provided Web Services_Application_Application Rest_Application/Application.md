# Application

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Application
- **Diagram ID**: 163842
- **Elements**: 18
- **Connectors**: 25

```mermaid
classDiagram
    class Contract_Negotiation_Process_Type["Contract Negotiation Process Type"]
    class ADD_Process_type["{ADD}Process type"]
    class ApplicationDetailsRestTO["ApplicationDetailsRestTO"]
    class MOD_Applications["{MOD}Applications"]
    class Offer["Offer"]
    class StatusHistory["StatusHistory"]
    class ChannelEventType["ChannelEventType"]
    class ApplicationEventType["ApplicationEventType"]
    class ApplicationEvent["ApplicationEvent"]
    class MOD_ApplicationDetailRestTO["{MOD}ApplicationDetailRestTO"]
    class AbstractApplicationRestTO["AbstractApplicationRestTO"]
    class Common_Rest_Application["Common Rest :Application"]
    class n_01_040_Get_application_data["01.040 Get application data"]
    class KeyValue["KeyValue"]
    class UserStatistics["UserStatistics"]
    class GetApplicationDataProjection["GetApplicationDataProjection"]
    class Application["Application"]
    class BSL["BSL"]
    n_01_040_Get_application_data <|.. MOD_Applications : unnamed
    MOD_Applications o-- Application : /{code}
    MOD_ApplicationDetailRestTO ..> Offer : unnamed
    MOD_ApplicationDetailRestTO ..> StatusHistory : unnamed
    ApplicationEvent ..> ChannelEventType : unnamed
    ApplicationEvent ..> ApplicationEventType : unnamed
    MOD_ApplicationDetailRestTO ..> ApplicationEvent : unnamed
    Application --> MOD_ApplicationDetailRestTO : unnamed
    ApplicationDetailsRestTO ..> MOD_ApplicationDetailRestTO : unnamed
    AbstractApplicationRestTO <|-- MOD_ApplicationDetailRestTO : unnamed
    AbstractApplicationRestTO --> Common_Rest_Application : unnamed
    MOD_Applications ..> ApplicationDetailsRestTO : unnamed
    n_01_040_Get_application_data <|.. UserStatistics : unnamed
    MOD_ApplicationDetailRestTO ..> ADD_Process_type : unnamed
    ADD_Process_type ..> Contract_Negotiation_Process_Type : based on
    AbstractApplicationRestTO ..> KeyValue : unnamed
    MOD_ApplicationDetailRestTO ..> KeyValue : unnamed
    AbstractApplicationRestTO ..> KeyValue : unnamed
    UserStatistics ..> KeyValue : unnamed
    AbstractApplicationRestTO ..> KeyValue : unnamed
    MOD_Applications ..> GetApplicationDataProjection : unnamed
    Application ..> GetApplicationDataProjection : unnamed
    Application o-- UserStatistics : /userStatistics/{key}
    BSL o-- MOD_Applications : /v1/applications
    n_01_040_Get_application_data <|.. Application : unnamed
```
