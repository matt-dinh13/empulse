# getExternalCommunicationDetail

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/getExternalCommunicationDetail
- **Diagram ID**: 157663
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class Result["Result"]
    class User["User"]
    class ClcCommunicationClient["ClcCommunicationClient"]
    class External_Reference["External Reference"]
    class MOD_Get_external_communication_detail["{MOD}Get external communication detail"]
    class SubType["SubType"]
    class Type["Type"]
    class Channel["Channel"]
    class CompositeCommunicationRecord["CompositeCommunicationRecord"]
    class System["System"]
    class getExternalCommunicationDetail["getExternalCommunicationDetail"]
    MOD_Get_external_communication_detail ..> getExternalCommunicationDetail : unnamed
    getExternalCommunicationDetail ..> System : unnamed
    getExternalCommunicationDetail ..> CompositeCommunicationRecord : unnamed
    CompositeCommunicationRecord ..> Channel : unnamed
    CompositeCommunicationRecord ..> Type : unnamed
    Type ..> SubType : unnamed
    MOD_Get_external_communication_detail ..> External_Reference : unnamed
    CompositeCommunicationRecord ..> ClcCommunicationClient : unnamed
    CompositeCommunicationRecord ..> User : unnamed
    CompositeCommunicationRecord ..> Result : unnamed
```
