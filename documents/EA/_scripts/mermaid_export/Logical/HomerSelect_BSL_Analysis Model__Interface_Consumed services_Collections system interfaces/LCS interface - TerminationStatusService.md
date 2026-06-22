# LCS interface - TerminationStatusService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces
- **Diagram ID**: 97673
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class TerminationStatusRS["TerminationStatusRS"]
    class TerminationStatusRQ["TerminationStatusRQ"]
    class TerminationStatusService["TerminationStatusService"]
    class TerminationStatus["TerminationStatus"]
    class TerminationItem["TerminationItem"]
    TerminationStatusService ..> TerminationStatusRS : unnamed
    TerminationStatusService ..> TerminationStatusRQ : unnamed
    TerminationStatusRQ ..> TerminationItem : unnamed
    TerminationItem ..> TerminationStatus : unnamed
```
