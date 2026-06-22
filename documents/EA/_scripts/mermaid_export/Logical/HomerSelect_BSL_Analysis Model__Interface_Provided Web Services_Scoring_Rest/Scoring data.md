# Scoring data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Scoring/Rest
- **Diagram ID**: 155867
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class type["type"]
    class ScoringResultAttributeTO["ScoringResultAttributeTO"]
    class ScoringResultDataTO["ScoringResultDataTO"]
    class type["type"]
    class ScoringResultTO["ScoringResultTO"]
    class ScoringDataTO["ScoringDataTO"]
    class Scorings["Scorings"]
    class BSL["BSL"]
    ScoringResultDataTO ..> ScoringResultAttributeTO : unnamed
    ScoringResultDataTO ..> type : unnamed
    ScoringResultTO ..> ScoringDataTO : unnamed
    ScoringDataTO ..> ScoringResultDataTO : unnamed
    ScoringDataTO ..> type : unnamed
    Scorings ..> ScoringResultTO : unnamed
    BSL o-- Scorings : /v1/scoring
```
