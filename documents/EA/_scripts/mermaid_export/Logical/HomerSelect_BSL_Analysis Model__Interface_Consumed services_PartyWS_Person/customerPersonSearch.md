# customerPersonSearch

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person
- **Diagram ID**: 137760
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class roleSearchResultCode["roleSearchResultCode"]
    class MOD_partyRole["{MOD}partyRole"]
    class abstractFindAllRequest["abstractFindAllRequest"]
    class queryProjection["queryProjection"]
    class roleSearchResult["roleSearchResult"]
    class abstractMetaResult["abstractMetaResult"]
    class customerPersonSearchResponse["customerPersonSearchResponse"]
    class customerPersonSearchRequest["customerPersonSearchRequest"]
    abstractFindAllRequest <|-- customerPersonSearchRequest : unnamed
    customerPersonSearchRequest ..> queryProjection : unnamed
    roleSearchResult <|-- customerPersonSearchResponse : unnamed
    roleSearchResult ..> MOD_partyRole : unnamed
    abstractMetaResult <|-- roleSearchResult : unnamed
    roleSearchResult ..> roleSearchResultCode : unnamed
```
