# ScoringNotification v3

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Scoring notification
- **Diagram ID**: 139566
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ScoringNegativeNotification["ScoringNegativeNotification"]
    class ScoringFailedNotification["ScoringFailedNotification"]
    class ScoringStartedNotification["ScoringStartedNotification"]
    class ScoringPositiveNotification["ScoringPositiveNotification"]
    class ScoringNotification["ScoringNotification"]
    ScoringNotification <|-- ScoringNegativeNotification : unnamed
    ScoringNotification <|-- ScoringFailedNotification : unnamed
    ScoringNotification <|-- ScoringStartedNotification : unnamed
    ScoringNotification <|-- ScoringPositiveNotification : unnamed
```
