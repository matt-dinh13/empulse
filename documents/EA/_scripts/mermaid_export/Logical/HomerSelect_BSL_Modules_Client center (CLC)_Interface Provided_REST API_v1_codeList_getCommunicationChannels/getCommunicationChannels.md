# getCommunicationChannels

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationChannels
- **Diagram ID**: 163400
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationChannels["CommunicationChannels"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class getCommunicationChannels["getCommunicationChannels"]
    class queryParams["queryParams"]
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    CommunicationCodeListContent <|-- CommunicationChannels : unnamed
    getCommunicationChannels ..> CommunicationCodeListResponse : unnamed
    getCommunicationChannels ..> queryParams : unnamed
    getCommunicationChannels <|.. Get_communication_codeList : unnamed
```
