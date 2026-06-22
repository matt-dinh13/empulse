# Application system events - evaluation results

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model/Application system events
- **Diagram ID**: 158381
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class OfferRejectedWithAlternativeSE["OfferRejectedWithAlternativeSE"]
    class OfferApprovedWithAlternativeSE["OfferApprovedWithAlternativeSE "]
    class ApplicationRejectedFinalSE["ApplicationRejectedFinalSE"]
    class ApplicationApprovedFinalSE["ApplicationApprovedFinalSE"]
    class ApplicationPreApprovedSE["ApplicationPreApprovedSE"]
    class ApplicationApprovedSE["ApplicationApprovedSE"]
    class ApplicationEvaluationFailedSE["ApplicationEvaluationFailedSE"]
    class SystemEvent["SystemEvent"]
    class ApplicationSystemEvent["ApplicationSystemEvent"]
    ApplicationSystemEvent <|-- ApplicationRejectedFinalSE : unnamed
    ApplicationSystemEvent <|-- OfferApprovedWithAlternativeSE : unnamed
    ApplicationSystemEvent <|-- OfferRejectedWithAlternativeSE : unnamed
    SystemEvent <|-- ApplicationSystemEvent : unnamed
    ApplicationSystemEvent <|-- ApplicationEvaluationFailedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationApprovedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationPreApprovedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationApprovedFinalSE : unnamed
```
