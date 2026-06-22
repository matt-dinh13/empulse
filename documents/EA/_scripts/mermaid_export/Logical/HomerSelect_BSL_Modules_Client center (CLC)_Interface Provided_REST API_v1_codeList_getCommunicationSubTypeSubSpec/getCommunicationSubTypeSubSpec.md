# getCommunicationSubTypeSubSpec

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypeSubSpec
- **Diagram ID**: 163407
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class getCommunicationSubTypeSubSpec["getCommunicationSubTypeSubSpec"]
    class queryParams["queryParams"]
    class CommunicationSubTypeSubSpec["CommunicationSubTypeSubSpec"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    CommunicationCodeListContent <|-- CommunicationSubTypeSubSpec : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationSubTypeSubSpec ..> CommunicationCodeListResponse : unnamed
    getCommunicationSubTypeSubSpec ..> queryParams : unnamed
    getCommunicationSubTypeSubSpec <|.. Get_communication_codeList : unnamed
```
