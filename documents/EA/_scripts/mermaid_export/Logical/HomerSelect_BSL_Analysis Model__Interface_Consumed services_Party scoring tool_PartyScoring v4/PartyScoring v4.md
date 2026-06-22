# PartyScoring v4

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Party scoring tool/PartyScoring v4
- **Diagram ID**: 164325
- **Elements**: 10
- **Connectors**: 12

```mermaid
classDiagram
    class MOD_ScoringApplications["{MOD}ScoringApplications"]
    class ScoringResultAttributes["ScoringResultAttributes"]
    class Links["Links"]
    class AdditionalScoringAttributes["AdditionalScoringAttributes"]
    class Errors["Errors"]
    class PostScoringApplications["PostScoringApplications"]
    class GetScoringApplications["GetScoringApplications"]
    class AdditionalScoringAttributes["AdditionalScoringAttributes"]
    class ScoringResults["ScoringResults"]
    class Party_scoring["Party scoring"]
    MOD_ScoringApplications --> ScoringResults : unnamed
    MOD_ScoringApplications --> AdditionalScoringAttributes : unnamed
    MOD_ScoringApplications ..> GetScoringApplications : unnamed
    MOD_ScoringApplications ..> PostScoringApplications : unnamed
    PostScoringApplications ..> Errors : unnamed
    AdditionalScoringAttributes ..> AdditionalScoringAttributes : unnamed
    PostScoringApplications ..> Links : unnamed
    GetScoringApplications ..> Links : unnamed
    ScoringResults ..> ScoringResultAttributes : unnamed
    MOD_ScoringApplications <|-- PostScoringApplications : unnamed
    MOD_ScoringApplications <|-- GetScoringApplications : unnamed
    Party_scoring --> MOD_ScoringApplications : unnamed
```
