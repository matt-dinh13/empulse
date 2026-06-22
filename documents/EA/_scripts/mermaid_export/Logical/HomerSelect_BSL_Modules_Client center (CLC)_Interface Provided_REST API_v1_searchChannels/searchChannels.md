# searchChannels

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/REST API/v1/searchChannels
- **Diagram ID**: 156175
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_Search_channels["{ADD}Search channels"]
    class queryParams["queryParams"]
    class CommunicationChannel["CommunicationChannel"]
    class searchChannels["searchChannels"]
    searchChannels ..> CommunicationChannel : unnamed
    searchChannels ..> queryParams : unnamed
    ADD_Search_channels ..> searchChannels : unnamed
```
