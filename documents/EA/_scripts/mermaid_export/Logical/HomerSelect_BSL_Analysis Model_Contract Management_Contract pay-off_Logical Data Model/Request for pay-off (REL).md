# Request for pay-off (REL)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Logical Data Model
- **Diagram ID**: 111367
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Contract_Status_Transition_Request_Type["Contract Status Transition Request Type"]
    class MOD_Contract["{MOD}Contract"]
    class Contract_Status_Transition_Request_for_Pay_off["Contract Status Transition Request for Pay-off"]
    class Contract_Status_Transition_Request["Contract Status Transition Request"]
    Contract_Status_Transition_Request <|-- Contract_Status_Transition_Request_for_Pay_off : unnamed
    Contract_Status_Transition_Request ..> Contract_Status_Transition_Request_Type : unnamed
    MOD_Contract o-- Contract_Status_Transition_Request : unnamed
```
