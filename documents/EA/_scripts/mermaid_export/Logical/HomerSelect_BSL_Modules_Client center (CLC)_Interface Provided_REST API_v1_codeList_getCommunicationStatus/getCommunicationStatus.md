# getCommunicationStatus

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationStatus
- **Diagram ID**: 163404
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationStatus["CommunicationStatus"]
    class getCommunicationStatus["getCommunicationStatus"]
    class queryParams["queryParams"]
    CommunicationCodeListContent <|-- CommunicationStatus : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationStatus ..> CommunicationCodeListResponse : unnamed
    getCommunicationStatus ..> queryParams : unnamed
    getCommunicationStatus <|.. Get_communication_codeList : unnamed
```
