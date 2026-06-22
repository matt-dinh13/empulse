# getCommunicationSubTypeSpec

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationSubTypeSpec
- **Diagram ID**: 163406
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationSubTypeSpec["CommunicationSubTypeSpec"]
    class queryParams["queryParams"]
    class CommunicationSubTypeSpec["CommunicationSubTypeSpec"]
    CommunicationCodeListContent <|-- CommunicationSubTypeSpec : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    CommunicationSubTypeSpec ..> CommunicationCodeListResponse : unnamed
    CommunicationSubTypeSpec ..> queryParams : unnamed
    CommunicationSubTypeSpec <|.. Get_communication_codeList : unnamed
```
