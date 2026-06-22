# ApplicationManagementWS_v22 - SearchApplication

```mermaid
classDiagram
    class ApplicationEventTypes["ApplicationEventTypes"]
    class Substatuses["Substatuses"]
    class Status["Status"]
    class StatusFilter["StatusFilter"]
    class n_01_164_Search_for_application["01.164 Search for application"]
    class ApplicationEventType["ApplicationEventType"]
    class SearchApplicationEvent["SearchApplicationEvent"]
    class SearchApplicationCriteria["SearchApplicationCriteria"]
    class SearchApplicationResultCode["SearchApplicationResultCode"]
    class MessageAttribute["MessageAttribute"]
    class ValidationError["ValidationError"]
    class SearchApplicationFault["SearchApplicationFault"]
    class SearchApplicationRequest["SearchApplicationRequest"]
    class SearchApplicationResponse["SearchApplicationResponse"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 --> SearchApplicationResponse : unnamed
    ApplicationManagementWS_v22 --> SearchApplicationRequest : unnamed
    ApplicationManagementWS_v22 --> SearchApplicationFault : unnamed
    SearchApplicationFault --> ValidationError : unnamed
    ValidationError --> MessageAttribute : unnamed
    SearchApplicationFault --> SearchApplicationResultCode : unnamed
    SearchApplicationRequest --> SearchApplicationCriteria : unnamed
    SearchApplicationCriteria --> SearchApplicationEvent : unnamed
    ApplicationEventTypes --> ApplicationEventType : unnamed
    ApplicationManagementWS_v22 --> n_01_164_Search_for_application : unnamed
    SearchApplicationCriteria --> StatusFilter : unnamed
    StatusFilter --> Status : unnamed
    Status --> Substatuses : unnamed
    SearchApplicationEvent --> ApplicationEventTypes : unnamed
```
