# searchCommunication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchCommunication
- **Diagram ID**: 156183
- **Elements**: 18
- **Connectors**: 17

```mermaid
classDiagram
    class ClcCommunicationClient["ClcCommunicationClient"]
    class Status["Status"]
    class Result["Result"]
    class ExternalId["ExternalId"]
    class Contact["Contact"]
    class User["User"]
    class Specification["Specification"]
    class SubType["SubType"]
    class CommunicationResult["CommunicationResult"]
    class MOD_CommunicationResultPart["{MOD}CommunicationResultPart"]
    class Type["Type"]
    class System["System"]
    class Channel["Channel"]
    class CompositeCommunicationRecord["CompositeCommunicationRecord"]
    class External_Reference["External Reference"]
    class MOD_Search_communication["{MOD}Search communication"]
    class queryParams["queryParams"]
    class searchCommunication["searchCommunication"]
    MOD_CommunicationResultPart --> CommunicationResult : unnamed
    searchCommunication ..> CompositeCommunicationRecord : unnamed
    searchCommunication ..> queryParams : unnamed
    MOD_Search_communication ..> External_Reference : unnamed
    MOD_Search_communication ..> searchCommunication : unnamed
    SubType ..> Specification : unnamed
    CompositeCommunicationRecord ..> Result : unnamed
    CompositeCommunicationRecord ..> User : unnamed
    CompositeCommunicationRecord ..> Status : unnamed
    CompositeCommunicationRecord ..> MOD_CommunicationResultPart : unnamed
    CompositeCommunicationRecord ..> Channel : unnamed
    CompositeCommunicationRecord ..> ClcCommunicationClient : unnamed
    CompositeCommunicationRecord ..> Contact : unnamed
    CompositeCommunicationRecord ..> ExternalId : unnamed
    CompositeCommunicationRecord ..> Type : unnamed
    Type ..> SubType : unnamed
    ExternalId ..> System : unnamed
```
