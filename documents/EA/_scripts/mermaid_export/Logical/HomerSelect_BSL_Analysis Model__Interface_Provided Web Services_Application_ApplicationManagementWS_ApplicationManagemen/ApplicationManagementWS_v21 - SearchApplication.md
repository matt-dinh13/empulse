# ApplicationManagementWS_v21 - SearchApplication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21
- **Diagram ID**: 158284
- **Elements**: 16
- **Connectors**: 14

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
    class ApplicationManagementWS_v21["ApplicationManagementWS_v21"]
    ApplicationManagementWS_v21 ..> SearchApplicationResponse : unnamed
    ApplicationManagementWS_v21 ..> SearchApplicationRequest : unnamed
    ApplicationManagementWS_v21 ..> SearchApplicationFault : unnamed
    SearchApplicationFault ..> ValidationError : unnamed
    ValidationError ..> MessageAttribute : unnamed
    SearchApplicationFault ..> SearchApplicationResultCode : unnamed
    SearchApplicationRequest ..> SearchApplicationCriteria : unnamed
    SearchApplicationCriteria ..> SearchApplicationEvent : unnamed
    ApplicationEventTypes ..> ApplicationEventType : unnamed
    ApplicationManagementWS_v21 ..> n_01_164_Search_for_application : unnamed
    SearchApplicationCriteria ..> StatusFilter : unnamed
    StatusFilter ..> Status : unnamed
    Status ..> Substatuses : unnamed
    SearchApplicationEvent ..> ApplicationEventTypes : unnamed
```
