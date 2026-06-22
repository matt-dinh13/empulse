# getCommunicationResults

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResults
- **Diagram ID**: 163969
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationResults["CommunicationResults"]
    class queryParams["queryParams"]
    class getCommunicationResults["getCommunicationResults"]
    getCommunicationResults ..> queryParams : unnamed
    getCommunicationResults ..> CommunicationCodeListResponse : unnamed
    CommunicationCodeListContent <|-- CommunicationResults : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationResults <|.. Get_communication_codeList : unnamed
```
