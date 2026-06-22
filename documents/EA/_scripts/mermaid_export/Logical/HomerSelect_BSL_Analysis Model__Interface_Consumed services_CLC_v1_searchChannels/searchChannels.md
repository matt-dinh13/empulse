# searchChannels

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CLC/v1/searchChannels
- **Diagram ID**: 146781
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class queryParams["queryParams"]
    class CommunicationChannel["CommunicationChannel"]
    class ADD_searchChannels["{ADD}searchChannels"]
    ADD_searchChannels ..> queryParams : unnamed
    ADD_searchChannels ..> CommunicationChannel : unnamed
```
