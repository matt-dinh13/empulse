# CommunicationCodeListResponse

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/codeList
- **Diagram ID**: 163398
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class CommunicationResultValues["CommunicationResultValues"]
    class CommunicationResultTypesPart["CommunicationResultTypesPart"]
    class CommunicationStatus["CommunicationStatus"]
    class CommunicationTypes["CommunicationTypes"]
    class CommunicationCodeListContent["CommunicationCodeListContent"]
    class CommunicationCodeListResponse["CommunicationCodeListResponse"]
    class CommunicationChannels["CommunicationChannels"]
    class CommunicationSubType["CommunicationSubType"]
    class CommunicationSubTypeSpec["CommunicationSubTypeSpec"]
    class CommunicationResults["CommunicationResults"]
    CommunicationCodeListResponse ..> CommunicationCodeListContent : unnamed
    CommunicationCodeListContent <|-- CommunicationChannels : unnamed
    CommunicationCodeListContent <|-- CommunicationResults : unnamed
    CommunicationCodeListContent <|-- CommunicationResultTypesPart : unnamed
    CommunicationCodeListContent <|-- CommunicationResultValues : unnamed
    CommunicationCodeListContent <|-- CommunicationStatus : unnamed
    CommunicationCodeListContent <|-- CommunicationSubType : unnamed
    CommunicationCodeListContent <|-- CommunicationSubTypeSpec : unnamed
    CommunicationCodeListContent <|-- CommunicationTypes : unnamed
```
