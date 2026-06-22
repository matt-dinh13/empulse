# Interest Back 

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Logical Data Model
- **Diagram ID**: 163992
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Interest_Back_Request["Interest Back Request"]
    class Period_Status_Reason["Period Status Reason"]
    class Logical_Data_Model_Loan_Service_Request_domain["Logical Data Model : Loan Service Request domain"]
    class Loan_Service_Request["Loan Service Request"]
    class Period_Status["Period Status"]
    class Interest_Back_Period["Interest Back Period"]
    Interest_Back_Period ..> Period_Status : unnamed
    Loan_Service_Request <|-- Interest_Back_Request : unnamed
    Logical_Data_Model_Loan_Service_Request_domain --> Loan_Service_Request : unnamed
    Interest_Back_Period ..> Period_Status_Reason : unnamed
    Interest_Back_Request o-- Interest_Back_Period : unnamed
```
