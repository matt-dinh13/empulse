# getCommunicationResultTypesPart

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList/getCommunicationResultTypesPart
- **Diagram ID**: 163402
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Get_communication_codeList["Get communication codeList"]
    class CommunicationResultTypesPart["CommunicationResultTypesPart"]
    class queryparams["queryparams"]
    class getCommunicationTypesPart["getCommunicationTypesPart"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    CommunicationCodeListContent <|-- CommunicationResultTypesPart : unnamed
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    getCommunicationTypesPart ..> CommunicationCodeListResponse : unnamed
    getCommunicationTypesPart ..> queryparams : unnamed
    getCommunicationTypesPart <|.. Get_communication_codeList : unnamed
```
