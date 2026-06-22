# getCommunicationDetail

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/getCommunicationDetail
- **Diagram ID**: 146725
- **Elements**: 14
- **Connectors**: 13

```mermaid
classDiagram
    class System["System"]
    class Type["Type"]
    class SubType["SubType"]
    class SubSpecification["SubSpecification"]
    class Status["Status"]
    class Specification["Specification"]
    class Result["Result"]
    class Channel["Channel"]
    class ExternalId["ExternalId"]
    class Contact["Contact"]
    class CompositeCommunicationRecord["CompositeCommunicationRecord"]
    class queryParams["queryParams"]
    class ADD_getCommunicationDetail["{ADD}getCommunicationDetail"]
    class Only_if_system_CLC["Only if system=CLC"]
    ADD_getCommunicationDetail ..> queryParams : unnamed
    ADD_getCommunicationDetail ..> CompositeCommunicationRecord : unnamed
    CompositeCommunicationRecord ..> Contact : unnamed
    CompositeCommunicationRecord ..> ExternalId : unnamed
    CompositeCommunicationRecord ..> Channel : unnamed
    CompositeCommunicationRecord ..> Result : unnamed
    SubType ..> Specification : unnamed
    CompositeCommunicationRecord ..> Status : unnamed
    Specification ..> SubSpecification : unnamed
    Type ..> SubType : unnamed
    CompositeCommunicationRecord ..> Type : unnamed
    ExternalId ..> System : unnamed
    queryParams ..> System : unnamed
```
