# getCommunicationResultValues

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResultValues
- **Diagram ID**: 163403
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationResultValues["CommunicationResultValues"]
    class queryParams["queryParams"]
    class getCommunicationResultValues["getCommunicationResultValues"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    CommunicationCodeListContent <|-- CommunicationResultValues : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationResultValues ..> CommunicationCodeListResponse : unnamed
    getCommunicationResultValues ..> queryParams : unnamed
    getCommunicationResultValues <|.. Get_communication_codeList : unnamed
```
