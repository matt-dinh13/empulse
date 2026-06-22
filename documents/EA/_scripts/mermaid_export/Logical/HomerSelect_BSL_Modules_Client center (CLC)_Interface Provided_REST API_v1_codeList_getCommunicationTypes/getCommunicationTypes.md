# getCommunicationTypes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationTypes
- **Diagram ID**: 163408
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class queryParams["queryParams"]
    class CommunicationTypes["CommunicationTypes"]
    class getCommunicationTypes["getCommunicationTypes"]
    CommunicationCodeListContent <|-- CommunicationTypes : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationTypes ..> CommunicationCodeListResponse : unnamed
    getCommunicationTypes ..> queryParams : unnamed
    getCommunicationTypes <|.. Get_communication_codeList : unnamed
```
