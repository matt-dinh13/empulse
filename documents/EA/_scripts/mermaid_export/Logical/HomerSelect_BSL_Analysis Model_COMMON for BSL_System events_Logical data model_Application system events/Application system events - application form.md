# Application system events - application form

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model/Application system events
- **Diagram ID**: 158380
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class SystemEvent["SystemEvent"]
    class SendLoanSummaryNotificationSE["SendLoanSummaryNotificationSE"]
    class ApplicationSavedSE["ApplicationSavedSE"]
    class Application1SPSubmittedSE["Application1SPSubmittedSE"]
    class Application1SPOpenedSE["Application1SPOpenedSE"]
    class Application2BODSubmittedSE["Application2BODSubmittedSE"]
    class Application2BODOpenedSE["Application2BODOpenedSE"]
    class Application1BODOpenedSE["Application1BODOpenedSE"]
    class ApplicationSystemEvent["ApplicationSystemEvent"]
    class Application1BODSubmittedSE["Application1BODSubmittedSE"]
    ApplicationSystemEvent <|-- Application1BODSubmittedSE : unnamed
    SystemEvent <|-- ApplicationSystemEvent : unnamed
    ApplicationSystemEvent <|-- Application1BODOpenedSE : unnamed
    ApplicationSystemEvent <|-- Application2BODOpenedSE : unnamed
    ApplicationSystemEvent <|-- Application2BODSubmittedSE : unnamed
    ApplicationSystemEvent <|-- Application1SPOpenedSE : unnamed
    ApplicationSystemEvent <|-- Application1SPSubmittedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationSavedSE : unnamed
    ApplicationSystemEvent <|-- SendLoanSummaryNotificationSE : unnamed
```
