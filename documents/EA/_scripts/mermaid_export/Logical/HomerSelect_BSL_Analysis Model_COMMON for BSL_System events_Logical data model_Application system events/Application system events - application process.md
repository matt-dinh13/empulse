# Application system events - application process

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model/Application system events
- **Diagram ID**: 158379
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class ApplicationDataSubmittedSE["ApplicationDataSubmittedSE"]
    class ApplicationUpdatedSE["ApplicationUpdatedSE"]
    class ApplicationDocumentationPreparedSE["ApplicationDocumentationPreparedSE"]
    class OfferChosenSE["OfferChosenSE"]
    class OfferDisplayedSE["OfferDisplayedSE"]
    class OffersCalculatedSE["OffersCalculatedSE"]
    class ApplicationSignedSE["ApplicationSignedSE"]
    class ApplicationCanceledAutomaticallySE["ApplicationCanceledAutomaticallySE"]
    class ApplicationCreatedSE["ApplicationCreatedSE"]
    class ApplicationCanceledSE["ApplicationCanceledSE"]
    class SystemEvent["SystemEvent"]
    class ApplicationSystemEvent["ApplicationSystemEvent"]
    SystemEvent <|-- ApplicationSystemEvent : unnamed
    ApplicationSystemEvent <|-- ApplicationCanceledSE : unnamed
    ApplicationSystemEvent <|-- ApplicationCreatedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationCanceledAutomaticallySE : unnamed
    ApplicationSystemEvent <|-- ApplicationSignedSE : unnamed
    ApplicationSystemEvent <|-- OffersCalculatedSE : unnamed
    ApplicationSystemEvent <|-- OfferDisplayedSE : unnamed
    ApplicationSystemEvent <|-- OfferChosenSE : unnamed
    ApplicationSystemEvent <|-- ApplicationDocumentationPreparedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationUpdatedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationDataSubmittedSE : unnamed
```
