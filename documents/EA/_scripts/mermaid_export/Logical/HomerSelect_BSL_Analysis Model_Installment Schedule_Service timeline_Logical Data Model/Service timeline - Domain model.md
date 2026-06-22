# Service timeline - Domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Service timeline/Logical Data Model
- **Diagram ID**: 137632
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Logical_Data_Model_Loan_Service_Request["Logical Data Model::Loan Service Request"]
    class Logical_Data_Model_Contract["Logical Data Model::Contract"]
    class Service_timeline["Service timeline"]
    Logical_Data_Model_Contract o-- Service_timeline : unnamed
    Service_timeline --> Logical_Data_Model_Loan_Service_Request : unnamed
```
