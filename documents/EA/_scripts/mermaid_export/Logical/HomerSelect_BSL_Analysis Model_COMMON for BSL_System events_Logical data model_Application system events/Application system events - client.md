# Application system events - client

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model/Application system events
- **Diagram ID**: 158382
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ClientFoundSE["ClientFoundSE"]
    class ApplicationDeduplicationSE["ApplicationDeduplicationSE"]
    class ClientRejectedSE["ClientRejectedSE"]
    class ClientIdentifiedSE["ClientIdentifiedSE"]
    class SystemEvent["SystemEvent"]
    class ApplicationSystemEvent["ApplicationSystemEvent"]
    SystemEvent <|-- ApplicationSystemEvent : unnamed
    ApplicationSystemEvent <|-- ClientIdentifiedSE : unnamed
    ApplicationSystemEvent <|-- ClientRejectedSE : unnamed
    ApplicationSystemEvent <|-- ApplicationDeduplicationSE : unnamed
    ApplicationSystemEvent <|-- ClientFoundSE : unnamed
```
