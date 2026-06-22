# searchTypes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchTypes
- **Diagram ID**: 156176
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_Search_types["{ADD}Search types"]
    class queryParams["queryParams"]
    class CommunicationType["CommunicationType"]
    class searchTypes["searchTypes"]
    searchTypes ..> CommunicationType : unnamed
    searchTypes ..> queryParams : unnamed
    ADD_Search_types ..> searchTypes : unnamed
```
