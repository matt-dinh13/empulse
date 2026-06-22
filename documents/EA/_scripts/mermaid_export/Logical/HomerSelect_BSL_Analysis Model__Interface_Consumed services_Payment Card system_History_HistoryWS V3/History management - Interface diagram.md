# History management - Interface diagram

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/History/HistoryWS V3
- **Diagram ID**: 127655
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class Card_Blockage_Reason["Card Blockage Reason"]
    class CardStatusHistoryDto["CardStatusHistoryDto"]
    class CardStatusDto["CardStatusDto"]
    class GetCardStatusHistoryRequest["GetCardStatusHistoryRequest"]
    class GetCardStatusHistoryResponse["GetCardStatusHistoryResponse"]
    class ADD_HistoryWS_V3["{ADD}HistoryWS V3"]
    class LDM["LDM"]
    ADD_HistoryWS_V3 ..> GetCardStatusHistoryResponse : unnamed
    ADD_HistoryWS_V3 ..> GetCardStatusHistoryRequest : unnamed
    CardStatusHistoryDto ..> CardStatusDto : unnamed
    GetCardStatusHistoryResponse --> CardStatusHistoryDto : unnamed
    CardStatusHistoryDto ..> Card_Blockage_Reason : unnamed
```
