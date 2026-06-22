# Contract cancellation - Logical data model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Logical data model
- **Diagram ID**: 134364
- **Elements**: 2
- **Connectors**: 1

```mermaid
classDiagram
    class Contract_Status_Transition_Request_for_Cancellation["Contract Status Transition Request for Cancellation"]
    class Contract_Status_Transition_Request["Contract Status Transition Request"]
    Contract_Status_Transition_Request <|-- Contract_Status_Transition_Request_for_Cancellation : unnamed
```
