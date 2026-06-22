# Collection tools evaluation domains

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Logical Data Model
- **Diagram ID**: 85502
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Service_Evaluation_Result_Detail["Service Evaluation Result Detail"]
    class Available_Collection_Tool_Service["Available Collection Tool Service"]
    class Service_Evaluation_Status["Service Evaluation Status"]
    class Service_Evaluation_Result["Service Evaluation Result"]
    Service_Evaluation_Result o-- Service_Evaluation_Result_Detail : unnamed
    Service_Evaluation_Result ..> Service_Evaluation_Status : unnamed
    Service_Evaluation_Result ..> Service_Evaluation_Status : unnamed
    Available_Collection_Tool_Service o-- Service_Evaluation_Result : unnamed
```
