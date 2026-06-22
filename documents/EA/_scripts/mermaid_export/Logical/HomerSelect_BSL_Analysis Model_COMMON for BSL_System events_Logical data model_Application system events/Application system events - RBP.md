# Application system events - RBP

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model/Application system events
- **Diagram ID**: 158383
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class InformationSentSE["InformationSentSE"]
    class RBPUpdateStartedSE["RBPUpdateStartedSE"]
    class RBPFormOpenedSE["RBPFormOpenedSE"]
    class OTPSentSE["OTPSentSE"]
    class OTPVerifiedSE["OTPVerifiedSE"]
    class SystemEvent["SystemEvent"]
    class ApplicationSystemEvent["ApplicationSystemEvent"]
    SystemEvent <|-- ApplicationSystemEvent : unnamed
    ApplicationSystemEvent <|-- OTPVerifiedSE : unnamed
    ApplicationSystemEvent <|-- OTPSentSE : unnamed
    ApplicationSystemEvent <|-- RBPFormOpenedSE : unnamed
    ApplicationSystemEvent <|-- RBPUpdateStartedSE : unnamed
    ApplicationSystemEvent <|-- InformationSentSE : unnamed
```
