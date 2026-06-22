# Offer Store API - Limit Controller (Management of customer limits)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store
- **Diagram ID**: 154149
- **Elements**: 11
- **Connectors**: 11

```mermaid
classDiagram
    class NewLimitBulk["NewLimitBulk"]
    class LimitBulk["LimitBulk"]
    class Limit["Limit"]
    class LimitBulk["LimitBulk"]
    class PartyLimits["PartyLimits"]
    class LimitBulks["LimitBulks"]
    class Limits["Limits"]
    class PartyLimits["PartyLimits"]
    class OFS["OFS"]
    class RequestProcessingStatus["RequestProcessingStatus"]
    class Limit["Limit"]
    PartyLimits --> PartyLimits : unnamed
    Limits o-- PartyLimits : /partyId/{partyId}
    OFS o-- Limits : /limits
    Limits --> NewLimitBulk : unnamed
    Limits ..> LimitBulk : unnamed
    LimitBulks --> LimitBulk : unnamed
    PartyLimits o-- LimitBulks : /limitBulkId/{limitBulkId}
    PartyLimits ..> Limit : unnamed
    LimitBulk ..> Limit : unnamed
    LimitBulk ..> Limit : unnamed
    NewLimitBulk ..> RequestProcessingStatus : unnamed
```
