# getCommunicationSubTypes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypes
- **Diagram ID**: 163405
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationSubType["CommunicationSubType"]
    class queryParams["queryParams"]
    class getCommunicationSubTypes["getCommunicationSubTypes"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    getCommunicationSubTypes ..> CommunicationCodeListResponse : unnamed
    CommunicationCodeListContent <|-- CommunicationSubType : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationSubTypes ..> queryParams : unnamed
    getCommunicationSubTypes <|.. Get_communication_codeList : unnamed
```
