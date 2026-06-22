# Common

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/Common 
- **Diagram ID**: 157662
- **Elements**: 16
- **Connectors**: 14

```mermaid
classDiagram
    class Result["Result"]
    class Contact["Contact"]
    class Status["Status"]
    class SubSpecification["SubSpecification"]
    class ExternalId["ExternalId"]
    class User["User"]
    class CommunicationResult["CommunicationResult"]
    class MOD_CommunicationResultPart["{MOD}CommunicationResultPart"]
    class Specification["Specification"]
    class SubType["SubType"]
    class Type["Type"]
    class Channel["Channel"]
    class System["System"]
    class CompositeCommunicationRecord["CompositeCommunicationRecord"]
    class Only_CLC_system["Only CLC system"]
    class ClcCommunicationClient["ClcCommunicationClient"]
    CompositeCommunicationRecord ..> ClcCommunicationClient : unnamed
    ExternalId ..> System : unnamed
    CompositeCommunicationRecord ..> Channel : unnamed
    CompositeCommunicationRecord ..> Type : unnamed
    Type ..> SubType : unnamed
    SubType ..> Specification : unnamed
    CompositeCommunicationRecord ..> MOD_CommunicationResultPart : unnamed
    MOD_CommunicationResultPart --> CommunicationResult : unnamed
    CompositeCommunicationRecord ..> User : unnamed
    CompositeCommunicationRecord ..> ExternalId : unnamed
    Specification ..> SubSpecification : unnamed
    CompositeCommunicationRecord ..> Status : unnamed
    CompositeCommunicationRecord ..> Contact : unnamed
    CompositeCommunicationRecord ..> Result : unnamed
```
